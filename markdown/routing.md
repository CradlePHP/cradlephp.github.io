# Routing
 - [Basics](#basics)
 - [Request Methods](#methods)
 - [Request Paths](#paths)
 - [Route Handlers](#handlers)
 - [Mini Apps](#mini)

<a name="basics"></a>
## Basics

Routing is a subset of [Flows](/docs/flows.html) which is a subset of
[Events](/docs/events.html). Routing wraps how event listeners work and
designed to resolve request methods and paths. The basic route listener
looks like the following.

###### Basic Routing
```
<?php
cradle()->get('Some Event', function($request, $response) {
	//Do something here
});

```

Which is very similar to how the basic event listener looks like in retrospec.
The two main differences here are instead of using `->on()`, we are using
something called `->get()` and there are two predefined arguments passed called a
`$request` and a `$response`. First let's take a look at what the `->get()` is
exactly.

<a name="methods"></a>
## Request Methods

There are four common request methods a website deals with and they are the
following.

### Common Request Methods

 - GET
 - POST
 - PUT
 - DELETE

When a page loads for example, that method is called `GET` and when you submit
a form the method is usually a POST. So what we need to take into consideration
are a request method and from what URL path the user is requesting that from.
The following shows how we can consider requests which are called routing
methods.

###### A routing method
```
<?php
cradle()->route('GET', '/some/path/', function($request, $response) {
	//Do something here
});

```

This method has three arguments which combines thoughts of an event and
thoughts of a website request into one. The first argument is the request
method. You are free to put any arbitrary name here, but the user will send
up one of a fixed possibility which were discussed above. The second argument
in the `->route()` method is called the request path. to simplify, this is
the folder request a user makes for example, if a user loaded
[http://google.com/about](http://google.com/about), `/about` would be the
path name. The last argument just like events is called the route handler.

When it comes to request methods, mentioned before, the routing object has
predefined methods that acknowledge this commonality. The following all of
which wraps the `->route()` method for your convenience.

```
<?php
cradle()
	->get('/some/path/', function($request, $response) {})
	->post('/some/path/', function($request, $response) {})
	->put('/some/path/', function($request, $response) {})
	->delete('/some/path/', function($request, $response) {});

```

If you wanted listen to all request methods in one go you can do so like this.

```
<?php
cradle()->all('/some/path/', function($request, $response) {});

```

<a href="paths"></a>
## Request Paths

### Star Variables

With paths, they can also be expressed with wildcards by adding a `*` as in
the following.

```
<?php
cradle()->get('/some/*/stuff', function($request, $response) {});

```

When the request path is `/some/good/stuff`, the above handler will be
called, like wise with `/some/bad/stuff`, however `/some/stuff` will not fire
the above handler.

To take on an *N* amount of wildcards you can add `*` as in the following.

```
<?php
cradle()->get('/some/**/stuff', function($request, $response) {});

```

When the request path is `/some/good/stuff`, the above handler will be
called, like wise with `/some/even/better/stuff`, however `/some/stuff` will
not fire the above handler. If you wanted a route handler to handle all
requests that deal with all /article requests for example, you can do so
like this.

```
<?php
cradle()->all('/article/**', function($request, $response) {});

```

Or like this.

```
<?php
cradle()->all('**', function($request, $response) {});

```

```warning
This will call the handler on every request. You may not want that.
```

### Binding Parameters
You can also use binding in routing if you care about the name of the
dynamic paths being passed. The following shows how this can be done.

```
<?php
cradle()->get('/some/:name/stuff', function($request, $response) {
	echo $request->getStage('name');
});

```

<a href="handlers"></a>
## Route Handlers
Much like events, routing can be expressed as a function or an include
like the following.

###### Include Handlers
```
<?php
cradle()->get('/some/path', include('/some/event/handler'));

```

Much like flows, routing can also call on class methods like the following.

###### Class Handlers
```
<?php
cradle()->get('/some/path', 'Controller@action');

cradle()->get('/some/path', 'Controller::action');
```

Routing adopts the flow interface which allows this to happen.

###### Handler Flows
```
<?php
cradle()->get(
	'/some/path',
    'Another Event',
    include('/another/event.php'),
    'Controller@action',
    'Controller::action',
    ...$moreActions
);
```

Where it differs is, by default, routing provides two arguments which are
called a `$request` and a `$response`. For consistency a `$request` and a
`$response` should be passed whenever you trigger an event within a route
handler. For example, in flows, we discussed forking, and with routing the
exact same applies, with the addition of passing the $request and `$response`
first like the example below.

```
<?php
return function($request, $response) {
	//Do Something here

    //Trigger a fork
    if($good) {
    	$this->triggerSubflow('A Good Event', $request, $response);
    } else {
    	$this->triggerSubflow('A Bad Event', $request, $response);
    }
};

```

 `$request` followed by `$response` should always be at the start of your
 arguments for consistency with other packages.

<a href="mini"></a>
## Mini Apps

If your routing with flows gets too large in one file, you can optionally
split up those routes in mini app files. In a new file, the following is
possible.

```
<?php

use Cradle\Framework\App;
use Cradle\Framework\Flow;

$app = App::i()
	->get('/search', 'Profile Search Page')
	->get('/detail/:id', 'Profile Detail Page');

return cradle()->app('/profile', $app);

```

Mini apps, in the above example match `/profile/search` to
`'Profile Search Page'`. Mini apps are just like the global `cradle()` but t
here are a few things that need to be understood about them.

 1. Mini Apps have their own routing tables.
 2. Events are still global
 3. Pre Processors are triggered globally (not with the mini app middleware)
 4. Errors are triggered globally (not with the mini app middleware)
 5. Post Processors are triggered globally (not with the mini app middleware)
