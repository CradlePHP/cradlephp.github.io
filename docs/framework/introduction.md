---
layout: documentation
class: page-docs page-docs-framework-introduction
title:  "Introduction - Framework Documentation - Cradle"
description: "Cradle though heavily adopts some parts, is not a typical MVC pattern. As well as MVC, Cradle adopts jobs, events, continuous deploys and REST in the normal architecture to help optimize PHP and organize your code overall."
---
# Introduction

 - [Request and Response](#rnr)
 - [Process](#process)

<a name="rnr"></a>
## Request and Response

Cradle though heavily adopts some parts, is not a typical MVC pattern. As well
as MVC, Cradle adopts jobs, events, continuous deploys and REST in the normal
architecture to help optimize PHP and organize your code overall. The following
structure should reflect the folders of what is installed.

 - `/app/` - Main applications used
 - `/bootstrap/` - Preprocessor files
 - `/config/` - Arbitrary configuration
 - `/module/` - Proprietary business logic
 - `/public/` - Demilitarized zone

To read more about the file structure please refer to
[File Structure](/docs/framework/structure.html).

<a name="process"></a>
## Process

![Application Structure](/images/structure.png)

When a user makes a request 3 main steps are taken.

 - Pre-Processor
 - Routes
 - Post-Processor

### Pre and Post Processors

Pre-Processors sets up the application and prepares the data before the routes
are called. Routes handle the main logic and processing of the request. After
the response is set we determine how it should be outputted, proceed to
output and manually close the connection. When the connection is closed we then
call on all the Post-Processors. Post-Processors are good for things that will
take a while usually to process *(like image re-sizing or sending an email)*
and is recommended when you don't have access to a queue.

To read more about these processors, read up on
[Middleware](/docs/concepts/middleware.html).

### Routing

To simplify [Troubleshooting](/docs/framework/troubleshooting.html), we need to
emphasize on code placement. Routes have 2 primary purposes, one is to render
the output and two process the input. At all times we should try to refrain from
coding any business logic in the routes.

Since routes are exclusive to web type requests, the business logic should be
handled in the module layer specifically with events and routes should trigger
these events instead.

```info
The rationale is since events can be called on the command line, it makes it
easier to interface your application with other technologies.
```

### Events

Events are the main interface to a module and package. Its purpose is to define
your business logic by calling on different services and returning some sort of
results.

```info
It is good practice that routes do not call on services directly.
```

To read more about events, read up on
[Events](/docs/concepts/events.html).

### Services

A service is any third party server service, API or external functionality. Some
sample services are *(however, not limited to)* the following.

 - MySQL
 - RabbitMQ
 - ElasticSearch
 - Redis
 - Mail
 - Facebook
 - Twitter
 - etc...
