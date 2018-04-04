---
layout: documentation
class: page-docs page-docs-framework-structure
title:  "File Structure - Framework Documentation - Cradle"
description: "We try to minimize the file structure to 5 distinct folders"
menu_title: File Structure
menu:
  app: /app/
  bootstrap: /bootstrap/
  config: /config/
  module: /module/
  public: /public/
---

# File Structure

The file structure at best has been minimized to the follow sets of folders.

 - [/app/](#app)
 - [/bootstrap/](#bootstrap)
 - [/config/](#config)
 - [/module/](#module)
 - [/public/](#public)

<a name="app"></a>
## /app/

This is where your custom controllers, routes and templates go. Each application
out of the box is structured similar to each other for ease of learning.
Controllers are a collection of routes and templates are a collection of HTML
*(usually)* files.

A typical application folder structure looks like the following

 - `/app/[application name]/src/controller`
 - `/app/[application name]/src/template`
 - `/app/[application name]/test`

<a name="bootstrap"></a>
## /bootstrap/

This folder is implemented in the root `/bootstrap.php` which defines all the
preprocessors to call before the routing is executed. The bootstrap is bound to
your project and is meant to be a starting boilerplate for your application
which means you can change it however you like.

```warning
Some out of box packages might need some global functions defined in the
bootstrap
```

<a name="config"></a>
## /config/

This is where all your project configuration is found. You can create as much as
you like manually or programmatically.

###### Programmatically Setting a Configuration
```php
// /config/foo/bar.php will have ['foo' => 'bar']
cradle('global')->config('foo/bar', 'foo', 'bar');
```

More about the `config()` will be covered in the [Global Package](#global)
documentation.

<a name="module"></a>
## /module/

This is where you put your events, models and other services. In practice,
events act as the central interface in which modules connect to your application.

A typical module folder structure looks like the following

 - `/module/[module name]/src/Service/SqlService.php`
 - `/module/[module name]/src/Service/ElasticService.php`
 - `/module/[module name]/src/Service/RedisService.php`
 - `/module/[module name]/src/Service.php`
 - `/module/[module name]/src/Validator.php`
 - `/module/[module name]/src/events.php`
 - `/module/[module name]/test`

<a name="public"></a>
## /public/

This is where you put all of your images, CSS and JavaScript files for example.
This is also called the demilitarized zone because this is the folder you should
point your DNS to.
