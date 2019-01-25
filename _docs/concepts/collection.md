---
layout: documentation
class: page-docs page-docs-concepts-collection
title:  "Collections - Documentation Concepts - Cradle"
description: "A collection manages a list of models."
menu_title: Collections
menu:
  usage: Usage
  api: API (6)
---
# Collections

A collection manages a list of models. Collections become
useful when pairing it with a data store, JSON results, services etc.
Implementing this object can be done like so.

 - [Usage](#usage)
 - [API (6)](#api)

###### Instantiating

```php
use Cradle\Data\Collection;

$collection = new Collection;
```

<a name="usage"></a>
## Usage

Collections do exactly the same thing as models except it manipulates multiple
models instead. Collections can be iterable and access as arrays as well.

```php
//set user name for all rows
$collection->setUserName('Chris');

// set or get any abstract key for all rows
$collection->setAnyThing('foobar');

//collections are iterable
foreach($collection as $model) {        
    echo $model->getUserName().' ';
    echo $model['user_email'];
}

//access as array
echo $collection[0]['user_name'];
//set as array
$collection[0]['user_email'] = 'my@email.com';
```

<a name="api"></a>
## API

A collection object mounts `ArrayAccessTrait`, `CountableTrait`,
`GeneratorTrait`, `IteratorTrait` *(see [Data Traits](/docs/traits/data.html))*
and implements 6 additional methods.

`add` - Appends a model to the collection

```php
$collection->add(new Model);
```

----

`cut` - Removes a model in the collection given the index number and
reindexes the collection.

```php
$collection->cut(1); //removes the second model
$collection->cut('first'); //removes the first model
$collection->cut('last'); //removes the last model
```

----

`each` - Loops through each model in the list

```php
$collection->each(function($model) {
    //do something
});
```

----

`get` - Returns the entire dataset as pure arrays

```php
$collection->get();
```

----

`getModel` - Transforms an array into a model

```php
$collection->getModel(['foo' => 'bar']); //--> Model
```

----

`set` - Sets the collection

```php
$collection->set([
    ['foo' => 'bar'],
    ['foo' => 'zoo']
]);
```
