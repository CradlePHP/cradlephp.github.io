---
layout: documentation
class: page-docs page-docs-admin-adding-shared-hosts
title:  "Cradle on Shared Hosting - Server Operations - Cradle"
description: "The following instructions can be used to make Cradle work in either shared hosting or where you cannot upgrade to MySQL 5.7."
menu_title: "3.9. Reference: Cradle on Shared Hosting"
---
# 3.9. Reference: Cradle on Shared Hosting

While most shared hosts are using the updated PHP7, most do not have MySQL 5.7
or greater installed. MySQL 5.7 is used in Cradle mostly for its JSON types
capabilities with matching fields that case for it. However, technically these
fields can still work without the JSON type defined.

```info
It's recommended to use Docker for server compatibility issues.
```

The following instructions can be used to make Cradle work in either shared
hosting or where you cannot upgrade to MySQL 5.7.

 1. In the `/module` create a folder called `system`
 2. In the `/module/system` folder create another folder called `src`
 3. In the `/module/system/src` folder create a file called `Schema.php` and copy
 the contents of the [Schema.php file in cradle-system](https://github.com/CradlePHP/cradle-system/blob/master/src/Schema.php) to this file.
 4. Inside of `/modules/system/src/Schema.php` find all `'type' => 'JSON'` and replace with `'type' => 'TEXT'`.
 5. In `/composer.json` file add the system to the autoload settings like the example below.

###### 3.9.A. `composer.json`
```json
...
"autoload": {
    "psr-4": {
        "Cradle\\Module\\Utility\\": "module/utility/src/",
        "Cradle\\Package\\System\\": "module/system/src/"
    }
}
...
```

 6. Lastly run `$ composer dump-autoload`

What this tells composer to do is prefer to get the `Cradle\Package\System`
namespace from your modules folder first and if it still can't find the class
it needs, go to the original location for that name space. So effective we
override that class. `Schema.php` is the only file that references JSON types
*([specifically here](https://github.com/CradlePHP/cradle-system/blob/master/src/Schema.php#L559-L728))*.
