---
layout: documentation
class: page-docs page-docs-framework-package
title:  "Packages - Framework Documentation - Cradle"
description: "The framework of Cradle is all about packages and there are only 3 types of packages"
---

# Packages

 - [Overview](#overview)
 - [Root Packages](#root)
 - [Vendor Packages](#vendor)
 - [Pseudo Packages](#pseudo)

<a name="overview"></a>
## Overview

The framework of Cradle is all about packages and there are only 3 types of
packages *(but they basically can do the same thing, just located in different
places)*.

<a name="root"></a>
## Root Packages

Root packages are found in your project root directory. All applications as in
`app/admin`, `app/www` and modules as in `module/utility` are all kinds of root
packages. You can learn more about packages in the
[Writing a Package](/docs/concepts/packages.html) documentation.

<a name="vendor"></a>
## Vendor Packages

Vendor packages are found in the `/vendor/` folder of your project directory.
These packages are from third party vendors. `/vendor/cradlephp/cradle-system`,
`/vendor/cradlephp/cradle-profile`, `/vendor/cradlephp/cradle-auth` are all
kinds of vendor packages

<a name="pseudo"></a>
## Pseudo Packages

Pseudo packages are located in memory. It does not have any files or folders.
The `global` package is an example of a pseudo package.
