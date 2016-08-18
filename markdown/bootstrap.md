# Bootstrap
 - [`boostrap.php`](#boostrap)
 - [`boostrap/paths.php`](#paths)
 - [`boostrap/debug.php`](#debug)
 - [`boostrap/errors.php`](#errors)
 - [`boostrap/services.php`](#services)
 - [`boostrap/i18n.php`](#i18n)
 - [`boostrap/timezone.php`](#timezone)

<a name="boostrap"></a>
## `boostrap.php`

If you open bootstrap.php in your project root folder, you will see a set of preprocessors called bootstrap files, each are located in the /bootstrap/ folder.

```

return cradle()
	//now bootstrap
	->preprocess(include('bootstrap/paths.php'))
	->preprocess(include('bootstrap/debug.php'))
	->preprocess(include('bootstrap/errors.php'))
	->preprocess(include('bootstrap/services.php'))
	->preprocess(include('bootstrap/i18n.php'))
	->preprocess(include('bootstrap/timezone.php'))

```

These were put on the project level in the case you need you modify them for
your project needs. You are free to add custom preprocessors here as well.
But, you want to be careful in removing these preprocessors as some are needed
by other packages and by other bootstrap files.

<a name="boostrap"></a>
## `paths.php`

This file provides two methods, `cradle()->package('global')->path('key name');`
and `cradle()->package('global')->config('key name');`. While `path('key name')`
Simply returns the absolute path, `config('key name')` returns the value set
found in the `/config/` folder. `config('settings')` will return the data
returned in `/config/settings.php` for example. You can add extra paths
in `paths.php` between the following code.

###### Adding a custom path
```
$paths = array(
    'root' => $root,
    'boostrap' => $root . '/bootstrap',
    'config' => $root . '/config',
    'public' => $root . '/public',
    'upload' => $root . '/public/upload',
    'template' => $root . '/template',
    'vendor' => $root . '/vendor',
    'custom path' => $root . '/some/custom/path'
);

```

<a name="boostrap"></a>
## `debug.php`

This file simply chooses whether to show errors or not based on your
`'debug_mode'` found in `/config/settings.php`. It also provides a protocol
called `debug://Put anything here` which you can put in your flow to help
troubleshoot problems.

###### Debug Usage
```
<?php
cradle()->flow(
	'Signup Flow',
    'Send to Database',
    'debug://Put anything here',
    'Send Email'
    'Redirect to Home Page'
);

```

```warning
Make sure to remove these debugs in production mode.
```

<a name="boostrap"></a>
## `errors.php`

This file handles how to output errors based on the content type and the
`'debug_mode'` found in `/config/settings.php`. It provides additional
methods for rendering an output which you can optionally use to make custom
error messages. You are free to modify this to fit your project needs as
there are no real dependancies on this.

<a name="boostrap"></a>
## `services.php`

This file utilizes services as defined in /config/services.php. The
configuration file should return a key/value set of services of native
drivers and connections. When available, we want to use native drivers
like PDO or sockets rather than a particular ORM to allow packages to
remain agnostic. This makes it possible for one package to use
[Doctrine](http://www.doctrine-project.org/) and another package to use
[Eloquent](https://laravel.com/docs/5.2/eloquent) under the same connection
for example.

###### `/config/services.php`

```
<?php //-->

return array (
	'sql-main' 	 => new PDO('mysql:host=127.0.0.1;dbname=framework', 'root', '')
);

```

Services can be accessed using the following.

```

cradle()->package('global')->service('<key name>');

```

```warning
When configuring this file it's important to have a `main-sql` value set in
order for other packages to access these resources.
```

The main-sql has an additional global methods called
`cradle()->package('global')->sql()` simply to make it easier to access this
service.

```info
 You can use any ORM like [Doctrine](http://www.doctrine-project.org/) or
 [Eloquent](https://laravel.com/docs/5.2/eloquent) if you wish for your
 own packages, but to be fair, let other packages decide what to use.
```

<a name="boostrap"></a>
## `i18n.php`

This file adds translation capabilities to your application by providing
a method called `cradle()->package('global')->translate('An English Phrase')`.
When this is called it will call on `/config/settings.php` to find out what
the default language is and `/config/i18n/en_US.php` to figure out what the
translation should be.

```info
Given that `'en_US'` is your default `'i18n'` value in `/config/settings.php`.
```

You can also use binded values to work with this method as in,
`->translate('It costs %s. buy now?', $price)`. This works exactly how
`sprintf()` works.

You are free to modify the specifics of translating in this file according to
your project needs.

<a name="boostrap"></a>
## `timezone.php`

This file simply set the system timezone which is set in
`/config/settings.php`. There are no other reasons why this exists.
