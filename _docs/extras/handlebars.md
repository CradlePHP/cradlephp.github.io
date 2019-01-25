---
layout: documentation
class: page-docs page-docs-extras-handlebars
title:  "Handlebars - Extras - Cradle"
description: "PHP Handlebars and JS interface to match with compile time helper support and super nice compile time error reporting. This version of Handlebars is based on caching the compiled templates and inherently made the overall compile times faster."
menu_title: Handlebars
menu:
  usage: Usage
  features: Features
  production: Production
  compile: compile
  getCache: getCache
  getHelper: getHelper
  getHelpers: getHelpers
  getPartial: getPartial
  getPartials: getPartials
  registerHelper: registerHelper
  registerPartial: registerPartial
  setCache: setCache
  setPrefix: setPrefix
  unregisterHelper: unregisterHelper
  unregisterPartial: unregisterPartial
---
# Handlebars

PHP Handlebars matches the [JavaScript Version](http://handlebarsjs.com/) and
has compile time helper support and super nice compile time error reporting.
This version of Handlebars is based on caching the compiled templates and
inherently made the overall compile times faster. Loading at ~50ms uncached
and ~30ms cached.

 - [Introduction](#intro)
 - [Usage](#usage)
 - [Features](#features)
 - [Production](#production)
 - [API(12)](#api)
   - [compile](#compile)
   - [getCache](#getCache)
   - [getHelper](#getHelper)
   - [getHelpers](#getHelpers)
   - [getPartial](#getPartial)
   - [getPartials](#getPartials)
   - [registerHelper](#registerHelper)
   - [registerPartial](#registerPartial)
   - [setCache](#setCache)
   - [setPrefix](#setPrefix)
   - [unregisterHelper](#unregisterHelper)
   - [unregisterPartial](#unregisterPartial)

<a name="usage"></a>
## Basic Usage

#### Rendering

```php
use Cradle\Handlebars\HandlebarsHandler as Handlebars;
$handlebars = new Handlebars();
$template = $handlebars->compile('{% raw %}{{foo}} {{bar}}{% endraw %}');

echo $template(['foo' => 'BAR', 'bar' => 'ZOO']);
```

###### Registering Helpers
```php
$handlebars->registerHelper('bar', function($options) {
    return 'ZOO';
});

$template = $handlebars->compile('{% raw %}{{foo}} {{bar}}{% endraw %}');

echo $template(['foo' => 'BAR']);
```

###### Registering Partials
```php
$handlebars->registerPartial('bar', 'zoo');
$template = $handlebars->compile('{% raw %}{{foo}} {{> bar}}{% endraw %}');

echo $template(['foo' => 'BAR']);
```

<a name="features"></a>
## Features

 - PHP API - designed to match the handlebars.js documentation
    - registerHelper() - Matches exactly what you expect from handlebars.js (except it's PHP syntax)
    - registerPartial() - accepts strings and functions as callbacks
    - Literals like `{% raw %}{{./foo}}{% endraw %}` and `{% raw %}{{../bar}}{% endraw %}` are evaluated properly
    - Comments like `{% raw %}{{!-- Something --}}{% endraw %}` and `{% raw %}{{! Something }}{% endraw %}` supported
    - Trims like `{% raw %}{{~#each}}{% endraw %}` and `{% raw %}{{~foo~}}{% endraw %}` supported
    - Mustache backwards compatibility `{% raw %}{{#foo}}{{this}}{{/foo}}{% endraw %}`
    - Tokenizer helpers to optimize custom code generation to cache
    - Event handlers for unknown helpers and unknown partials
 - Default Helpers matching handlebars.js
     - each - and `{% raw %}{{#each foo as |value, key|}}{% endraw %}`
     - with
     - unless
     - if

<a name="production"></a>
## Production Ready

When your templates are ready for a production (live) environment, it is recommended that caching be used. To enable cache:

 - Create a cache folder and make sure permissions are properly set for handlebars to write files to it.
 - Enable cache by using `$handlebars->setCache(__DIR__.'/your/cache/folder/location');`
 - If the folder location does not exist, caching will be disabled.

<a name="api"></a>
## API

<a name="compile"></a>
### compile

Returns a callback that binds the data with the template

#### Usage

```php
$handlebars->compile(string $string);
```

#### Parameters

 - `string $string` - the template string

Returns `function` - the template binding handler

#### Example

```php
$handlebars->compile();
```

----

<a name="getCache"></a>

### getCache

Returns the active cache path

#### Usage

```php
$handlebars->getCache();
```

Returns `Closure`

----

<a name="getHelper"></a>

### getHelper

Returns a helper given the name

#### Usage

```php
$handlebars->getHelper('if');
```

#### Parameters

- `string $name` - the name of the helper

Returns `Closure`

----

<a name="getHelpers"></a>

### getHelpers

Returns all the registered helpers

#### Usage

```php
$handlebars->getHelpers();
```

#### Parameters

Returns `array`

----

<a name="getPartial"></a>

### getPartial

Returns a partial given the name

#### Usage

```php
$handlebars->getPartial('foobar');
```

#### Parameters

- `string $name` - the name of the partial

Returns `string`

----

<a name="getPartials"></a>

### getPartials

Returns all the registered partials

#### Usage

```php
$handlebars->getPartials();
```

#### Parameters

Returns `array`

----

<a name="registerHelper"></a>

### registerHelper

The famous register helper matching the Handlebars API

#### Usage

```php
$handlebars->registerHelper(string $name, function $helper);
```

#### Parameters

 - `string $name` - the name of the helper
 - `function $helper` - the helper handler

Returns `Eden\Handlebrs\Index`

#### Example

```php
$handlebars->registerHelper();
```

----

<a name="registerPartial"></a>

### registerPartial

Delays registering partials to the engine because there is no add partial method...

#### Usage

```php
$handlebars->registerPartial(string $name, string $partial);
```

#### Parameters

 - `string $name` - the name of the helper
 - `string $partial` - the helper handler

Returns `Eden\Handlebrs\Index`

#### Example

```php
$handlebars->registerPartial();
```

----

<a name="setCache"></a>

### setCache

Enables the cache option

#### Usage

```php
$handlebars->setCache(string $path);
```

#### Parameters

 - `string $path` - The cache path

Returns `Eden\Handlebrs\Index`

#### Example

```php
$handlebars->setCache('/path/to/cache/folder');
```

----

<a name="setPrefix"></a>

### setPrefix

Sets the file name prefix for caching

#### Usage

```php
$handlebars->setPrefix(string $prefix);
```

#### Parameters

 - `string $prefix` - Custom prefix name

Returns `Eden\Handlebrs\Index`

#### Example

```php
$handlebars->setPrefix('special-template-');
```

----

<a name="unregisterHelper"></a>

### unregisterHelper

The opposite of registerHelper

#### Usage

```php
$handlebars->unregisterHelper(string $name);
```

#### Parameters

 - `string $name` - the helper name

Returns `Eden\Handlebars\Index`

#### Example

```php
$handlebars->unregisterHelper();
```

----

<a name="unregisterPartial"></a>

### unregisterPartial

The opposite of registerPartial

#### Usage

```php
$handlebars->unregisterPartial(string $name);
```

#### Parameters

 - `string $name` - the partial name

Returns `Eden\Handlebars\Index`

#### Example

```php
$handlebars->unregisterPartial();
```
