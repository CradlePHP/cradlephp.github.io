# Vanilla Install

 - [Server Requirements](#requirements)
 - [Installation](#installation)
 - [Load the Page](#load)

In the case you want to start coding with a clean, minimalist and unopinionated
meta framework, this install won't add any other packages other than what's
needed. If you would like to install the extreme example, you should take a
look at the [Kitchen Sink](/docs/sink.html).

<a name="requirements"></a>
## Server Requirements

The following are needed in order to successfully install Cradle. Please make
sure your sever meets the following requirements.

 - PHP >= 5.6
 - PDO PHP Extension
 - Composer

<a name="installation"></a>
## Installation

Issue the Composer create-project command in your terminal:

```

$ composer create-project -s dev cradlephp/cradle <project folder name>

```

Then go cd `<project folder name>/public` and run the following.

```

$ php -S localhost:8000

```

Optionally, you can configure your application's document / web root to the public directory.

<a name="load"></a>
## Load the Page

Open your browser to `http://localhost:8000` and you should see the following.

```well
Welcome to Cradle!
Now remove this process flow :)
```
