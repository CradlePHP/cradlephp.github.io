---
layout: documentation
class: page-docs page-docs-admin-adding-setting-queue
title:  "Setting Up the Email - Server Operations - Cradle"
description: ""
menu_title: 3.3. Setting Up the Queue
---
# 3.3. Setting Up the Queue

A queue is a container for messages. Business applications that are connected
to the queue manager that hosts the queue can retrieve messages from the queue
or can put messages on the queue. It is recommended to use a queue for tasks
that require some time to process  *(or long running processes)*. Examples
of long running processes are the following.

 - Emailing
 - Resizing images
 - Calling APIs or third party services
 - Executing command line functions

[AMQP](https://www.amqp.org/) is an open standard application layer protocol
for message-oriented middleware. Cradle supports all AMQP based message queues.
To setup a queue you need to go to `services.php` and populate it with the
following.

###### Figure 3.3.A. config/services.php
```php
...
'rabbitmq-main' => [
    'host' => '127.0.0.1',
    'port' => 5672,
    'user' => 'guest',
    'pass' => 'guest'
]
...
```

Once you have a AMQP compliant service installed and connected you can
run a test by running the following commands in terminal.

###### Figure 3.3.B. Testing queue
```bash
$ bin/cradle queue auth-verify-mail auth_id=1 auth_slug=[EMAIL] auth_updated=123456 host=localhost
$ bin/cradle work
...
[CTRL+C]
```

Just replace `[EMAIL]` with your actual email address *(for testing purposes)*.
The first command queues an email to be sent given the parameters set. The
second command runs a worker to pull tasks from the queue. The `work` command
runs on an endless loop, so if you wanted to turn it off hold `[CTRL+C]`.

If you have the queue setup, the system will automatically consider using for
long running processes.

 - `cradle-system` will try to queue the processing of file uploads before doing
 it on load.
 - `cradle-auth` will try to queue the sending of emails before doing it on load.
