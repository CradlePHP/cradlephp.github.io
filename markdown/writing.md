# Writing Your First App

In this tutorial, we will be creating a quick TODO list. For the sake of simplicity,
we will be storing data in `$_SESSION` and using [Handlebars](http://handlebarsjs.com)
for the templating engine.

First open up `public/index.php` and add the following routes before the `->render()` line.

###### `public/index.php`
```

    ->get('/todo', function ($request, $response) {
        //TODO
    })

    ->post('/todo/create', function ($request, $response) {
        //TODO
    })

    ->get('/todo/remove/:id', function ($request, $response) {
        //TODO
    })

```

What we did here is outline the routes we will be eventually populating. Next,
lets create a new file called `template.html` in the `public` folder and
populate the file with the following content.

###### `public/template.html`
```

<h1>TODO</h1>
<form method="post" action="/todo/create">
    <input type="text" name="detail" />
    <button>Create</button>
</form>
{{#if rows}}
<table width="100%" border="1" cellpadding="5" cellspacing="0">
    {{#each rows}}
    <tr>
        <td>{{detail}}</td>
        <td><a href="/todo/remove/{{@key}}">Remove</a></td>
    </tr>
    {{/each}}
</table>
{{else}}
<h4>Nothing TODO, that might be a good thing :)</h4>
{{/if}}

```

If you are unfamiliar with Handlebars, documentation can be found
[here](http://handlebarsjs.com). Now that we have a basic template, we can
continue to populate the routes. Let's first populate the `GET /todo` route.
Paste the following within the `->get('/todo')` callback.

###### `public/index.php`
```
    ->get('/todo', function ($request, $response) {
        $rows = [];
        if($request->hasSession('todo')) {
            $rows = $request->getSession('todo');
        }

        $response->setResults('rows', $rows);
        $data = $response->getResults();

        $content = file_get_contents(__DIR__ . '/template.html');
        $handlebars = new Cradle\Handlebars\HandlebarsHandler();
        $template = $handlebars->compile($content);
        $response->setContent($template($data));
    })
```

You can now go to `127.0.0.1:8888/todo` in your browser to see your first form
and list. This is great, but let's make the form and list dynamically work.

Next, let's populate the `POST /todo/create` route. Paste the following within the
`->post('/todo/create')` callback.

###### `public/index.php`
```

    ->post('/todo/create', function ($request, $response) {
        $detail = $request->getStage('detail');

        if($detail) {
            $rows = [];
            if($request->hasSession('todo')) {
                $rows = $request->getSession('todo');
            }

            $rows[] = ['detail' => $detail];
            $request->setSession('todo', $rows);
        }

        $this->triggerRoute('get', '/todo', $request, $response);
    })

```

Lastly, let's populate the `GET /todo/remove/:id` route. Paste the following within the
`->get('/todo/remove/:id')` callback.

###### `public/index.php`
```

    ->get('/todo/remove/:id', function ($request, $response) {
        $id = $request->getStage('id');
        if($request->hasSession('todo')) {
            $rows = $request->getSession('todo');

            if(isset($rows[$id])) {
                unset($rows[$id]);
            }

            $request->setSession('todo', $rows);
        }

        $this->triggerRoute('get', '/todo', $request, $response);
    })

```

Finally return to `127.0.0.1:8888/todo` in your browser to double check the form
and list are working.
