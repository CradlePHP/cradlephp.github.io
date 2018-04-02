---
layout: documentation
class: page-docs page-docs-concepts-introduction
title:  "Introduction - Documentation Concepts - Cradle"
description: "Events have two typical parts, which are to listen and to fire."
---
# Introduction

 - [Why ?](#why)
 - [Vanilla Version](#vanilla)
 - [tl;dr](#tldr)

<a name="why"></a>
## Why ?

Cradle began as a simple micro framework built on PHP 7. At its core, the main
feature is simplicity, designed for collaborating with other technologies in
your stack. Most PHP frameworks are built with a lot in mind, making developing
complex PHP centric apps much easier, assuming that PHP is the center of
everyone's world.

Modern applications these days, however usually do not rely on the LAMP/LEMP
stack alone. They use services for caching, indexing, file storage, push
messages, queuing, streams etc. They also use several different languages like
Python, Java, Node JS, R, Scala for all kinds of things. A good portion of apps
center around client side with React, Angular and mobile devices. With the
learning curve, configuration and extra weight that comes with a full
stack PHP framework, it's very impractical to use them for simple jobs.

### Unopinionated

Cradle at its core, does not require any particular data store or template
engine. There is no defined file structure, no required dependencies and is
not specific to building web applications. There are no required dependencies,
it does not require you to write classes and features are minimized to manage
overhead.

Though the full stack version of Cradle uses a template library called
[Handlebars](/docs/extras/handlebars.html) and an ORM called
[Storm](/docs/extras/storm.html), [Packages](/docs/concepts/packages.html) are
still free to choose their preferred ORM and templating language.

### Components

Cradle components are framework agnostic. They can be used with any PHP library
of your choosing. Components define basic objects and were designed around
[PHP Traits](http://php.net/manual/en/language.oop5.traits.php). To help enhance
your existing classes optionally. This makes it easier to integrate other
frameworks with these components. The following objects are defined in
components and can be used independently from the Cradle Framework.

 - [Model](/docs/concepts/model.html)
 - [Collection](/docs/concepts/collection.html)
 - [Registry](/docs/concepts/registry.html)
 - [Request](/docs/concepts/request.html)
 - [Response](/docs/concepts/response.html)
 - [Middleware](/docs/concepts/middleware.html)
 - [Router](/docs/concepts/routing.html)
 - [cUrl](/docs/extras/curl.html)
 - [Language](/docs/extras/i18n.html#language)
 - [Timezone](/docs/extras/i18n.html#timezone)
 - [Image](/docs/extras/image.html)

### Command Line

On a framework level, Cradle [events](/docs/concepts/events.html) are designed to
work on the command line. Which makes it easier to work with other languages.
Considering the following event definition.

```php
cradle()->on('foobar', function($request, $response) {
    echo 'Hello World';
});
```

Calling this event on the command line could look like this.

```bash
$ cradle foobar foo=1 --bar ok -xvf
```

<a name="vanilla"></a>
## Vanilla Version

To put all of this into practice you can install a complete vanilla version of
cradle with very minimal requirements.

### Server Requirements

The following are needed in order to successfully install Cradle. Please make
sure your sever meets the following requirements.

 - PHP >= 7.1
 - Composer

### Installation

Issue the Composer create-project command in your terminal:

```bash
$ composer create-project -s dev cradlephp/vanilla <project folder name>
```

Then go cd `<project folder name>/public` and run the following.

```bash
$ php -S localhost:8000
```

Optionally, you can configure your application's document / web root to the public directory.

### Load the Page

Open your browser to `http://localhost:8000` and you should see the following.

```bash
Welcome to Cradle!
```

<a name="tldr"></a>
## tl;dr

To help explain this simple approach in summary, the following briefly
describes the core features of Cradle.

- [Events](#events)
- [Request](#request)
- [Response](#response)
- [Routing](#routing)
- [Middleware](#middleware)

<a name="events"></a>
## Events

Events can be formed like the following example where `create-user` and
`$data` are arbitrary.

```php
cradle()->on('create-user', function(...$data) {
    //insert to database
});
```

Triggering events can be achieved with the following example where `create-user`
is the name of the event to execute, `foo` and `bar` will be passed to `$data`
from the example above.

```php
cradle()->trigger('create-user', 'foo', 'bar');
```

Events can also be called from the command line like the following example.

```bash
$ vendor/bin/cradle update-user name="John Doe" --age 45
```

The following code could receive and process this command where `$req` is
a `Cradle\Http\Request` object and `$res` is a `Cradle\Http\Response`
object.

```php
cradle()->on('update-user', function($req, $res) {
    $name = $req->getStage('name');
    $age = $req->getStage('age');
    $res->setContent('Hello, ' . $name);
});

```

More information in depth can be found [here](/docs/concepts/events.html).

<a name="request"></a>
## Request

Request objects are used whenever a consumers uses your application via command
line or http request. Request objects provide many useful methods like the
following.

```php
$req->getPost('foo');
$req->getServer('REQUEST_URI');
$req->getCookies('name');
$req->getSession('name');
$req->getFiles();

```php
Request, can be accessed like an array because it implements ArrayAccess and
when outputted will output as a JSON hash will look like the following.

```json
{
    "args": null,
    "body": "",
    "cookie": {},
    "files": {},
    "get": {
        "baz": "zoo"
    },
    "post": {
        "foo": "bar"
    },
    "stage": {
        "baz": "zoo",
        "foo": "bar"
    },
    "session": {},
    "server": {
        "HTTP_HOST": "cradle.dev",
        "REQUEST_METHOD": "POST",
        "REQUEST_URI": "\/docs\/introduction.html?baz=zoo",
        ...
    },
    "path": {
        "string": "\/docs\/introduction.html",
        "array": [
            "",
            "docs",
            "introduction.html"
        ]
    },
    "method": "POST",
    "query": "baz=zoo",
    "route": {
        "method": "post",
        "path": "\/docs\/*",
        "variables": [
            "introduction.html"
        ]
    }
}

```

### Stage

Request comes with aggregated data from the `post`, `get` and url variables
found in `stage`. To access stage data you can use `$req->getStage('foo')` to
get the value of `foo` or get the entire staged data with `$req->getStage()`.
Manipulating the stage likewise can be done like this `$req->setStage('foo', 'bar')`.
In practice we manipulate stage data in preparation of a write process like
inserting into a database.

More information about requests in depth can be found [here](/docs/concepts/request.html).

<a name="response"></a>
## Response

Response objects are used as a format for parsing data to be returned back to
a consumer via command line or HTTP. Response objects have similar
traits to Request and likewise provide many useful methods like the following.

```php
$res->getResults(...$args);

$res->setResults(...$args, $value);

$res->setError(true, $message);

$res->addHeader('Content-Type', 'text/plain');

$res->setContent('Hello, World');
```

Response, can be accessed like an array because it implements ArrayAccess and
when outputted will output as a JSON hash will look like the following.

```json
{
    "headers": {
        "Content-Type": "text\/plain"
    },
    "code": 200,
    "header": {
        "Status": "200 OK",
    },
    "json": {
        "error": false,
        "results": {
            "menu": {
                "#registry": "Registry",
                "#methods": "Response Methods",
            }
        }
    },
    "content": "Hello, World"
}
```

### JSON and Content

When there is no content set in your response by default the JSON data is
outputted. Otherwise, we use `results` found in `json` for binding with
template engines.

More information about responses in depth can be found [here](/docs/concepts/response.html).

<a name="routing"></a>
## Routing

Routes can be formed like the following example where `/create/user` is arbitrary.

```php
cradle()->get('/create/user', function($req, $res) {
    //show a form
});

cradle()->post('/create/user', function($req, $res) {
    //insert into database
});
```

As well as `get` and `post` in the above example there are three more ease of use
methods called `put`, `delete` and `all`. Custom methods can be dealt with in this
manner.

```php
cradle()->route('OPTIONS', '/create/user', function($req, $res) {
    //Allow CORS
});
```

To enable routes you simply call `cradle()->render()` after all your route
definitions. More information about routing in depth can be found
[here](/docs/concepts/response.html).

<a name="middleware"></a>
## Middleware

`cradle()->render()` actually does four steps.

 - call all pre-processors
 - executes callbacks matching the routing with the actual request
 - call all post-processors
 - outputs results

Pre-processors and post-processors can be defined in the following manner.

```php
cradle()->preprocess(function ($req, $res) {
    //do something before routing
});

cradle()->postprocess(function ($req, $res) {
    //do something after routing
});
```

Post-processors when going through the normal `render` method, are executed
after the response has been sent out to the user and the connection is closed.
The only caveat to post-processors is that sessions as in `$_SESSION` can no
longer be written to.

Pre-processors can be executed exclusively by using the following code
`cradle()->prepare()`. Likewise post-processors can be called like this
`cradle()->shutdown()`.

#### Errors

When going through the normal `render` method, errors are handled with the
following construct.

```php
cradle()->error(function($req, $res, $err) {
    //handle this error
});
```

The third argument in the above example passes the `Throwable $err` object
when it applies. When an error is thrown, the response code would be changed
to either 500 or 404. Errors are also triggered when we did not match a route
to an actual request.

More information about middleware in depth can be found
[here](/docs/concepts/middleware.html).
