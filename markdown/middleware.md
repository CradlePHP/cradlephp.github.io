# Middleware
 - [Introduction](#intro)
 - [Pre-Processing](#pre)
 - [Error Processing](#error)
 - [Post Processing](#post)

<a name="intro"></a>
## Introduction

Middleware is a concept of allowing pieces of functionality to be injected
anywhere at your discretion. Almost like plugins or extensions, the popularity
of middleware came from third party vendors being able to quickly plug into
applications.

Routes is a kind of middleware interface because you can add functionality
using the include method explained before.

###### Routing Middleware Interface
```
<?php
cradle()->get('/some/path', include('/some/event/handler'));

```

There are other areas where you may need to plug in to other than the time of
routing for example before and after the routing and during an error.

<a name="pre"></a>
## Pre-Processing
Middleware can be inserted before routing with the following example.

```
<?php
cradle()->preprocess(function($request, $response) {
	//Do something before routing
});
```

Like routing, a `$request` and a `$response` will be passed. The usual
activity for a `->preprocess()` would be populating the `$request` further,
presetting a $response and/or adding more available methods. The Bootstrap
heavily uses `->preprocess()` for example.

<a name="error"></a>
## Error Processing

```
<?php
cradle()->error(function($request, $response, $error) {
	//Do something because there was an error
});

```

With error processors, like pre-processors a $request and a $response will be
passed. A third argument called `$error` will also be passed which will be an
**Exception** object. Error processors should be treated as a last ditch effort
to report the error to the user in a nice way.

```error
Because errors that happen in an error handler will throw that error if not caught again.
Bootstrap: Errors presets what happens whens there's an error and your free to change/remove/add on to it.
```

<a name="post"></a>
## Post Processing
```
<?php
cradle()->postprocess(function($request, $response, $error) {
	//Do something after the connection is closed
});

```

Post processors are like pre-processors except that it waits till the user
has received a response and the connection is closed before being activated.
This is a nice feature where you can do short time consuming tasks if you do
not have access to a queue available.

```warning
 A caveat about post-processors is that writing to sessions will no longer be
 available. You can write to it, but on refresh, it won't remember it like if
 it was still open.
```
