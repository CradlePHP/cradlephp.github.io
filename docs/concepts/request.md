---
layout: documentation
class: page-docs page-docs-concepts-request
title:  "Request - Documentation Concepts - Cradle"
description: "A request contains all the data necessary to determine a response."
---
# Request

 - [Registry](#registry)
 - [Request Methods](#methods)
 - [API (1)](#api)
    - [CliTrait (2)](#cli)
    - [ContentTrait (3)](#content)
    - [CookieTrait (4)](#cookie)
    - [FileTrait (4)](#file)
    - [GetTrait (4)](#get)
    - [PostTrait (4)](#post)
    - [RouteTrait (4)](#route)
    - [ServerTrait (10)](#server)
    - [SessionTrait (4)](#session)
    - [StageTrait (5)](#stage)

<a name="registry"></a>
## Registry
A request is a type of registry and a registry is a type of array object in
which, we are dealing with one property which is an array. Every method in an
array object helps interacting with that object like a native array and with a
registry, every method is designed to make it easier to manipulate the contents
of an array. Particularly, a registry contains methods to manage a multi
dimensional array. Since there are a lot of arrays in a PHP request like
`$_POST`, `$_GET`, `$_FILES`, `$_SERVER`, `$_SESSION`, `$_COOKIE`, a request
object deals with these like a registry as well. But at the end of the day,
a registry is a glorified array. See [Registry](/docs/concepts/registry.html)
for more information.

###### Remember Routes Uses Requests
```php
cradle()->get('Some Event', function($request, $response) {
    //Do something here
});
```

To see what's inside of a request, you can simply echo it out like the following.

```php
echo $request;
```
And it will show JSON like the one representing this page.

```json
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

```php
$request->get('route', 'variables', 0);

$request->getDot('route.variables.0');
```

Like wise, setting that same path to `"flows.html"` can be done like this.

```php
$request->set('route', 'variables', 0, 'flows.html');

$request->setDot('route.variables.0', 'flows.html');
```

Removing that path is similar as well.

```php
$request->remove('route', 'variables', 0);

$request->removeDot('route.variables.0');
```

And checking for data can be like this.

```php
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

```php
$request->getPost(...$path);

$request->setPost(...$path, $value);

$request->hasPost(...$path);
```

### Stage

Also to support Piping, there is an ever changing property called
`$request->stage`, which is similar to $_REQUEST, in that the `$_GET`,
`$_POST` and **binded URL parameters** are already populated respectively
in that order.

```php
$request->getStage(...$path);

$request->setStage(...$path, $value);

$request->hasStage(...$path);
```

### Server

`$_SERVER` is usually one dimensional. So methods vary to this.

```php
$request->getServer($key);

$request->setServer($key, $value);

$request->hasServer($key);
```

### Content
In a standard request, you could have received raw data via `php://input`.
To get this data you can use `$request->getContent()`

 Of course you can check if `$request->hasContent();`.

<a name="api"></a>
## API

`load` - Loads default data given by PHP

```php
$request->load();
```

----

<a name="cli"></a>
### CliTrait

`getArgs` - Returns CLI args if any

```php
$request->getArgs();
```

----

`setArgs` - Sets CLI args

```php
$request->setArgs([1, 2, 3]);
```

----

<a name="content"></a>
### ContentTrait

`getContent` - Returns final input stream as in `php://input`

```php
$request->getContent();
```

----

`hasContent` - Returns true if there was a populated input stream

```php
$request->hasContent();
```

----

`setContent` - Sets a custom input stream

```php
$request->setContent(fopen('php://input'));
```

----

<a name="cookie"></a>
### CookieTrait

`getCookies` - Returns $_COOKIE given name or all $_COOKIE

```php
$request->getCookies();
$request->getCookies('foo'); // $_COOKIE['foo']
```

----

`removeCookies` - Removes $_COOKIE given name or all $_COOKIE

```php
$request->removeCookies();
$request->removeCookies('foo'); // $_COOKIE['foo']
```

----

`hasCookies` - Returns true if has $_COOKIE given name or if $_COOKIE is set

```php
$request->hasCookies();
$request->hasCookies('foo'); // $_COOKIE['foo']
```

----

`setCookies` - Sets $_COOKIE given name or all $_COOKIE

```php
$request->setCookies(['foo' => 'bar']);
$request->setCookies('foo', 'bar'); // $_COOKIE['foo']
```

----

<a name="file"></a>
### FileTrait

`getFiles` - Returns $_FILES given name or all $_FILES

```php
$request->getFiles();
$request->getFiles('foo'); // $_FILES['foo']
```

----

`removeFiles` - Removes $_FILES given name or all $_FILES

```php
$request->removeFiles();
$request->removeFiles('foo'); // $_FILES['foo']
```

----

`hasFiles` - Returns true if has $_FILES given name or if $_FILES is set

```php
$request->hasFiles();
$request->hasFiles('foo'); // $_FILES['foo']
```

----

`setFiles` - Sets $_FILES given name or all $_FILES

```php
$request->setFiles(['foo' => 'bar']);
$request->setFiles('foo', 'bar'); // $_FILES['foo']
```

----

<a name="get"></a>
### GetTrait

`getGet` - Returns $_GET given name or all $_GET

```php
$request->getGet();
$request->getGet('foo'); // $_GET['foo']
```

----

`removeGet` - Removes $_GET given name or all $_GET

```php
$request->removeGet();
$request->removeGet('foo'); // $_GET['foo']
```

----

`hasGet` - Returns true if has $_GET given name or if $_GET is set

```php
$request->hasGet();
$request->hasGet('foo'); // $_GET['foo']
```

----

`setGet` - Sets $_GET given name or all $_GET

```php
$request->setGet(['foo' => 'bar']);
$request->setGet('foo', 'bar'); // $_GET['foo']
```

----

<a name="post"></a>
### PostTrait

`getPost` - Returns $_POST given name or all $_POST

```php
$request->getPost();
$request->getPost('foo'); // $_POST['foo']
```

----

`removePost` - Removes $_POST given name or all $_POST

```php
$request->removePost();
$request->removePost('foo'); // $_POST['foo']
```

----

`hasPost` - Returns true if has $_POST given name or if $_POST is set

```php
$request->hasPost();
$request->hasPost('foo'); // $_POST['foo']
```

----

`setPost` - Sets $_POST given name or all $_POST

```php
$request->setPost(['foo' => 'bar']);
$request->setPost('foo', 'bar'); // $_POST['foo']
```

----

<a name="route"></a>
### RouteTrait

`getRoute` - Returns route data given name or all route data

```php
$request->getRoute();
$request->getRoute('event');

//if '/foo/*/bar' and '/foo/zoo/bar'
$request->getRoute('variables'); //--> ['zoo']

//if '/foo/:name/bar' and '/foo/zoo/bar'
$request->getRoute('parameters'); //--> ['name' => 'zoo']
```

----

`getParameters` - Returns route parameters given name or all parameters

```php
$request->getParameters();

//if '/foo/:name/bar' and '/foo/zoo/bar'
$request->getParameters('foo'); //--> zoo
```

----

`getVariables` - Returns route variables given name or all variables

```php
$request->getVariables();

//if '/foo/*/bar' and '/foo/zoo/bar'
$request->getVariables(0); //--> zoo
```

----

`setRoute` - Sets a request route

```php
$request->setRoute([
    'event' => '#GET /foo/bar#',
    'parameters' => ['foo' => 'bar'],
    'variables' => ['foo', 'bar'],
]);
```

----

<a name="server"></a>
### ServerTrait

`getMethod` - Returns method if set

```php
$request->getMethod(); //--> GET | POST | PUT | ...
```

----

`getPath` - Returns path data given name or all path data

```php
$request->getPath(); //--> ['string' => '/foo/bar', 'array' => ['', 'foo', 'bar']]
$request->getPath('string'); //--> '/foo/bar'
$request->getPath('array'); //--> ['', 'foo', 'bar']
```

----

`getQuery` - Returns string query if set

```php
$request->getQuery(); //--> 'foo=bar'
```

----

`getServer` - Returns $_SERVER given name or all $_SERVER

```php
$request->getServer();
$request->getServer('foo'); // $_SERVER['foo']
```

----

`hasServer` - Returns true if has $_SERVER given name or if $_SERVER is set

```php
$request->hasServer();
$request->hasServer('foo'); // $_SERVER['foo']
```

----

`isMethod` - Returns true if method is the one given

```php
$request->isMethod('GET');
```

----

`setMethod` - Sets request method

```php
$request->setMethod('GET');
```

----

`setPath` - Sets path given in string or array form

```php
$request->setPath('/foo/bar');
```

----

`setQuery` - Sets query string

```php
$request->setQuery('foo=bar');
```

----

`setServer` - Sets $_SERVER given name or all $_SERVER

```php
$request->setServer(['foo' => 'bar']);
$request->setServer('foo', 'bar'); // $_SERVER['foo']
```

----

<a name="session"></a>
### SessionTrait

`getSession` - Returns $_SESSION given name or all $_SESSION

```php
$request->getSession();
$request->getSession('foo'); // $_SESSION['foo']
```

----

`removeSession` - Removes $_SESSION given name or all $_SESSION

```php
$request->removeSession();
$request->removeSession('foo'); // $_SESSION['foo']
```

----

`hasSession` - Returns true if has $_SESSION given name or if $_SESSION is set

```php
$request->hasSession();
$request->hasSession('foo'); // $_SESSION['foo']
```

----

`setSession` - Sets $_SESSION given name or all $_SESSION

```php
$request->setSession(['foo' => 'bar']);
$request->setSession('foo', 'bar'); // $_SESSION['foo']
```

----

<a name="stage"></a>
### StageTrait

`getStage` - Returns $_REQUEST given name or all $_REQUEST

```php
$request->getStage();
$request->getStage('foo'); // $_REQUEST['foo']
```

----

`removeStage` - Removes $_REQUEST given name or all $_REQUEST

```php
$request->removeStage();
$request->removeStage('foo'); // $_REQUEST['foo']
```

----

`hasStage` - Returns true if has $_REQUEST given name or if $_REQUEST is set

```php
$request->hasStage();
$request->hasStage('foo'); // $_REQUEST['foo']
```

----

`setStage` - Sets $_REQUEST given name or all $_REQUEST

```php
$request->setStage(['foo' => 'bar']);
$request->setStage('foo', 'bar'); // $_REQUEST['foo']
```

----

`setSoftStage` - Clusters $_REQUEST data together without overwriting existing data

```php
$request->setStage(['foo' => 'bar']);
```
