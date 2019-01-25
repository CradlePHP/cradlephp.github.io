---
layout: documentation
class: page-docs page-docs-concepts-model
title:  "Models - Documentation Concepts - Cradle"
description: "A model is a representation of an object; simply deals with key/value pairs."
menu_title: Models
menu:
  usage: Usage
  api: API (2)
---
# Models

A model is a representation of an object; simply deals with key/value pairs.
Models become useful when pairing it with a data store, JSON results, services
etc. Implementing this object can be done like so.

 - [Usage](#usage)
 - [API (2)](#api)

###### Instantiating

```php
use Cradle\Data\Model;

$model1 = new Model;

//or

$model2 = new Model(['foo_bar' => 'zoo']);
```

<a name="usage"></a>
## Usage

We managed to loosely define models which takes off the restrictiveness of other
model definitions and adds scalability as an end result. First off, what we did
was define a generic, yet powerful model class that can be extended, but also
can be used as is. Our model class is already powerful enough to solve for a lot
of use cases, you might not need to extend it. We played around with this concept
and here’s what we came up with.

```php
$model->setUserName('Chris'); //set user name
$model->getUserEmail(); // returns user email

//$model->setAnyThing() // set or get any abstract key

echo $model['user_name']; //access as array
$model['user_email'] = 'my@email.com'; //set as array

echo $model->user_name; //access as object
$model->user_name = 'my@email.com'; //set as object

//iterate
foreach ($model as $key => $value) {
    //Do something
}
```

When converting models to strings, a JSON string version will be the result.

```php
echo $model1; //--> {"foo_bar":"zoo"}
```

<a name="api"></a>
## API

A model object mounts `ArrayAccessTrait`, `CountableTrait`, `GeneratorTrait`,
`IteratorTrait`, `MagicTrait`, `DotTrait`
*(see [Data Traits](/docs/traits/data.html))* and implements 2 additional methods.

`get` - Returns the entire data set.

```php
$model2->get(); //--> ['foo_bar' => 'zoo']
```

----

`set` - Sets the entire data set.

```php
$model1->set(['foo_bar' => 'zoo']);
```
