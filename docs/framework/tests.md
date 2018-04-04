---
layout: documentation
class: page-docs page-docs-framework-troubleshooting
title:  "Troubleshooting - Framework Documentation - Cradle"
description: "The framework of Cradle is all about packages and there are only 3 types of packages"
menu_title: Writing Tests
menu:
  dependencies: Test Dependencies
  instructions: Test Instructions
  troubleshooting: Troubleshooting
---

# Writing Tests

It's important to understand that this framework is not responsible for writing
your test code. You should always review and write custom tests according to the
exact features of your app.

 - [Troubleshooting](#troubleshooting)
 - [Test Dependencies](#dependencies)
 - [Test Instructions](#instructions)

<a name="dependencies"></a>
## Test Dependencies

In Cradle, we use several methods to ensure that our custom projects are stable,
found below.

 - Unit Tests
 - Functional Tests
 - Acceptance Tests
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

For both unit tests and functional tests we write tests with **PHPUnit**.
The following example shows how to structure your unit tests.

```info
Tests can be usually found in the `/test/` folder in any Cradle package.
```

###### Unit Test Example
```php
class Cradle_Module_Utility_FileTest extends TestCase
{
    /**
     * @covers Cradle\Module\Utility\File::getExtensionFromData
     */
    public function testGetExtensionFromData()
    {
        $actual = File::getExtensionFromData('data:image/jpeg;base64,xXxOoO');
        $this->assertEquals('jpg', $actual);
    }
}
```

The above test is a standard test example described in
[PHPUnit](https://phpunit.de/). To test the quality of this test, otherwise
called *Code Coverage*, we add a `@covers` doc explaining what method this
test is written for. We can then run a clover test as in the following to get
the coverage report.

```bash
phpunit --coverage-clover build/logs/clover.xml
```

###### Functional Test Example
```php
class Cradle_History_EventsTest extends TestCase
{
    /**
     * history-create
     *
     * @covers Cradle\Module\System\Model\Validator::getCreateErrors
     * @covers Cradle\Module\System\Model\Validator::getOptionalErrors
     * @covers Cradle\Package\System\Model\Service\SqlService::create
     * @covers Cradle\Module\System\Utility\Service\AbstractElasticService::create
     * @covers Cradle\Module\System\Utility\Service\AbstractRedisService::createDetail
     */
    public function testHistoryCreate()
    {
        $this->request->setStage([
            'history_remote_address' => '127.0.0.1',
            'history_activity' => 'Test',
            'history_page' => '/',
            'history_meta' => [],
            'history_flag' => '0',
            'history_active' => '1',
            'profile_id' => '1',
        ]);

        cradle()->trigger('history-create', $this->request, $this->response);

        $this->assertEquals('Test', $this->response->getResults('history_activity'));
        self::$id = $this->response->getResults('history_id');
        $this->assertTrue(is_numeric(self::$id));
    }
}
```

The above test is an example of a functional test. As you can see the functional
test calls the event `history-create` which in turn calls on several unit
methods. We can conclude that a functional test, runs a group of methods
together in order to test the final output.

###### Acceptance Test Example
```php
use Page\Login as LoginPage;

$I = new AcceptanceTester($scenario);
$I->wantTo('Update Account Settings');

//Login
$loginPage = new LoginPage($I);
$loginPage->login();
$I->seeInCurrentUrl('/');
$I->amOnPage('/profile/account?redirect_uri=%2F');

// redirect to edit
$I->click(['xpath' => '//div/a[@href="/profile/account/information"]']);
$I->seeInCurrentUrl('/profile/account/information');

// update the form
$I->amGoingTo('update my account settings');
$I->see('Account Settings');
$I->fillField('profile_company', 'test');
$I->fillField('profile_website', 'http://www.google.com');
$I->click('//div/div/button[@class="btn btn-default text-uppercase"]');
$I->seeInCurrentUrl('/profile/account');

// notif
$I->wait(2);

$I->see('Update Successful');
```

The above acceptance test uses [CodeCeption](https://codeception.com/) to run
the tests on a browser called [PhantomJS](http://phantomjs.org/).

```php
These are already setup by Cradle
```

To run the tests you can execute the following in your terminal.

```bash
bin/codecept run -c ./app/www
```

We now have a clear definition between the following.

 - UI -> Controllers -> Acceptance
 - Business Rules -> Events -> Functional
 - Abstract -> Class -> Unit

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
