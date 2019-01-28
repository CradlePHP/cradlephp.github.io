---
layout: documentation
class: page-docs page-docs-admin-adding-setting-cache
title:  "Setting Up the Cache - Server Operations - Cradle"
description: ""
menu_title: 3.5. Setting Up the Cache
---
# 3.5. Setting Up the Cache

###### Figure 3.5.A. config/services.php
```php
...
'redis-main' => [
    'scheme' => 'tcp',
    'host' => '127.0.0.1',
    'port' => 6379
]
...
```
