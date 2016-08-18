# Request

 - [Registry](#registry)
 - [Request Methods](#methods)

## Registry
A request is a type of registry and a registry is a type of array object in
which, we are dealing with one property which is an array. Every method in an
array object helps interacting with that object like a native array and with a
registry, every method is designed to make it easier to manipulate the contents
of an array. Particularly, a registry contains methods to manage a multi
dimensional array. Since there are a lot of arrays in a PHP request like
`$_POST`, `$_GET`, `$_FILES`, `$_SERVER`, `$_SESSION`, `$_COOKIE`, a request
object deals with these like a registry as well. But at the end of the day,
a registry is a glorified array.

###### Remember Routes Uses Requests
```
<?php
cradle()->get('Some Event', function($request, $response) {
	//Do something here
});

```

To see what's inside of a request, you can simply echo it out like the following.

```

echo $request;

```
And it will show JSON like the one representing this page.

```
{
    "args": null,
    "body": "",
    "cookie": {
        "PHPSESSID": "r4584trjg26hfhtnc98t9hvn91"
    },
    "files": [],
    "post": [],
    "server": {
        "REDIRECT_STATUS": "200",
        "HTTP_HOST": "cradle.openovate.dev",
        "HTTP_CONNECTION": "keep-alive",
        "HTTP_UPGRADE_INSECURE_REQUESTS": "1",
        "HTTP_USER_AGENT": "Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/51.0.2704.84 Safari\/537.36",
        "HTTP_ACCEPT": "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/webp,*\/*;q=0.8",
        "HTTP_REFERER": "http:\/\/cradle.openovate.dev\/docs\/middleware.html",
        "HTTP_ACCEPT_ENCODING": "gzip, deflate, sdch",
        "HTTP_ACCEPT_LANGUAGE": "en-US,en;q=0.8,th;q=0.6,fr;q=0.4",
        "HTTP_COOKIE": "PHPSESSID=r4584trjg26hfhtnc98t9hvn91",
        "HTTP_ALEXATOOLBAR_ALX_NS_PH": "AlexaToolbar\/alx-4.0",
        "PATH": "\/usr\/bin:\/bin:\/usr\/sbin:\/sbin",
        "SERVER_SIGNATURE": "",
        "SERVER_SOFTWARE": "Apache\/2.2.29 (Unix) PHP\/7.0.8 DAV\/2 mod_ssl\/2.2.29 OpenSSL\/0.9.8zg mod_perl\/2.0.7 Perl\/v5.16.2",
        "SERVER_NAME": "cradle.openovate.dev",
        "SERVER_ADDR": "127.0.0.1",
        "SERVER_PORT": "80",
        "REMOTE_ADDR": "127.0.0.1",
        "DOCUMENT_ROOT": "\/server\/public",
        "SERVER_ADMIN": "you@example.com",
        "SCRIPT_FILENAME": "\/server\/public\/openovate\/cradle\/current\/index.php",
        "REMOTE_PORT": "62312",
        "REDIRECT_URL": "\/docs\/request.html",
        "GATEWAY_INTERFACE": "CGI\/1.1",
        "SERVER_PROTOCOL": "HTTP\/1.1",
        "REQUEST_METHOD": "GET",
        "QUERY_STRING": "",
        "REQUEST_URI": "\/docs\/request.html",
        "SCRIPT_NAME": "\/index.php",
        "PHP_SELF": "\/index.php",
        "REQUEST_TIME_FLOAT": 1470057849.965,
        "REQUEST_TIME": 1470057849
    },
    "path": {
        "string": "\/docs\/request.html",
        "array": [
            "",
            "docs",
            "request.html"
        ]
    },
    "method": "GET",
    "query": "",
    "session": [],
    "route": {
        "method": "get",
        "path": "\/docs\/*",
        "variables": [
            "request.html"
        ]
    }
}
```

To access the `"request.html"` in the above JSON, you can do so in two ways

```

$request->get('route', 'variables', 0);

$request->getDot('route.variables.0');

```

Like wise, setting that same path to `"flows.html"` can be done like this.

```

$request->set('route', 'variables', 0, 'flows.html');

$request->setDot('route.variables.0', 'flows.html');

```

Removing that path is similar as well.

```

$request->remove('route', 'variables', 0);

$request->removeDot('route.variables.0');

```

And checking for data can be like this.

```

$request->exists('route', 'variables', 0);

$request->isDot('route.variables.0');

```

```info
 If you have an actual `.` in your path, you can change the delimeter like
 `$request->getDot('route-variables-0', '-');`
```

<a name="methods"></a>
##  Request Methods

Wrapping these methods further the CRUD for `$_POST`, `$_GET`, `$_FILES`,
`$_SESSION`, `$_COOKIE` looks like the following

```

$request->getPost(...$path);

$request->setPost(...$path, $value);

$request->hasPost(...$path);

```

### Stage

Also to support Piping, there is an ever changing property called
`$request->stage`, which is similar to $_REQUEST, in that the `$_GET`,
`$_POST` and **binded URL parameters** are already populated respectively
in that order.

```

$request->getStage(...$path);

$request->setStage(...$path, $value);

$request->hasStage(...$path);

```

### Server

`$_SERVER` is usually one dimensional. So methods vary to this.

```

$request->getServer($key);

$request->setServer($key, $value);

$request->hasServer($key);

```

### Content
In a standard request, you could have received raw data via `php://input`.
To get this data you can use `$request->getContent()`

 Of course you can check if `$request->hasContent();`.

### Other Methods
There's quite a few other useful methods worth noting as well, but to
give you the gist of it, here they are.

```

$request->getVariables($index);

$request->getRoute(...$args);

$request->setRoute(...$args, $value);

$request->hasRoute(...$args);

$request->getMethod();

$request->getPath('string');

$request->getPath('array');

$request->getQuery();

$request->getArgs(); //CLI $argv;

```
