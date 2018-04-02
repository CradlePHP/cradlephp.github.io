---
layout: documentation
class: page-docs page-docs-framework-troubleshooting
title:  "Troubleshooting - Framework Documentation - Cradle"
description: "The framework of Cradle is all about packages and there are only 3 types of packages"
---

# Troubleshooting

The framework follows a paradigm that helps troubleshooting code easier. Each
of these layers follow 3 specific rules.

 1. Controllers calls on templates and events
 2. Events calls on services and sometimes templates
 3. Services calls their respective server service directly

The rules above does imply the following "No Nos"

 1. Controllers should not call on services.
 2. Controllers should not call on server services.
 3. Events should not call on controllers
 4. Events should not call on server services
 5. Services should not call on controllers
 6. Services should not call on events
 7. Services should not call on templates

With these rules set, we can assume the root of any problem can be found one of
4 possible files.

 - Controller - How to render and process a page
 - Events - Primary business logic
 - Service - Works with server services like SQL, ElasticSearch, Redis, for example
 - Template - Output templates usually in HTML, XML, for example
