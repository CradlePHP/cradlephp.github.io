# Install

 - [Server Requirements](#requirements)
 - [Installation](#installation)
 - [Load the Page](#load)

<a name="requirements"></a>
## Server Requirements

The following are needed in order to successfully install Cradle. Please make
sure your sever meets the following requirements.

 - PHP >= 7
 - Composer

<a name="installation"></a>
## Installation

Issue the Composer create-project command in your terminal:

```

$ composer create-project -s dev cradlephp/vanilla <project folder name>

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
```
