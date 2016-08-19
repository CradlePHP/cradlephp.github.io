# Kitchen Sink Install

 - [Server Requirements](#requirements)
 - [Installation](#installation)
 - [Load the Page](#load)

Optionally you can take a look at the full setup and learn backwards. The
kitchen sink features various 3rd party packages useful for mid to complicated
projects. The kitchen sink will update periodically as new and useful packages
are available.

<a name="requirements"></a>
## Server Requirements

The following are needed in order to successfully install Cradle. Please make
sure your sever meets the following requirements.

 - PHP >= 5.6
 - PDO PHP Extension
 - RabbitMQ
 - Composer

<a name="installation"></a>
## Installation

Issue the Composer create-project command in your terminal:

```

$ composer create-project -s dev cradlephp/kitchen-sink <project folder name>

```

Open `<project folder name>/config/services.php` and update the PDO connection
information with a new sandbox database (MySQL). Also give a sample email
address and password to test the mail functions as well as signup for
[Google Captcha](https://www.google.com/recaptcha/) and provide the tokens in
this same file.

Next open up terminal again and run `$ cd <project folder name>` and run the
following.

```

$ vendor/bin/cradle package cblanquera/cradle-schema install

```

It will ask you which schema to install. type app. Repeat this step for
`profile`, `auth` and `file`.

Then go cd `<project folder name>/public` and run the following.

```

$ bower install
$ php -S localhost:8000

```

Optionally, you can configure your application's document / web root to the
public directory.

<a name="load"></a>
## Load the Page

Open your browser to `http://localhost:8000` and you should see the application
running.

To understand how these packages work, take a look at [Facades](/docs/facades.html).

For documentation on the packages being used, the following links have been
provided.

 - See [https://github.com/cblanquera/cradle-schema](https://github.com/cblanquera/cradle-schema)
 - See [https://github.com/cblanquera/cradle-auth](https://github.com/cblanquera/cradle-auth)
 - See [https://github.com/cblanquera/cradle-file](https://github.com/cblanquera/cradle-file)
 - See [https://github.com/cblanquera/cradle-csrf](https://github.com/cblanquera/cradle-csrf)
 - See [https://github.com/cblanquera/cradle-captcha](https://github.com/cblanquera/cradle-captcha)
 - See [https://github.com/cblanquera/cradle-mail](https://github.com/cblanquera/cradle-mail)
 - See [https://github.com/cblanquera/cradle-queue](https://github.com/cblanquera/cradle-queue)
 - See [https://github.com/cblanquera/cradle-handlebars](https://github.com/cblanquera/cradle-handlebars)
