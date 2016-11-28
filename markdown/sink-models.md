# Sink - Models

All models can be found in the `app/core/src/Model` folder. Models in the sink
are generic classes used to define unit sized functionality about objects and
allow the framework to interact with various services.

Models in the sink are designed for usage exclusively for [jobs](/docs/sink-jobs)
and follow a common structure.

 - CRUD for database
 - CRUD for index
 - CRUD for cache
 - Validation

In the sink, the `databaseDetail`, `indexDetail` and `cacheDetail` should
return the exact same data format by design. This makes inserting and
updating normalized for easier logic. Likewise the same could be said about
`databaseSearch`, `indexSearch` and `cacheSearch`.

You are free to exchange models with your desired ORM with very little effort
because Models in the sink only require the `AbstractModel` also found in
`app/core/src`.
