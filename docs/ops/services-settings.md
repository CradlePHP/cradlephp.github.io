---
layout: documentation
class: page-docs page-docs-admin-adding-services-settings
title:  "Services & Settings - Server Operations - Cradle"
description: ""
menu_title: 3.1. Services & Settings
menu:
  services: 3.1.1. Services
  settings: 3.1.2. Settings
---
# 3.1. Services & Settings

<a name="services"></a>
## 3.1.1. Services

Services are an OPS list of arbitrary service connection information needed to
integrate with the system. You are free to add or remove more services as per your
particular project. Services get processed in `bootstrap/services.php`. This
code was intentionally left in the root layer *(as opposed to a vendor package)*
to encourage you to update as your project needs.

Out of the box, the system supports the following services and all that is
required is you enter their credentials.

###### Figure 3.1.1.A. config/services.php
```php
return [
    'sql-build' => [
        'host' => '<DATABASE HOST>',
        'user' => '<DATABASE USER>',
        'pass' => '<DATABASE PASS>'
    ],
    'sql-main' => [
        'host' => '<DATABASE HOST>',
        'name' => '<DATABASE NAME>',
        'user' => '<DATABASE USER>',
        'pass' => '<DATABASE PASS>'
    ],
    'elastic-main' => [
        '<ELASTIC HOST:PORT>'
    ],
    'redis-main' => [
        'scheme' => 'tcp',
        'host' => '127.0.0.1',
        'port' => 6379
    ],
    'rabbitmq-main' => [
        'host' => '127.0.0.1',
        'port' => 5672,
        'user' => '<RABBIT USER>',
        'pass' => '<RABBIT PASS>'
    ],
    's3-main' => [
        'region' => '<AWS REGION>',
        'token' => '<AWS TOKEN>',
        'secret' => '<AWS SECRET>',
        'bucket' => '<S3 BUCKET>',
        'host' => 'https://<AWS REGION>.amazonaws.com',
        'root' => '<ROOT PATH IN BUCKET OR REMOVE THIS>'
    ],
    'mail-main' => [
        'host' => 'smtp.gmail.com',
        'port' => '587',
        'type' => 'tls',
        'name' => 'Project Name',
        'user' => '<EMAIL ADDRESS>',
        'pass' => '<EMAIL PASSWORD>'
    ],
    'captcha-main' => [
        'token' => '<GOOGLE CAPTCHA TOKEN>',
        'secret' => '<GOOGLE CAPTCHA SECRET>'
    ]
];
```

```info
INFORMATION: Any service with a value starting with `<` will not process and be
ignored using fallback logic.
```

```danger
DANGER: For security purposes, don't commit your services.php file
```

### 3.1.2.1. Generic Services

###### Figure 3.1.2.1.A. Accessing a Generic Service
```php
$service = cradle('global')->service('captcha-main'); //-> array
```

### 3.1.2.2. Special Services

Instead of raw arrays, special services like `sql`, `elastc`, `redis`, and
`rabbitmq` attempt to load up a library that makes using these respective
services easier.

###### Figure 3.1.2.2.A. Accessing Special Service Objects
```php
$sql = cradle('global')->service('sql-main'); //-> PDO
$index = cradle('global')->service('elastic-main'); //-> Elasticsearch\ClientBuilder
$cache = cradle('global')->service('redis-main'); //-> Predis\Client
$queue = cradle('global')->service('rabbitmq-main'); //-> PhpAmqpLib\Connection\AMQPLazyConnection
```

###### Figure 3.1.2.2.A. Getting Raw Configuration of Service Objects
```php
$sql = cradle('global')->config('services', 'sql-main'); //-> array
$index = cradle('global')->config('services', 'elastic-main'); //-> array
$cache = cradle('global')->config('services', 'redis-main'); //-> array
$queue = cradle('global')->config('services', 'rabbitmq-main'); //-> array
```

### 3.1.2.1. Special Service Libraries

Specifically, the following items outline the libraries used per special service.

 - SQL - [PDO Manual](http://php.net/manual/en/book.pdo.php)
 - ElasticSearch - [ElasticSearch PHP](https://github.com/elastic/elasticsearch-php)
 - Redis - [PRedis](https://github.com/nrk/predis)
 - RabbitMQ - [PhpAmqpLib](https://github.com/php-amqplib/php-amqplib)

```danger
DANGER: Changing these class requirements will break the Cradle's core packages.
It's recommended to create your own service keys as well as case for them in
bootstrap/services.php manually.
```

<a name="settings"></a>
## 3.1.2. Settings

###### Figure 3.1.2.A. config/settings.php
```php
return [
    'home' => '/',
    'debug_mode' => E_ALL,
    'environment' => 'dev',
    'error_email' => '<EMAIL ADDRESS>',
    'i18n' => 'en_US',
    'name' => 'Custom Project',
    'server_timezone' => 'GMT',
    'log_path' => 'log',
    'theme_color' => 'theme-default',
    'theme_layout' => 'theme-left',
];
```

###### Figure 3.1.2.B. Production (Live) Settings

**debug_mode** | `0`
**environment** | `'production'`

#### Theme Colors

The following items are possible theme color options.

 - `theme-default`
 - `theme-blue`
 - `theme-red`
 - `theme-dark`
 - `theme-purple`
 - `theme-orange`

#### Theme Layouts

The following items are possible theme layout options.

 - `theme-left` - Menu positioned on the left
 - `theme-top` - Menu positioned on the top