---
layout: documentation
class: page-docs page-docs-admin-adding-setting-up-email
title:  "Setting Up the Email - Server Operations - Cradle"
description: ""
menu_title: 3.2. Setting Up the Email
---
# 3.2. Setting Up the Email

###### Figure 3.2.A. config/services.php
```php
...
'mail-main' => [
    'host' => 'smtp.gmail.com',
    'port' => '587',
    'type' => 'tls',
    'name' => 'Project Name',
    'user' => '<EMAIL ADDRESS>',
    'pass' => '<EMAIL PASSWORD>'
]
...
```

###### Figure 3.2.B. config/settings.php
```php
...
'error_email' => '<EMAIL ADDRESS>'
...
```

###### Figure 3.2.B. Testing email
```bash
$ bin/cradle auth-verify-mail auth_id=1 auth_slug=[EMAIL] auth_updated=123456 host=localhost
```

Just replace `[EMAIL]` with your actual email address *(for testing purposes)*.
To figure out how this command was derived, it's important to know that Cradle
can call events in the command like via `$ bin/cradle [EVENT]` and parameters to
that event can be passed using the `k=v` parameter syntax. To figure out what
parameters an event needs is kind of trick however, as you will need to look at
the source code per event. This
[event code](https://github.com/CradlePHP/cradle-auth/blob/master/src/events.php#L400-L466)
for example was used for *Figure 3.2.B*.
