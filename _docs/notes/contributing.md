---
layout: documentation
class: page-docs page-docs-notes-contributing
title:  "Contributing to Cradle - Notes"
description: "How to contribute to Cradle"
menu_title: Contributing to Cradle
menu:
  issues: Issues
  development: Development
  pull: Making pull requests
  branches: Branches and Versions
---
# Contributing to Cradle

 - [Issues](#issues)
 - [Development](#development)
 - [Making pull requests](#pull)
 - [Branches and Versions](#branches)

Thank you for considering to contribute to Cradle. There are a few repositories
we work with.

 - `cradlephp/components` - Core objects and traits
 - `cradlephp/framework` - Framework specific interfaces
 - `cradlephp/cradle-developer` - Command line tools
 - `cradlephp/cradle-system` - Schemas, relations and models
 - `cradlephp/cradle-profile` - The profile package
 - `cradlephp/cradle-auth` - The authentication package
 - `cradlephp/cradle-role` - The roles and permissions package
 - `cradlephp/cradle-history` - The history log package
 - `cradlephp/cradle-csrf` - The CSRF package
 - `cradlephp/cradle-captcha` - The Google captcha package
 - `cradlephp/cradle-queue` - The AMQP queue package
 - `cradlephp/handlebars` - Our version of Handlebars, the templating engine
 - `cradlephp/storm` - SQL object relation map library

<a name="issues"></a>
## Issues

If you have issues with Handlebars exclusively please report it in
[`cradlephp/Handlebars`](https://github.com/CradlePHP/Handlebars/issues).

If you have issues with Storm exclusively please report it in
[`cradlephp/Storm`](https://github.com/CradlePHP/Storm/issues).

All other framework issues can be reported in
[`cradlephp/Cradle`](https://github.com/CradlePHP/Cradle/issues)

```info
If you report an issue in any other repository other than the above
recommendations, we may not notice it so sorry in advance.
```

<a name="development"></a>
## Development

Bug fixes will be reviewed as soon as possible. Minor features will also be
considered, but give us time to review it and get back to you.

```info
Major features will only be considered on the `master` branch.
```

 1. Fork the Repository.
 2. Fire up your local terminal and switch to the version you would like to
 contribute to.
 3. Make your changes.
 4. Always make sure to sign-off (-s) on all commits made
 `git commit -s -m "Commit message"`

 ```warning
 Please be sure you are in the correct branch you are intending to contribute to
 ```

<a name="pull"></a>
## Making pull requests

 1. Please ensure to run [phpunit](https://phpunit.de/) and
 [phpcs](https://github.com/squizlabs/PHP_CodeSniffer) before making a pull request.
 2. Push your code to your remote forked version.
 3. Go back to your forked version on GitHub and submit a pull request.
 **Please be sure you make a PR on the intended branch version.**
 4. All pull requests will be passed to
 [Travis CI](https://travis-ci.org/CradlePHP/framework) to be tested. Also note
 that [Coveralls](https://coveralls.io/github/CradlePHP/framework) is also used
 to analyze the coverage of your contribution.

<a name="branches"></a>
## Branches and Versions

The `master` branch is where all the edge releases go. The `master` branch will
always be synced with the latest version branch in their respective repositories.

Some repositories only have a `master` branch because the repository has not
reached to a 2.0 version and since the `master` branch is a mirror of the latest
version branch it would just be the same thing.

Versions will have 3 numbers separated by dots. The first number
*(to the far right)* will represent an alpha release. Alpha releases are not
stable versions and at times will break.

The second number *(the middle one)* represents a beta release. A beta release
is somewhat stable and usually has a test suite attached to it.

The last number *(to the far left)* represents a production release. This
happens when we decide to make enough breaking changes to justify an entire new
version.
