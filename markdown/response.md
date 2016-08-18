# Response
 - [Registry](#registry)
 - [Response Methods](#response)

<a name="registry"></a>
## Registry

A response is a type of registry and a registry is a type of array object
in which, we are dealing with one property which is an array. Every method
in an array object helps interacting with that object like a native array
and with a registry, every method is designed to make it easier to manipulate
the contents of an array. Particularly, a registry contains methods to manage
a multi dimensional array. Since a response contains header, status, content,
etc. a response object deals with these like a registry as well. But at the
end of the day, a registry is a glorified array.

###### Remember Routes Uses Responses
```
<?php
cradle()->get('Some Event', function($response, $response) {
	//Do something here
});

```

To see what's inside of a response, you can simply echo it out like the
following.

```

echo $response;

```

And it will show JSON like the one representing this page.

```
{
    "headers": {
        "Content-Type": "text\/html; charset=utf-8"
    },
    "code": 200,
    "header": {
    	"Status": "200 OK",
    },
    "body": {
        "error": false,
        "results": {
        	"menu": {
            	"#registry": "Registry",
            	"#methods": "Response Methods",
            }
        }
    }
}
```

To access the `"Registry"` in the above JSON, you can do so in two ways

```

$response->get('body', 'results', 'menu', '#registry');

$response->getDot('body.results.menu.#registry');

```

Like wise, setting that same path to `"Introduction"` can be done like this.

```

$response->set('body', 'results', 'menu', '#registry', 'Introduction');

$response->setDot('body.results.menu.#registry', 'Introduction');

```

Removing that path is similar as well.

```

$response->remove('body', 'results', 'menu', '#registry');

$response->removeDot('body.results.menu.#registry');

```

And checking for data can be like this.

```

$response->exists('body', 'results', 'menu', '#registry');

$response->isDot('body.results.menu.#registry');

```

```info
 If you have an actual `.` in your path, you can change the delimeter like `$response->getDot('body-results-menu-#registry', '-');`
```

<a name="methods"></a>
## Response Methods

### Content
Though at the end a response body should be a string, dealing with the body
before that could be an array. This makes a lot of sense if you are building
REST calls for example. So content methods comes in two flavors, when it's
an array or when it's a string. When it's an array, the response object will
be built out like the following.

```
<?php
array(
    'error' => false,
    'message' => 'A message',
    'validation' => array(
        'post_title' => 'Cannot be empty'
    )
    'results' => array(
        'post_title' => 'A Title named Foo Bar'
    )
)

```

And the following methods can help build this structure.

```

$response->isContentFlat(); //is it a string or array?

$response->addValidation(...$args, $value);

$response->getResults(...$args);

$response->setResults(...$args, $value);

$response->getValidation(...$args);

$response->setError(true, $message);

``

And when you know content is a string, you can use these methods.

```

$response->getContent(true); //if the content is an array make it into json

$response->hasContent();

$response->setContent($content);

```

### Other Methods

There's quite a few other useful methods worth noting as well, but to
give you the gist of it, here they are.

```

$response->addHeader(...$args);

$response->getHeader(...$args, $value);

$response->setStatus($code, $status);

$response->getStatus();

```
