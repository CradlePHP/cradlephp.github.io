# Events
 - [Basics](#basic)
 - [Advanced](#advanced)
 - [API (4)](#api)

<a name="basic"></a>
## Basics

In Cradle, [flows](/docs/flows.html), [routes](/docs/routing.html)
and [middleware](/docs/middleware.html) are all types of events. If your new to
events, they have two typical parts, which are to listen and to fire. A typical
listen semantically looks like the following.

```
<?php
cradle()->on('Some Event', function(...$args) {
	//Do something here
});

```

In the example above there are two main arguments. The first one expressed as
`'Some Event'` is called the event. The second argument expressed as a function
is called a handler. To fire off `'Some Event'` in the example above, we can use
the follow example below.

```
<?php
cradle()->trigger('Some Event', ...$args);

```

As you noticed with `->trigger()` you can pass an N amount of arguments to the
event handler. To prevent writing all the event handlers in one file you can
optionally include the event handler in another file.

```
<?php
cradle()->on('Some Event', include('/some/event/handler.php'));

```

With this set, you can create a file located where you specified the event
handler and return a function like the following example below.

###### `/some/event/handler.php`
```
<?php
return function(...$args) {
	//Do something here
};

```

```info
This isn't doing any Cradle magic. It's just how PHP works.
```

### `$this`

Event handlers also have a populated `$this` variable which is the same as
`cradle()`. This means you can also fire events within your event handler. The
following shows how this can be done.

```
<?php
cradle()->on('Some Event', function(...$args) {
	//Do something here
    $this->trigger('Another Event');
});

```

The simplicity of the event interface in Cradle is by design, and used
constantly throughout the framework, some of which require more advance
features from events. Though in most cases you may not have a need for the
following features in the next section, describes such needs of the framework
which you can also use at your convenience.

<a name="advanced"></a>
## Advanced

### `sprintf()`

Cradle events differ than most event dispatchers because it opens up the
listener API for you to use, but be careful of it's over usage, because it
may impact performance *(which is why most close off this)*. The first
listener interface resembles a `sprintf()` type string.

###### Listening via `sprintf()`
```
<?php
cradle()
	->on('Some %s Event', function(...$args) {
        //output the first variable
        echo $this->getEventHandler()->getMeta()['variables'][0]; //--> Random
    })
    ->trigger('Some Random Event');
```

Given the example above, we use `'%s'` to denote that we are expecting a
variable. As long as the event being fired off matches `'Some %s Event'` the
relative event handler will be called. For example,
`cradle()->trigger('Some Good Event')` will match the case above.

### Meta Data

To get the variable we call on the event handler using
`$this->getEventHandler()->getMeta()` which returns meta data about the
current event. The meta data is an array that contains information like
`'event'`, `'pattern'`, `'callback'` you can use to help process an event.

```info
There isn't an easy way to access meta data inside the event handler because
you would only need to know about meta data in advance cases.
```

 ```info
Meta data is short lived. It updates every time there is a new event, ends up
`true` if all the events were fired off successfully and false if the latter.
```

### Regular Expressions

It is also possible to listen to events via regular expressions. Cradle will
case for strings to be evaluated as a regular expression if the event starts
with a `#` and has a `#` in the end like the following example below.

###### Listening via Regular Expressions
```
<?php
cradle()
	->on('#Some\s(.+)\sEvent#', function(...$args) {
        //output the first variable
        echo $this->getEventHandler()->getMeta()['variables'][0]; //--> Random
    })
    ->trigger('Some Random Event');

```

```info
 It is also possible to use expression modifiers like `#Some\s(.+)\sEvent#is`
 in the end.
```

```warning
 Make sure you know how to Regex. Invalid regular expressions will throw out an error or make the variables results unexpected.
 ```

 ```warning
 Using too much regular expressions will slow down your application.
 ```

 <a name="api"></a>
 ## API

 `on` - Attaches an instance to be notified when an event has been triggered

```

cradle()->on('Some Event', function(...$args) {
	//Do something here
});

```

----

 `trigger` - Notify all observers of that a specific event has happened

```

cradle()->trigger('Some Event', ...$args);

```

----

 `setEventHandler` - Allows for a custom event dispatcher to be used

| Parameters                    |                                                                |
|------------------------------------------------------------------------------------------------|
| `Cradle\Event\EventInterface` | The event interface (`new Cradle\Event\EventHandler`)          |
|  `$static` *(bool)*           | Whether if you want to replace the global static event handler |


```

cradle()->setEventHandler(new Cradle\Event\EventHandler, false);

```

----

 `getEventHandler` - Returns an EventHandler object if none was set, it will auto create one


```

cradle()->getEventHandler();

```
