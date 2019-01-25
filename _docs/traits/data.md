---
layout: documentation
class: page-docs page-docs-traits-events
title:  "Data - Traits - Cradle"
description: "Data Concepts and Documentation"
menu_title: Data
menu:
  arrayaccess: ArrayAccess Trait (4)
  countable: Countable Trait (1)
  iterator: Iterator Trait (5)
  magic: Magic Trait (4)
  dot: Dot Trait (4)
  generator: Generator Trait (1)
  data: Data Trait
---
# Data

 - [ArrayAccess Trait (4)](#arrayaccess)
 - [Countable Trait (1)](#countable)
 - [Iterator Trait (5)](#iterator)
 - [Magic Trait (4)](#magic)
 - [Dot Trait (4)](#dot)
 - [Generator Trait (1)](#generator)
 - [Data Trait](#data)

This section is all about data management, all of which perform tasks on a
singular protected property called `$data`.

<a name="arrayaccess"></a>
## ArrayAccess Trait

The ArrayAccess trait wraps the ArrayAccess interface of PHP and when mounted
will allow your class to be accessed like an array. Mounting this trait can be
done with the following example.

```php
use Cradle\Data\ArrayAccessTrait

class MyClass
{
    use ArrayAccessTrait;

    protected $data = array();
}
```

The ArrayAccess trait implements the ArrayAccess interface exactly adding
`offsetSet`, `offsetGet`, `offsetExists`, `offsetUnset` methods to your class
which makes the following now possible.

```php
$myClass = new MyClass;

if(!isset($myClass['foo'])) {
    $myClass['foo'] = 'bar';
}

echo $myClass['foo']; //--> 'bar'

unset($myClass['foo']);
```

<a name="countable"></a>
## Countable Trait

The Countable trait wraps the Countable interface of PHP and when mounted
will allow your class to be counted like an array. Mounting this trait can be
done with the following example.

```php
use Cradle\Data\CountableTrait

class MyClass
{
    use CountableTrait;
    protected $data = array();
}
```

The Countable trait implements the Countable interface exactly adding the
`count` method to your class which makes the following now possible.

```php
$myClass = new MyClass;
echo count($myClass); //--> 0
```

<a name="iterator"></a>
## Iterator Trait

The Iterator trait wraps the Iterator interface of PHP and when mounted
will allow your class to be iterated like an array. Mounting this trait can be
done with the following example.

```php
use Cradle\Data\IteratorTrait

class MyClass
{
    use IteratorTrait;

    protected $data = array();
}
```

The Iterator trait implements the Iterator interface exactly adding
`rewind`, `current`, `next`, `key`, `valid` methods to your class
which makes the following now possible.

```php
$myClass = new MyClass;

foreach($myClass as $key => $value) {
    //Do something
}
```

<a name="magic"></a>
## Magic Trait

The Magic trait adds extra accessors for the data array. Mounting this trait can be
done with the following example.

```php
use Cradle\Data\MagicTrait;

class MyClass
{
    use MagicTrait {
        MagicTrait::__getData as __get;
        MagicTrait::__setData as __set;
        MagicTrait::__callData as __call;
        MagicTrait::__toStringData as __toString;
    }

    protected $data = array();
}
```

The Magic trait implements three magic methods adding `__call`, `__get`,
`__set` methods to your class which makes the following now possible.

```info
We suffixed the magic methods with `'Data'` as in `__getData` to keep the
methods free for you to define as you can always alias them.
```

```php
$myClass = new MyClass;

$myClass->setFooBar('zoo'); // $data['foo_bar']
echo $myClass->getFooBar(); //--> 'zoo'

$myClass->foo_bar = 'zoo'; // $data['foo_bar']
echo $myClass->foo_bar; //--> 'zoo'

echo $myClass; //--> <JSON string>
```

<a name="dot"></a>
## Dot Trait

The Dot trait adds accessors to help manage three or more dimensional arrays.
Mounting this trait can be done with the following example.

```php
use Cradle\Data\DotTrait;

class MyClass
{
    use DotTrait;

    protected $data = array();
}
```

The Dot trait implements a four methods called `getDot`, `setDot`,
`isDot`, `removeDot` which can be used like the following

```php
$myClass = new MyClass;

$myClass->setDot('some.path.to.value', 'foobar'); // $data['some']['path']['to']['value'] = 'foobar'

$myClass->getDot('some.path.to.value'); //--> 'foobar'
$myClass->getDot('some.path.to'); //--> ['value' => 'foobar']

$myClass->removeDot('some.path');
$myClass->isDot('some.path'); //--> false
```

```info
All dot methods have an extra parameter where you can specify the delimeter.
```

```php
$myClass->getDot('some-path-to-value', '-');
```

<a name="generator"></a>
## Generator Trait

The Generator trait takes advantage of PHP generators.
Mounting this trait can be done with the following example.

```php
use Cradle\Data\GeneratorTrait;

class MyClass
{
    use GeneratorTrait;

    protected $data = array();
}
```

The Generator trait implements a single method called `generator` which can be
used like the following.

```php
$myClass = new MyClass;

foreach($myClass->generator() as $key => $value) {
    //Do something
}
```

<a name="data"></a>
## Data Trait

The data trait combines all the aforementioned traits so you wouldn't have to
declare them one by one *(on the off chance you would want to use all of them)*.
Mounting this trait can be done with the following example.

```php
use Cradle\Data\DataTrait;

class MyClass
{
    use DataTrait;
}
```
