---
layout: documentation
class: page-docs page-docs-admin-adding-setting-up-email
title:  "Setting Up the Email - Server Operations - Cradle"
description: "Email autoresponders are used by the Auth package to verify sign ups and within theforgot password* flow."
menu_title: 3.2. Setting Up the Email
---
# 3.2. Setting Up the Email

Initially emails are used by the **Auth** package *(cradle-auth)* to verify sign
ups and within the *forgot password* flow. In order to utilize auto email
responders, you need to first configure your email settings in `services.php`.

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

In the configuration above `type` can be `tls` or `ssl`.

```info
INFORMATION: if ssl, then the port should be 465 as per Gmail settings.
```

If you are planning to use an email provided by **Google**, you will need to
allow the email to be used with [less secure apps](https://support.google.com/a/answer/6260879?hl=en)
or by [using an app password](https://support.google.com/accounts/answer/185833?hl=en).

The system also provides a way to send emails to stakeholders whenever an error
in the system occurs. You can set the error email in `settings.php`.

###### Figure 3.2.B. config/settings.php
```php
...
'error_email' => '<EMAIL ADDRESS>'
...
```

Now that we have our email set, we can do a test email given the command below.

###### Figure 3.2.B. Testing email
```bash
$ bin/cradle auth-verify-mail auth_id=1 auth_slug=[EMAIL] auth_updated=123456 host=localhost
```

Just replace `[EMAIL]` with your actual email address *(for testing purposes)*.
To figure out how this command was derived, it's important to know that Cradle
can call events in the command like via `$ bin/cradle [EVENT]` and parameters to
that event can be passed using the `k=v` parameter syntax. To figure out what
parameters an event needs is kind of tricky however, as you will need to look at
the source code per event. This
[event code](https://github.com/CradlePHP/cradle-auth/blob/master/src/events.php#L400-L466)
for example was used for *Figure 3.2.B*.
