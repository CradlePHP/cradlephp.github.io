---
layout: documentation
class: page-docs page-docs-development
title:  "Development"
description: "Cradle is a feature rich, modern admin builder. Build apps faster. Developer friendly. Open Source."
menu_title: Development
menu:
  render: Render
  redirect: Redirect
  route: Route
  where: Where to Code
---

# Development

`cradle/cradle-system` is the package that manages all of the schemas, relations
and models from a UI perspective. This package has routes, templates, events,
SQL, ElasticSearch and Redis built in. Essentially this package is the main admin
feature and there will be a time you may want to add functionality to the admin.

 - [Render](#render)
 - [Redirect](#redirect)
 - [Route](#route)
 - [Where to Code](#where)

In order to add functionality to existing admin packages we follow an override
principle called the 3'R's.

<a name="render"></a>
## Render

The render flag will tell the admin route how far it should render a page. If
you wanted to call the admin route but didn't want it to render anything you
can do so like the following example.

###### Dont Render Route
```php
$this->get('/admin/profile/search', function($request, $response) {
    //do not render, just get the results
    $request->setStage('render', 'false');
    //call the profile/search route
    $this->routeTo('get', '/admin/system/model/profile/search', $request, $response);
    //render your custom body and page here...
});
```

This will allow you to customize your our body and page wrapper template without
the need to maintain how the data is collected. To get the data from this route
call you can use `$response->getResults()`.

If you wanted to use the default admin body template and still customize your
own page wrapper template you can do so like the following example.

###### Render Body Only Route
```php
$this->get('/admin/profile/search', function($request, $response) {
    //do not render, just get the results
    $request->setStage('render', 'body');
    //call the profile/search route
    $this->routeTo('get', '/admin/system/model/profile/search', $request, $response);
    //render your custom page here...
});
```

The contents of the body will be found in `$response->getContent()`. From there
you can render your page wrapper template however you like.

<a name="redirect"></a>
## Redirect

The redirect flag will be considered whenever an admin route redirects to
another page. If you wanted to call the admin route and wanted to redirect back
to your custom page you can do so like the following example.

```php
$this->post('/admin/profile/create', function($request, $response) {
    //do not render, just get the results
    $request->setStage('redirect_uri', '/admin/profile/search');
    //call the profile/create route
    $this->routeTo('post', '/admin/system/model/profile/create', $request, $response);
});
```

<a name="route"></a>
## Route

The route flag will be considered whenever an admin route also calls another
route. This can happen when the admin route has an error and instead of
redirecting will simply call another route to load. If you wanted to call the
admin route and wanted to use your custom route in case of errors to process
you can do so like the following example.

```php
$this->post('/admin/profile/create', function($request, $response) {
    //do not render, just get the results
    $request->setStage('route', '/admin/profile/create');
    //call the profile/create route
    $this->routeTo('post', '/admin/system/model/profile/create', $request, $response);
});
```

<a name="where"></a>
## Where to Code

Your customized code can exist in 3 locations. Read more about the
[File Structure](/docs/framework/structure.html).

 - `/app/`
 - `/bootstrap/`
 - `/module/`

`/app/` and `/module/` are where root packages would go which means you need to
write code there as packages. Read more about
[Framework Packages](/docs/framework/packages.html) and
[Writing a Package](/docs/concepts/packages.html)
