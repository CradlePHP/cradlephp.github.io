# Sink - Modules

All modules can be found in the `module` folder. Modules in the sink contains
models, services and events generically defined for reuse across many applications.
[Applications](/docs/sink-app.html) explicitly use the available events given in the
`events.php` file which means that this file should serve as an interactive gateway
between the module and the rest of the application.

The common file structure for modules would look like the following:
 - `Service` - All services that can be used with this module
    - `ElasticService.php` - General ElasticSearch CRUD
    - `RedisService.php` - General Redis CRUD
    - `SqlService.php` - General SQL CRUD
 - `events.php` - A list of events used by [Application Controllers](/docs/sink-app.html)
 - `Service.php` - A factory class for module services
 - `Validator.php` - Validation methods for events and forms

Besides the need for `events.php`, file structures within your custom module can
also be arbitrary for example, you are free to switch out with your desired ORM with
very little effort.
