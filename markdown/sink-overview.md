# Sink - Overview

The kitchen sink briefly shows how Cradle can be used as full stack solution.
It's purpose is to provide some context and examples on the usage of the micro
framework. The sink has the following features and uses the following technologies.

### Features

 - Full Stack MVC Architecture
 - Queue Centric Events
 - CSRF protection
 - Internationalization (i18n / l10n)
 - Customizable CLI commands

### Technologies

 - Queues with [RabbitMQ](https://www.rabbitmq.com/)
 - Index Searching with [ElasticSearch](https://www.elastic.co/)
 - Data Caching with [Redis](https://redis.io/)
 - Mailing with [SwiftMailer](https://packagist.org/packages/swiftmailer/swiftmailer)
 - Templating with [Handlebars](http://handlebarsjs.com/)
 - Captcha with [reCaptcha](https://www.google.com/recaptcha/intro/index.html)
 - Server and Client Side CDN uploads with [AWS S3](https://aws.amazon.com/s3/)




## File Structure

 - `app`
   - `api`
   - `core`
   - `www`
 - `bootstrap`
 - `config`
 - `public`
