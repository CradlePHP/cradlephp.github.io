---
layout: documentation
class: page-docs page-docs-framework-developer
title:  "Developer - Framework - Cradle"
description: "Developer CLI Tools"
menu_title: Developer Tools
menu:
  help: help
  connect: connect
  install: install
  server: server
  update: update
  deploy: deploy
  deploy-production: deploy production
  deploy-s3: deploy s3
  elastic: elastic
  elastic-flush: elastic flush
  elastic-map: elastic map
  elastic-populate: elastic populate
  package: package
  package-search: package install
  package-list: package list
  package-remove: package remove
  package-search: package search
  package-update: package update
  redis: redis
  redis-flush: redis
  sql: sql
  sql-flush: sql flush
  sql-build: sql build
  sql-populate: sql populate
---
# Developer Tools

Developer tools are used to better control the stack of your project.

 - [help](#help)
 - [connect](#connect)
 - [install](#install)
 - [server](#server)
 - [update](#update)
 - [deploy](#deploy)
 - [deploy production](#deploy-production)
 - [deploy s3](#deploy-s3)
 - [elastic](#elastic)
 - [elastic flush](#elastic-flush)
 - [elastic map](#elastic-map)
 - [elastic populate](#elastic-populate)
 - [package](#package)
 - [package install](#package-search)
 - [package list](#package-list)
 - [package remove](#package-remove)
 - [package search](#package-search)
 - [package update](#package-update)
 - [redis](#redis)
 - [redis](#redis-flush)
 - [sql](#sql)
 - [sql flush](#sql-flush)
 - [sql build](#sql-build)
 - [sql populate](#sql-populate)

## help

General help menu

###### Usage
```bash
$ cradle help
```

## connect

Connects to a server. see: `config/deploy.php`

###### Usage
```bash
$ cradle connect app-1
```

## install

Installs Cradle and its components.

### Parameters

 - `-f | --force` - Installs Cradle force overriding files
 - `--skip-sql` - Installs Cradle, but skips the SQL part
 - `--skip-versioning` - Installs Cradle but skips updating the packages
 - `--skip-mkdir` - Installs Cradle but skips the making of cache folders
 - `--skip-chmod` - Installs Cradle but skips the permission settings
 - `-h` - Database Host
 - `-u` - Database user
 - `-p` - Database password

###### Usage
```bash
$ cradle install
$ cradle install -f
$ cradle install --force
$ cradle install --skip-sql
$ cradle install --skip-versioning
$ cradle install -h 127.0.0.1 -u root -p 123
```

## server

Starts a PHP server

### Parameters

 - `-h` - Server Host
 - `-p` - Server Port

###### Usage
```bash
$ cradle server -h 127.0.0.1 -p 8888
```

## update

Updates all packages to their latest version

###### Usage
```bash
$ cradle update
```

## deploy

Deploy Commands

###### Usage
```bash
$ cradle deploy
$ cradle deploy help
```

## deploy production

Deploys code to server see: `config/deploy.php`

###### Usage
```bash
$ cradle deploy production
```

## deploy s3

Uploads static assets to S3. see: `config/services.php`

### Parameters

 - `--include-yarn` - Uploads static assets to S3 including Yarn folder
 - `--include-upload` - Uploads static assets to S3 including upload folder

###### Usage
```bash
$ cradle deploy s3
$ cradle deploy s3 --include-yarn
$ cradle deploy s3 --include-upload
```

## elastic

ElasticSearch Commands

###### Usage
```bash
$ cradle elastic
$ cradle elastic help
```

## elastic flush

Truncates the entire index

###### Usage
```bash
$ cradle elastic flush
$ cradle elastic flush foo/bar
```

## elastic map

Submits the ElasticSearch schema

###### Usage
```bash
$ cradle elastic map
$ cradle elastic map foo/bar
```

## elastic populate

Submits the ElasticSearch schema related to given package

###### Usage
```bash
$ cradle elastic populate
$ cradle elastic populate foo/bar
```

## package

Package Commands

###### Usage
```bash
$ cradle package
$ cradle package help
```

## package install

Installs a package from packagist

###### Usage
```bash
$ cradle package install foo/bar
$ cradle package install foo/bar 1.0.0
```

## package list

Lists out all the available packages

###### Usage
```bash
$ cradle package list
```

## package remove

Removes a package

###### Usage
```bash
$ cradle package remove foo/bar
```

## package search

Searches packagist for a particular package

###### Usage
```bash
$ cradle package search foobar
```

## package update

Updates a package to its latest version

###### Usage
```bash
$ cradle package update foo/bar
$ cradle package update foo/bar 1.0.0
```

## redis

Redis Commands

###### Usage
```bash
$ cradle redis
$ cradle redis help
```

## redis flush

Truncates the entire cache

###### Usage
```bash
$ cradle redis flush
$ cradle redis flush foo/bar
```

## sql

SQL Commands

###### Usage
```bash
$ cradle sql
$ cradle sql help
```

## sql flush

Truncates the entire database

###### Usage
```bash
$ cradle sql flush
$ cradle sql flush foo/bar
```

## sql build

Rebuilds the database schema

###### Usage
```bash
$ cradle sql build
$ cradle sql build foo/bar
```

## sql populate

Populates all the tables of every package

###### Usage
```bash
$ cradle sql populate
$ cradle sql populate foo/bar
```
