# Introduction

 - [Why ?](#why)
 - [tl;dr](#tldr)

<a name="why"></a>
## Why ?

Cradle is a simple micro framework built on the latest PHP 7. Its main
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

Cradle does not require any particular data store or template engine. There
is no defined file structure, no required dependencies and is not specific
to building web applications. There are no required dependencies, it does
not require you to write classes and features are minimized to manage overhead.

<a name="tldr"></a>
## tl;dr

To help explain this simple approach in summary, the following briefly
describes the core features of Cradle.

- [Events](#events)
- [Request](#request)
- [Response](#response)
- [Routing](#routing)
- [Middleware](#middleware)

A further tl;dr can be expressed by installing the [Kitchen Sink](/docs/sink.html)

<a name="events"></a>
## Events

Events can be formed like the following example where `create-user` and
`$data` are arbitrary.

```

cradle()->on('create-user', function(...$data) {
    //insert to database
});

```

Triggering events can be achieved with the following example where 'create-user'
is the name of the event to execute, `foo` and `bar` will be passed to `$data`
from the example above.

```

cradle()->trigger('create-user', 'foo', 'bar');

```

Events can also be called from the command line like the following example.

```

$ vendor/bin/cradle update-user name="John Doe" --age 45

```

The following code could receive and process this command where `$req` is
a `Cradle\Http\Request` object and `$res` is a `Cradle\Http\Response`
object.

```

cradle()->on('update-user', function($req, $res) {
    $name = $req->getStage('name');
    $age = $req->getStage('age');
    $res->setContent('Hello, ' . $name);
});

```

More information in depth can be found [here](/docs/events.html).

<a name="request"></a>
## Request

Request objects are used whenever a consumers uses your application via command
line or http request. Request objects provide many useful methods like the
following.

```

$req->getPost('foo');
$req->getServer('REQUEST_URI');
$req->getCookies('name');
$req->getSession('name');
$req->getFiles();

```

Request, can be accessed like an array because it implements ArrayAccess and
when outputted will output as a JSON hash will look like the following.

```

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

More information about requests in depth can be found [here](/docs/request.html).

<a name="response"></a>
## Response

Response objects are used as a format for parsing data to be returned back to
a consumer via command line or HTTP. Response objects have similar
traits to Request and likewise provide many useful methods like the following.

```

$res->getResults(...$args);

$res->setResults(...$args, $value);

$res->setError(true, $message);

$res->addHeader('Content-Type', 'text/plain');

$res->setContent('Hello, World');

```

Response, can be accessed like an array because it implements ArrayAccess and
when outputted will output as a JSON hash will look like the following.

```

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

More information about responses in depth can be found [here](/docs/response.html).

<a name="routing"></a>
## Routing

Routes can be formed like the following example where `/create/user` is arbitrary.

```

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

```

cradle()->route('OPTIONS', '/create/user', function($req, $res) {
    //Allow CORS
});

```

To enable routes you simply call `cradle()->render()` after all your route
definitions. More information about routing in depth can be found
[here](/docs/response.html).

<a name="middleware"></a>
## Middleware

`cradle()->render()` actually does four steps.

 - call all pre-processors
 - executes callbacks matching the routing with the actual request
 - call all post-processors
 - outputs results

Pre-processors and post-processors can be defined in the following manner.

```

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

```
cradle()->error(function($req, $res, $err) {
    //handle this error
});
```

The third argument in the above example passes the `Throwable $err` object
when it applies. When an error is thrown, the response code would be changed
to either 500 or 404. Errors are also triggered when we did not match a route
to an actual request.

More information about middleware in depth can be found
[here](/docs/middleware.html).
