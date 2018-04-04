---
layout: documentation
class: page-docs page-docs-notes-upgrading
title:  "Upgrading Guide - Notes - Cradle"
description: "Upgrading guide"
menu_title: Upgrading Guide
menu:
  v2: From 1.0 to 2.0
---

# Upgrading Guide

The following guide will help you upgrade from your existing projects from
version to version.

 - [From 1.0 to 2.0](#v2)

## From 1.0 to 2.0

Before `EventHandler->getMeta()` returned `true|false`. This has been changed
to meta will now return either of the following:

 - **200** - Means all events were triggered
 - **308** - Means one event returned false thus making this incomplete
 - **404** - Means no events were triggered

----

All references of `->triggerRoute(...)` have changed to `->routeTo(...)`

----

All references of `cradle()` in routes and events have changed to `$this`

 - For example: Instead of `cradle()->trigger(...)`, use `$this->trigger(...)`
 - You should still use `cradle()` inside of class methods

----

All references of `$cradle` in packages have changed to `$this`

 - For example: Instead of `$cradle->preprocess(...)`, use `$this->preprocess(...)`

----

`Module\Profile` has moved to `cradlephp/cradle-profile`

 - If you made changes to `Module\Profile` do not use `cradlephp/cradle-profile`
 - Integration Steps:
   1. Copy the `/package/` folder from `cradlephp/cradle-profile` to `Module/Profile`
   2. Update `package/schema/profile.php`
   3. Copy your new `package/schema/profile.php` to `/config/schema/profile.php`

----

`Module\Auth` has moved to `cradlephp/cradle-auth`

 - If you made changes to `Module\Auth` do not use `cradlephp/cradle-auth`
 - Integration Steps:
   1. Copy the `/package/` folder from `cradlephp/cradle-auth` to `Module/Auth`
   2. Update `package/schema/auth.php`
   3. Copy your new `package/schema/auth.php` to `/config/schema/auth.php`
