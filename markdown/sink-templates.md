# Sink - Templating

In the sink, controllers uses a PHP version of
[Handlebars](http://handlebarsjs.com/) which in turn, follows a PHP version
of the implementation.

```

$template = cradle('global')->handlebars()->compile('Hello {world}');
echo $template(['world' => 'World!']);

```

Instead of using this implementation directly each `app` using templating, wrap
this in a method called `cradle('/app/api')->template($path, $data, $partials)`.
This definition can be found in both `app/api/src/package/methods.php` and
`app/www/src/package/methods.php`. Implementing this would look like the
following where `'developer/app/search'` translates to
`app/api/src/template/developer/app/search.html`

###### `app/api/src/controller/developer/app:33`
```

cradle('/app/api')->template('developer/app/search', $data);

```

To reuse the header and footer we can do so by triggering the
`render-developer-page` found in `app/api/src/controller/developer/app:42` and
its definition can be found in `app/api/src/package/events.php`.

We leave these methods in the root level of your code to allow you to customize
it for your needs while staying unopinionated in general. Custom helpers can
be added to `bootstrap/handlebars.php` in the following manner.

```

$handlebars->registerHelper('foo', function($value, $options) {
    return $value . ' bar';
});

```

and in your template you can start using it like `{{foo 'foo'}}` which would
result in `foo bar` when rendered.
