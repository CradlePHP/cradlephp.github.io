# Flows
 - [Handling](#handling)
 - [Forking a Flow](#forking)
 - [Importing a Flow](#importing)
 - [API (7)](#api)

<a name="handling"></a>
## Handling

Flows is a subset of [Events](/docs/events.html) which means that you can also
use [Advanced Listeners](/docs/events.html#advanced), however the way event handlers
are done here are slightly different. Much like the
[Event Basics](/docs/events.html#advanced), you can include event handers
rather than defining in the same file *(though both ways work too)*.

###### Include Handlers
```
<?php
cradle()->flow('Some Event', include('/some/event/handler'));

```

Yes it does look like events, because it is events. Where it starts to change
is flows can handle class handlers and callable function strings like the
following.

###### Class Handlers
```
<?php
cradle()->flow('Some Event', 'Controller@action');

cradle()->flow('Some Event', 'Controller::action');

```

With the example above, we see that there is an event handler called
`'Controller@action'`. This will instantiate the class called Controller and
then call a method called `action()` given the above example. An example
Controller class looks like the following.

###### A Controller
```
<?php
class Controller
{
	public function action($request, $response)
    {
   		//Do Something here
    }
}

```

```error
Controllers that require constructor arguments will result in an error.
```

```info
Though this example shows a Class Controller, Cradle doesn't require a specific
Controller nor a specific file structure.
```

 Another thing that flows can do is handle multiple event handlers in one go,
 which is why this method is called a flow. An example on how to trigger
 multiple event handlers using flows is shown below.

###### Handler Flows
```
<?php
cradle()->flow(
	'Some Event',
    'Another Event',
    include('/another/event.php'),
    'Controller@action',
    'Controller::action',
    ...$moreActions
);

```

<a name="forking"></a>
## Forking a Flow

Using triggers inside an event handler will allow a way to fork methods in flows as well. To set up a fork, the first thing to do is create a trigger inside an event handler like the example below.

```
<?php
return function() {
	//Do Something here

    //Trigger a fork
    if($good) {
    	$this->subflow('A Good Event');
    } else {
    	$this->subflow('A Bad Event');
    }
};
```

The above example shows two subflows being triggered called `'A Good Event'`
and `'A Bad Event'`. With these subflows we can now apply a fork. The
following shows how this can be done.

###### Applying a Fork
```
<?php
cradle()->flow(
	'Some Event',
    'Another Event',
    include('/another/event.php'),
    array(
    	'A Good Event',
    	'Controller@action',
    ),
    array(
    	'A Bad Event',
    	'Controller::action',
    ),
    ...$moreActions
);

```

The way we describe forked events in flows are with arrays. In this example
above, when a `'A Good Event'` happens, `'Controller@action'` will be fired
off. Oppositely, when a `'A Bad Event'` happens, `'Controller::action'` will be
fired off.

```info
A fork doesn't actually run in parallel. PHP is still linear.
```

<a name="importing"></a>
## Importing a Flow

Using the import tool, we can optionally store flows in another file, that way,
we can use the same flows for different projects. To import a flow, we can use
the following method below.

###### Importing a Flow
```
<?php

cradle()->import(include('/path/to/flow.php'));

```

An import file is simply a file that returns an array. An example on how it
looks like is shown by the following.

###### `'/path/to/flow.php'`
```
<?php

return array(
	array(
    	'Form Submit',
    	'Some Form Event',
        'Another Form Event',
        array(
            'A Good Form Event',
            'Controller@action',
        ),
        array(
            'A Bad Form Event',
            'Controller::action',
        )
    ),
    array(
    	'Render Page',
        'Some Page Event',
        'Another Page Event',
    )
);

```

<a name="api"></a>
## API

`flow` - Sets up a process flow

```

cradle()->flow(
	'Some Event',
    'Another Event',
    include('/another/event.php'),
    'Controller@action',
    'Controller::action',
    ...$moreActions
)

```

----

`protocol` - Adds a protocol used to custom parse an event name

```

cradle()->protocol('debug', funtion($event, ...$args) {
    //Parse Event
});

//...

cradle()->trigger('debug://Hello World', $foo, $bar, 123);

```

----

`subflow` - Calls a subflow to be called when there is an array fork


```

cradle()->flow(
    'Flow Name',
    'Some@method',
    'Some::method',
    'Some://Event',
    'Some Event',
    function() {
        $this->subflow('A Good Fork');
    },
    [
        'A Good Fork',
        //...
    ]
);

```

----

`trigger` - Calls an event considering classes and protocols

```

cradle()->trigger('Some Event', ...$args);
cradle()->trigger('Some@method', ...$args);
cradle()->trigger('Some::method', ...$args);
cradle()->trigger('Some://Event', ...$args);

```

----

`triggerController` - Explicitly calls a controller method

```

cradle()->triggerController('Some@method', ...$args);

```

----

`triggerFlow` - Triggers an array of events without naming the flow

```

cradle()->triggerFlow(...$args);

cradle()->triggerFlow(
    'Some Event',
    'Some@method',
    'Some::method',
    'Some://Event'
);

cradle()->triggerFlow(
    'Some Event',
    function() {
        $this->subflow('A Good Fork');
    },
    [
        'A Good Fork',
        //...
    ]
);

```

----

`triggerProtocol` - Explicitly triggers a protocol

```

cradle()->triggerProtocol('Some://Event', ...$args);

```
