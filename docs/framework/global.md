---
layout: documentation
class: page-docs page-docs-framework-global
title:  "Global Package - Framework Documentation - Cradle"
description: "The global package represent easily accessible methods that can be used throughout your project."
---

# Global Package

 - [Overview](#overview)
 - [path](#path)
 - [config](#config)
 - [service](#service)
 - [redirect](#redirect)
 - [requireLogin](#requireLogin)
 - [flash](#flash)
 - [translate](#translate)
 - [template](#template)
 - [handlebars](#handlebars)

<a name="overview"></a>
## Overview

The global package represent easily accessible methods that can be used
throughout your project. The `/bootstrap/` folder mainly defines the `global`
package.

<a name="path"></a>
## path()

Given a key, returns the absolute path relative to your project. The possible
keys are as follows.

 - `root` - `[root path]`
 - `app` - `[root path]/app`
 - `bootstrap` - `[root path]/bootstrap`
 - `config` - `[root path]/config`
 - `module` - `[root path]/module`
 - `compiled` - `[root path]/compiled`
 - `public` - `[root path]/public`
 - `upload` - `[root path]/upload`
 - `template` - `[root path]/template`
 - `vendor` - `[root path]/vendor`

###### Usage 1
```php
cradle('global')->path('config');
```

You can also set more paths like the following example.

###### Usage 2
```php
cradle('global')->path('foo', __DIR__ . '/bar');
```

<a name="config"></a>
## config()

Retrieves a configuration from your `/config/` folder.

###### Usage 1
```php
//returns the array found in config/settings.php
cradle('global')->config('settings');

//returns the value of environment found in config/settings.php which is 'dev'
cradle('global')->config('settings', 'environment');
```

You can also write to a configuration file like the following example.

###### Usage 2
```php
//sets foo to bar in config/settings.php
cradle('global')->config('settings', 'foo', 'bar');

//creates a file config/foobar.php and sets foo to bar
cradle('global')->config('settings', 'foobar', [
    'foo' => 'bar'
]);
```

```warning
Make sure you chmod 777 your config folder
```

<a name="service"></a>
## service()

Returns a service object.

###### Usage 1
```php
cradle('global')->service('sql-main'); //--> PDO

cradle('global')->service('elastic-main'); //--> Elasticsearch\ClientBuilder

cradle('global')->service('redis-main'); //--> Predis\Client

cradle('global')->service('rabbitmq-main'); //--> PhpAmqpLib\Connection\AMQPLazyConnection
```

```info
If the key you provide is not a supported service, the array configuration will
return.
```

<a name="redirect"></a>
## redirect()

A wrapper to redirect to another URL

###### Usage
```php
cradle('global')->redirect('/some/path');
```

<a name="requireLogin"></a>
## requireLogin()

Checks to see if the user is logged in and redirects to the login page if not.

###### Usage
```php
cradle('global')->requireLogin();
```

<a name="flash"></a>
## flash()

Sets a flash message that will be consumed on the next URL request.

###### Usage
```php
cradle('global')->flash('Something good happened', 'success');

cradle('global')->flash('Something happened', 'warning');

cradle('global')->flash('Something bad happened', 'error');

cradle('global')->flash('Something', 'info');
```

<a name="translate"></a>
## translate()

Translate the given string based on the current language

###### Usage
```php
$name = cradle('global')->translate('Name'); //--> nom
```

<a name="template"></a>
## template()

Renders a template using Handlebars.

###### Usage
```php
$handlebars = cradle('global')->template('/path/to/template', [
    'foo' => 'bar',
    'zoo' => 'Went to the zoo.'
]);
```

<a name="handlebars"></a>
## handlebars()

Returns the global Handlebars instance

###### Usage
```php
$handlebars = cradle('global')->handlebars();
```
