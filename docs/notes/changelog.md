---
layout: documentation
class: page-docs page-docs-notes-changelog
title:  "Changelog - Notes - Cradle"
description: "The official Cradle changelog"
menu_title: Changelog
menu:
  2018-02: February 2018
  2018-03: March 2018
  2018-04: April 2018
---
# Changelog

The following describes all the major changes in Cradle

 - [February 2018](#2018-02)
 - [March 2018](#2018-03)
 - [April 2018](#2018-04)

<a name="2018-02"></a>
## February 2018

*`cradlephp/components`: [`bf0137a`](https://github.com/CradlePHP/components/commit/bf0137a623ca07e8868c6169aef1f3f5e3eebe92)*

#### Moving the following libraries to Components

 - Curl - from `cradlephp/packages`
 - i18n - from `cradlephp/packages`
 - Image - from `cradlephp/packages`
 - Http - from `cradlephp/framework`

----

*`cradlephp/packages`: [`c4f5220`](https://github.com/CradlePHP/packages/commit/c4f52201337090f65cb8d5e2e15515cb9372ae4b)*

#### Deprecation notice on Packages

 - LTS till the end of 2018

----

*`cradlephp/command-line`: [`06c947d`](https://github.com/CradlePHP/command-line/commit/06c947d68cae08c6192d4c195e992286aa093639)*

#### Deprecation notice on Command Line

 - LTS till the end of 2018

----

*`cradlephp/framework`: [`0378f6c`](https://github.com/CradlePHP/framework/commit/0378f6cf6da6a331c11457ea0999d854e9f4cf79)*

#### App is now FrameworkHandler

----

*`cradlephp/handlebars`: [`1446f64`](https://github.com/CradlePHP/Handlebars/commit/1446f64d3d4c45c6c9ca4e8af3d8f0fca2a1c179)*

#### Moved Handlebars from Packages to its own repository

----

*`cradlephp/storm`: [`5a1fa99`](https://github.com/CradlePHP/Storm/commit/5a1fa9926406c5efcd8f84a53607a0ea68f4d87d)*

#### Moved SQL from Packages to its own repository called Storm

<a name="2018-03"></a>
## March 2018

*`cradlephp/components`: [`f3c48a9`](https://github.com/CradlePHP/components/commit/f3c48a9732f386d9e2c299c53a891182a5ea08dc)*

#### Introducing REST to Components

Rest makes it easier to call external APIs following a magical style like `cradlephp/storm`

----

*`cradlephp/components`: [`a7588aa`](https://github.com/CradlePHP/components/commit/a7588aaae420ead895ea9057381139f977c77a5c)*

#### Event trigger status reports on Components

Breaking change, please note this. Before `EventHandler->getMeta()` returned
`true|false`. This has been changed to meta will now return either of the
following:

 - 200 - Means all events were triggered
 - 308 - Means one event returned false thus making this incomplete
 - 404 - Means no events were triggered

----

*`cradlephp/components`: [`42dc366`](https://github.com/CradlePHP/components/commit/42dc366846427f0dce9b9bdbfaf40c9106c5cf7f)*

#### Changed `triggerRoute` to `routeTo`

Breaking change, please note this.

----

*`cradlephp/framework`: [`36ca757`](https://github.com/CradlePHP/framework/commit/36ca7574e5dffb9bb93fa09813689d8c0b5ed49f)*

#### Package profiling methods

Added the following methods to Package

 - `getPackagePath()`
 - `getPackageRoot()`
 - `getPackageType()`

----

*`cradlephp/Cradle`: [`2cee1f7`](https://github.com/CradlePHP/Cradle/commit/2cee1f7e24bf69a88ad686c292e6d39bfd48acff)*

#### Moving the Kitchen Sink Project to Cradle

 - `cradlephp/kitchen-sink` will continue as `cradlephp/Cradle` branch `>=2.0`
 - The Vanilla version which was housed in `cradlephp/cradle` is copied to
 `cradlephp/Vanilla`

A deprecation notice will be served soon.

----

*`cradlephp/cradle-developer`: [`ddd8773`](https://github.com/CradlePHP/cradle-developer/commit/ddd877396abdedd5a02c0513e92c62d51a548d94)*

#### Moving the Sink Faucet Project to Cradle

 - `cradlephp/kitchen-sink` will continue as `cradlephp/cradle-developer`

A deprecation notice will be served soon.

<a name="2018-04"></a>

## April 2018

*`cradlephp/components`: [`e309e9c`](https://github.com/CradlePHP/components/commit/e309e9c90c9e6f8d2c9c9cf32d4485fe8c78ce26)*

#### You can now listen to multiple events

###### Usage
```php
cradle()->on(['event-1', 'event-2'], function() {});
```

----

*`cradlephp/cradle.github.io`: [`690fb4b`](https://github.com/CradlePHP/cradlephp.github.io/commit/690fb4b295c04638ad4bb9678577f805f741674f)*

#### New 2.0 Documentation

 - 1.0 Documentation can be found in the [1.0 branch](https://github.com/CradlePHP/cradlephp.github.io/tree/1.0)
