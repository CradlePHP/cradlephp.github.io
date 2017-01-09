# Kitchen Sink Install

 - [Server Requirements](#requirements)
 - [Installation](#installation)
 - [Load the Page](#load)
 - [Generators](#load)

The kitchen sink is a sandbox project to help provide something tangible for
the average developer as well as give some initial ideas of how to structure
your own project. Please note that this build is very opinionated and feedback
on the architecture may vary from person to person. The kitchen sink will
update periodically as new and useful packages are available.

<a name="requirements"></a>
## Server Requirements

The following are needed in order to successfully install Cradle. Please make
sure your sever meets the following requirements.

 - PHP >= 7
 - MySQL >= 5.7
 - [PDO PHP Extension](http://php.net/manual/en/book.pdo.php)
 - [Bower](https://bower.io/)
 - [Composer](https://getcomposer.org/)

The kitchen sink has a full stack built in which cases for particular services
if available. Some optional services you may want to configure on your server are
the following.

 - [RabbitMQ](https://packagist.org/packages/php-amqplib/php-amqplib)
 - [ElasticSearch](https://packagist.org/packages/elasticsearch/elasticsearch)
 - [Redis](https://packagist.org/packages/predis/predis)
 - [AWS S3 SDK](https://packagist.org/packages/aws/aws-sdk-php)

<a name="installation"></a>
## Installation

Issue the Composer create-project command in your terminal:

```

$ composer create-project -s dev cradlephp/kitchen-sink <project folder name>

```

Then go cd `<project folder name>` and run the following and and follow the wizard to install.

```
$ bin/cradle faucet install
$ bower install
```

To start the server you issue the following command.

```
$ bin/cradle faucet server -h 127.0.0.1 -p 8888
```

Optionally, you can configure your application's document / web root to the
public directory.

<a name="load"></a>
## Load the Page

Open your browser to `http://127.0.0.1:8888` and you should see the application
running.

### Admin
A default admin login is also generated with the following credentials.
 - Email: `john@doe.com`
 - Password: `123`

The example admin section can be found at `http://127.0.0.1:8888/admin/profile/search`.

<a name="generators"></a>
## Code Generators

The kitchen sink comes with a slew of Command Line tools called `faucet`. To find
out what are the available commands run the following in terminal.

```
$ bin/cradle faucet
```

Code Generators are used to help layout a project faster and used generically
written code infrastructure and logic to allow you to focus on custom business rules.

For these instructions we will install a generic post module where its definition
is found in `<project folder name>/schema/post.php`.

### Generate Module

First run the following command.

```
$ bin/cradle faucet generate-module --schema post
```

This will convert the data file found in `<project folder name>/schema/post.php`
to a code set called a `module` that can be generically used through out your project.
It's important to also run `composer update` right after.

```
$ composer update
```

### Generate SQL

The next command will generate SQL files within the module folder and
then install to your database using the versioning updater built in.

```
$ bin/cradle faucet generate-sql --schema post
```

Optionally if you want to populate the SQL we can use the following command.

```
$ bin/cradle faucet populate-sql --module post
```

### Generate Controllers

If you want to auto generate an admin for the `post` we can do so with the following command.

```
$ bin/cradle faucet generate-admin --schema post
```

Like wise with a REST controller, it can be done with the following.

```
$ bin/cradle faucet generate-rest --schema post
```
