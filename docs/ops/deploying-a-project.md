---
layout: documentation
class: page-docs page-docs-admin-adding-deploying-project
title:  "Deploying a Project - Server Operations - Cradle"
description: "The goal of this chapter is to programmatically deploying updates to a server architecture."
menu_title: 3.8. Deploying a Project
menu:
  keys: 3.8.1. Setting Up the Keys
  servers: 3.8.2. Setting Up the Remote Servers
  auto: 3.8.3. Deploy Automation
---
# 3.8. Deploying a Project

The goal of this chapter is to programmatically deploying updates to a server
architecture. This chapter makes the following assumptions about your project.

 - Your project is being deployed to a linux environment
 - Your project is managed with a **GIT** respository, which means the `git`
 command is already installed

<a name="keys"></a>
## 3.8.1. Setting Up the Keys

Inside of terminal, on your local machine use the following bash commands to
create a set of keys.

###### Figure 3.8.1.A. Creating Keys
```bash
ssh-keygen -b 4096 -C "CradlePHP"
Enter file in which to save the key (~/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Make sure you don't enter a pass phrase for now, as this will defeat the purpose.
Then the command line will return similar results to the following.

###### Figure 3.8.1.B. `id_rsa` files
```bash
Your identification has been saved in ~/.ssh/id_rsa.
Your public key has been saved in ~/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:xi5oY26ffo60rSYNn6Jq4rB4h9lmcEM9Jl09mrUipyM CradlePHP
The keys randomart image is:
+---[RSA 4096]----+
|         .       |
|        . +      |
|     o . + o     |
|    o *.= .      |
|   . o =S.       |
|  . E.oo         |
|.  *=*oo.        |
|+o++Oo=*.        |
|B+.*.*B+o        |
+----[SHA256]-----+
```

The keys generated will be used as master keys that the system can use to
access the server programatically. It's important to remember the location of
both the `id_rsa` and the `id_rsa.pub` files for later.

```info
INFORMATION: You can also manage multiple server access with keys easier this way.
```

<a name="servers"></a>
## 3.8.2. Setting Up the Remote Servers

Next we want to log into each server where you will be deploying the app and/or
any of its services. When you are inside of each server we want to add or edit
the `authorized_keys` file. The following bash commands show how we can create
this file.

###### Figure 3.8.2.A. Remote Server Authorization
```
$ cd ~
$ mkdir .ssh
$ cd .ssh
$ vi authorized_keys
```

When we have the `authorized_keys` file open, we want to paste the contents of
the `id_rsa.pub` we created on our local machine to this file. After that we can
save and close both files. Last, we want to set the permissions of this back to
secure *(600)* or SSH won't allow this file to be used. Use the following
command to get this done.

###### Figure 3.8.2.B. Securing the Authorization File
```bash
chmod u-w authorized_keys
```

Log out of that server so we can test to see if the keys are properly working.
On your local machine in terminal use the following bash commands to log back in
to the server without credentials.

###### Figure 3.8.2.C. Test Log In with Keys
```bash
ssh -i [~/.ssh/id_rsa] [user]@[REMOTE IP]
```

 - `[~/.ssh/id_rsa]` - is the path of your `id_rsa` file *(not to be confused with `id_rsa.pub`)*
 - `[user]` - is the user name where we put `authorized_keys` in *(maybe `root`?)*
 - [REMOTE IP] - is the public IP address of the server

If you can connect to the server this way, we are ready to attach the keys to
the system. The next thing you want to do is log in to each server again and
setup the git environment for your project. In general you should run the
following command to clone your project on the remote server.

###### Figure 3.8.2.D. General Cloning Command
```bash
$ git clone [PROJECT REPOSITORY URL] [PROJECT DIRECTORY]
```

 - `[PROJECT REPOSITORY URL]` - is the repo URL for the project which should end
 with `.git`. For example `https://github.com/[vendor]/[project].git`
 - `[PROJECT DIRECTORY]` - is where the project will reside for example `/var/www`

<a name="auto"></a>
## 3.8.3. Deploy Automation

After you setup your project on the server/s. Go back In the `/config` folder,
open `deploy.php` to setup the integration.

