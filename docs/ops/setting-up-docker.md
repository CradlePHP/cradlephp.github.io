---
layout: documentation
class: page-docs page-docs-admin-adding-setting-docker
title:  "Setting Up Docker - Server Operations - Cradle"
description: ""
menu_title: 3.7. Setting Up Docker
menu:
  dependencies: 3.7.1. Dependencies
  services: 3.7.2. Services Available
  routing: 3.7.3. Internal Routing
  cheatsheet: 3.7.4. Docker Cheatsheet
  recommendations: 3.7.5. Recommendations
---

# 3.7. Setting Up Docker

Docker is a tool designed to make it easier to create, deploy, and run
applications by using containers. Containers allow a developer to package up an
application with all of the parts it needs, such as libraries and other
dependencies, and ship it all out as one package. By doing so, thanks to the
container, the developer can rest assured that the application will run on any
other Linux machine regardless of any customized settings that machine might
have that could differ from the machine used for writing and testing the code.

<a name="dependencies"></a>
## 3.7.1. Dependencies

The following is needed to properly setup Docker.

 - Docker engine v1.13 or higher. Your OS provided package might be a little old,
 if you encounter problems, do upgrade. See:
 [https://docs.docker.com/engine/installation](https://docs.docker.com/engine/installation)
 - Docker compose v1.12 or higher. See [docs.docker.com/compose/install](https://docs.docker.com/compose/install/)

Once you're done, simply `cd` to your project and run `docker-compose up`. This
will initialize and start all the containers.

<a name="services"></a>
## 3.7.2. Services Available

You can access your application and the following services via **`localhost`**.

Service|Address outside containers
------|---------
**Web Server**|http://127.0.0.1:8082
**MySQL**|127.0.0.1:8084

<a name="routing"></a>
## 3.7.3. Internal Routing

You'll need to configure your application to use any services you enabled:

Service|Hostname|Port number
------|---------|-----------
**php-fpm**|php-fpm|9000
**MySQL**|mysql|3306 (default)
**Redis**|redis|6379 (default)
**ElasticSearch**|elasticsearch|9200 (HTTP default) / 9300 (ES transport default)

<a name="cheatsheet"></a>
## 3.7.4. Docker Cheatsheet

**Note:** you need to cd first to where your `docker-compose.yml` file lives.

 - Start containers in the background: `docker-compose up -d`
 - Start containers on the foreground: `docker-compose up`. You will see a
 stream of logs for every container running.
 - Stop containers: `docker-compose stop`
 - Kill containers: `docker-compose kill`
 - View container logs: `docker-compose logs`

Execute command inside of container: `docker-compose exec SERVICE_NAME COMMAND`
where `COMMAND` is whatever you want to run. The following items are example
commands.

 - Shell into the PHP container, `docker-compose exec php-fpm bash`
 - Run Cradle CLI, `docker-compose exec php-fpm bin/cradle`
 - Open a mysql shell, `docker-compose exec mysql mysql -uroot -pCHOSEN_ROOT_PASSWORD`

<a name="recommendations"></a>
## 3.7.5. Recommendations

It's hard to avoid file permission issues when fiddling about with containers
due to the fact that, from your OS point of view, any files created within the
container are owned by the process that runs the docker engine *(this is usually
root)*. Different OS will also have different problems, for instance you can run
stuff in containers using `docker exec -it -u $(id -u):$(id -g) CONTAINER_NAME COMMAND`
to force your current user ID into the process, but this will only work if your
host OS is Linux, not mac. Follow a couple of simple rules and save yourself a
world of hurt.

 - Run composer outside of the php container, as doing so would install all your
 dependencies owned by `root` within your vendor folder.
 - Run commands (ie. `bin/cradle`) straight inside of your container. You can
 easily open a shell as described above and do your thing from there.
