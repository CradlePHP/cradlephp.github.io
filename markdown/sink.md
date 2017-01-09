# Kitchen Sink Install

 - [Server Requirements](#requirements)
 - [Installation](#installation)
 - [Load the Page](#load)

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