###### Figure 3.8.3.A. `config/deploy.php`
```php
return [
    'key' => '/tmp/travis_rsa',
    'servers' => [
        'app' => [
            'deploy' => false,
            'user' => 'root',
            'host' =>  '<SERVER IP>',
            'repo' => 'git@github.com:<AUTHOR>/vendor.git',
            'path' => '/path/to/public/on/live/server',
            'ref' => 'origin/<BRANCH>'
        ],
        'mysql' => [
            'deploy' => false,
            'user' => 'root',
            'host' =>  '<SERVER IP>'
        ],
    ]
];
```

 - `key` - is the path of your private key set it to the absolute path of your
 `id_rsa` file *(not to be confused with `id_rsa.pub`)*
 - `servers` - are a list of remote servers where you added the key inside
 `authorized_keys`
   - `deploy` - whether if we want to deploy the updated code to this server
   - `user` - is the user name where we put `authorized_keys` in *(maybe `root`?)*
   - `host` - the public IP address of the remote server
   - `repo` - is the git path of the repo *(where your project is hosted)* you
   want to use the SSH version *(ie. git@github.com:[vendor]/[project].git)*
   - `path` - is the `[PROJECT DIRECTORY]` where the repository on the server
   resides for example `/var/www`

For servers that do not host code at all, you just need to set `'deploy => false'`
in `deploy.php` and add the `user` and `host`. In case you forget you how to access each server
you can issue the following command on your local machine.

###### Figure 3.8.3.B. Connecting to a Server
```bash
$ bin/cradle connect-to mysql
```

This will output the following and you need to copy and paste the command to log
in.

###### Figure 3.8.3.B. It Remembers For You
```bash
ssh -i ~/.ssh/id_rsa root@123.456.789.012
```

For servers with code that you want to deploy updated code on, you need to set
`'deploy => true'` in `deploy.php` then issue the following command on your local
machine.

###### Figure 3.8.3.B. Magical Deploy Command
```bash
$ bin/cradle deploy production
```

The command above is a crucial command for build servers like **Jenkins**,
**TravisCI**, **GitLab Pipes** and **BitBucket Pipelines** that allows these
fore mentioned services to auto deploy on successful testing.

Cradle comes with a TravisCI config out of the box. These settings can be
transferred to any other build server configurations as you wish.

###### Figure 3.8.3.C. `/.travis.yml`
```yml
language: php
branches:
  only:
  - master
php:
- 7.0
services:
- mysql
- redis-server
before_install:
- sudo apt-get update

install:
- phpenv rehash
sudo: required
cache: yarn
before_script:
- echo mysql-apt-config mysql-apt-config/select-server select mysql-5.7 | sudo debconf-set-selections
- wget http://dev.mysql.com/get/mysql-apt-config_0.7.3-1_all.deb
- sudo dpkg --install mysql-apt-config_0.7.3-1_all.deb
- sudo apt-get update -q
- sudo apt-get install -q -y --force-yes -o Dpkg::Options::=--force-confnew mysql-server
- sudo mysql_upgrade
- rm -f mysql-apt-config_0.7.3-1_all.deb
- cp config/settings.sample.php config/settings.php
- cp config/test.sample.php config/test.php
- cp config/test.sample.php config/services.php
- cp config/deploy.sample.php config/deploy.php
- composer self-update
- composer install
- bin/cradle install -f --skip-configs
- bin/cradle sql populate
- yarn build
- php -S 127.0.0.1:8888 -t ./public >/dev/null 2>&1 &
- bin/phantomjs --webdriver=4444 >/dev/null 2>&1 &
script:
- bin/phpunit
- bin/phpcs
- bin/codecept run -c ./app/www
- bin/codecept run -c ./app/admin
```

```info
INFORMATION: This denotes that sample files in config need to be setup for build server ready.
```

To allow TravisCI to deploy code to the remote servers after successful testing,
we need to first get the [TravisCI Command Line Tools](https://blog.travis-ci.com/2013-01-14-new-client).
Next we need to run the following command.

###### Figure 3.8.3.D. Hashing the Private Key for Travis
```bash
$ travis encrypt-file [Path to private key] --add
```

Where `[Path to private key]` is your `id_rsa` file
*(not to be confused with `id_rsa.pub`)*. This will return back to you a key hash
you can add on to your `.travis.yml`.

###### Figure 3.8.3.E. Adding the Secure Hash to `/.travis.yml`
```yml
secure: [secure hash]
language: php
...
```

On the first line before `language: php` add the following code snippet where
the `[secure hash]` is the hash is the key hash you got from running the
previous `travis` command. Next at the bottom of the `.travis.yml` under the
`script` add the following `deploy` commands.

###### Figure 3.8.3.F. Adding the Deploy Command on success
```yml
script:
- bin/phpunit
- bin/phpcs
- bin/codecept run -c ./app/www
- bin/codecept run -c ./app/admin
deploy:
  provider: script
  script: "./bin/cradle deploy production;./bin/cradle deploy s3"
  on:
    branch: master
```

This will deploy the code and CDN assets from the `master` branch of your GIT
repository to all the servers that need it.
