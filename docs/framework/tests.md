---
layout: documentation
class: page-docs page-docs-framework-troubleshooting
title:  "Troubleshooting - Framework Documentation - Cradle"
description: "The framework of Cradle is all about packages and there are only 3 types of packages"
---

# Writing Tests

 - [Troubleshooting](#troubleshooting)
 - [Test Dependencies](#dependencies)
 - [Test Instructions](#instructions)

<a name="troubleshooting"></a>
## Troubleshooting

The framework follows a paradigm that helps troubleshooting code easier. Each
of these layers follow 3 specific rules.

 1. Controllers calls on templates and events
 2. Events calls on services and sometimes templates
 3. Services calls their respective server service directly

The rules above does imply the following "No Nos"

 1. Controllers should not call on services.
 2. Controllers should not call on server services.
 3. Events should not call on controllers
 4. Events should not call on server services
 5. Services should not call on controllers
 6. Services should not call on events
 7. Services should not call on templates

With these rules set, we can assume the root of any problem can be found one of
4 possible files.

 - Controller - How to render and process a page
 - Events - Primary business logic
 - Service - Works with server services like SQL, ElasticSearch, Redis, for example
 - Template - Output templates usually in HTML, XML, for example

<a name="dependencies"></a>
## Test Dependencies

It's important to understand that this framework is not responsible for writing
your test code. You should always review and write custom tests according to the
exact features of your app. In Cradle, we use several methods to ensure that
our custom projects are stable, found below.

 - Unit Tests
 - Functional Tests
 - UA Tests
 - Code Coverage
 - Coding Standards

### Install PHPUnit

This is so you can run unit tests on your project.

```
curl -OL https://phar.phpunit.de/phpunit.phar

mv chmod +x phpunit.phar

mv phpunit.phar /usr/local/bin/phpunit

```

### Install PHP_Codesniffer

This is so you can be compliant to PSR-2

```
curl -OL https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar

mv chmod +x phpcs.phar

mv phpunit.phar /usr/local/bin/phpcs

```

### Install PHP_Codesniffer CBF

This is for autofixing PSR-2 violations

```
curl -OL https://squizlabs.github.io/PHP_CodeSniffer/phpcbf.phar

mv chmod +x phpcbf.phar

mv phpunit.phar /usr/local/bin/phpcbf

```

<a name="instructions"></a>
## Test Instructions

 - Write **Unit tests** for classes
 - Write **Functional tests** for events
 - Write **Acceptance tests** for controllers
