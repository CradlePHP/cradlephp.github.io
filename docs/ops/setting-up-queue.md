---
layout: documentation
class: page-docs page-docs-admin-adding-setting-queue
title:  "Setting Up the Email - Server Operations - Cradle"
description: ""
menu_title: 3.3. Setting Up the Queue
---
# 3.3. Setting Up the Queue

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

###### Figure 3.3.B. Testing queue
```bash
$ bin/cradle queue auth-verify-mail auth_id=1 auth_slug=[EMAIL] auth_updated=123456 host=localhost
$ bin/cradle work
...
[CTRL+C]
```

Just replace `[EMAIL]` with your actual email address *(for testing purposes)*.
