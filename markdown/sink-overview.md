# Sink - Overview

The kitchen sink briefly shows how Cradle can be used as full stack solution.
It's purpose is to provide some context and examples on the usage of the micro
framework. The sink has the following features and uses the following technologies.

### Features

The sink is designed to be feature rich, as close to an actual project template
as possible. The following were taken into consideration.

 - Full Stack MVC Architecture
 - Queue Centric Events
 - CSRF protection
 - Internationalization (i18n / l10n)
 - Customizable CLI commands

### Technologies

The following technologies were also chosen for the possibility of the sink to
represent full stack level logic and implementation.

 - Queues with [RabbitMQ](https://www.rabbitmq.com/)
 - Index Searching with [ElasticSearch](https://www.elastic.co/)
 - Data Caching with [Redis](https://redis.io/)
 - Mailing with [SwiftMailer](https://packagist.org/packages/swiftmailer/swiftmailer)
 - Templating with [Handlebars](http://handlebarsjs.com/)
 - Captcha with [reCaptcha](https://www.google.com/recaptcha/intro/index.html)
 - Server and Client Side CDN uploads with [AWS S3](https://aws.amazon.com/s3/)

### File Structure

The sink has a simple architecture matching elements found in a common MVC
system. The following describes this system and purposes for each.

 - `app` - Main application packages
   - `admin` - Contains controllers and templates for super admin rights
   - `api` - Contains controllers and templates for REST calls
   - `www` - Contains controllers and templates for the front end
 - `bootstrap` - Contains pre-processors to do before routing
 - `config` - Arbitrary configuration files
 - `module` - Contains reusable models, services and events
 - `public` - DMZ and static assets
 - `schema` - Contains data maps for generating code, building databases and indexes

### Third party packages

For documentation on the packages being used, the following links have been
provided.

 - See [https://packagist.org/packages/php-amqplib/php-amqplib](https://packagist.org/packages/php-amqplib/php-amqplib)
 - See [https://packagist.org/packages/elasticsearch/elasticsearch](https://packagist.org/packages/elasticsearch/elasticsearch)
 - See [https://packagist.org/packages/predis/predis](https://packagist.org/packages/predis/predis)
 - See [https://packagist.org/packages/aws/aws-sdk-php](https://packagist.org/packages/aws/aws-sdk-php)
 - See [https://packagist.org/packages/cblanquera/cradle-csrf](https://packagist.org/packages.com/cblanquera/cradle-csrf)
 - See [https://packagist.org/packages/cblanquera/cradle-captcha](https://packagist.org/packages/cblanquera/cradle-captcha)
 - See [https://packagist.org/packages/cblanquera/cradle-queue](https://packagist.org/packages/cblanquera/cradle-queue)
 - See [https://packagist.org/packages/cblanquera/cradle-handlebars](https://packagist.org/packages/cblanquera/cradle-handlebars)
