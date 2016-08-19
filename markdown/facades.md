# Facades

To start off with a reference, we will be using the setup described in
[Writing an App](/docs/app.html). The first thing you want to do before
continuing is to create a project namespace in `composer.json` like the
following. Then run `composer dump-autoload` to rebuild the autoload.

```
{
    "autoload": {
        "psr-4": {"Cradle\\App\\Www\\": "app/www/"}
    }
}
```

Facades are used in Cradle to return a callback of your actual class method.
Facades closely works with controllers and controllers closely work with actions.
Facades are arguably more efficient than events in general when it comes to
flows because since they directly return a callback, it doesn't add to the
event handler. Before we delve into facades, let's review how flows work.

```

cradle()->flow(
    'A process flow',
    'An event',
    //add a logger
    function($request, $response) {
        echo 'Hello World';
    }
);

```

In Cradle, there is an existing callback that log messages and you can use
it like this.

```

use Cradle\Framework\Flow;

cradle()->flow(
    'A process flow',
    'An event',
    //add a logger
    Flow::log()->debug('Hello World')
);

```

`Flow::log()->debug('Hello World')` does the exact the same thing as the
first example, outputs `'Hello World'` because `Flow::log()->debug('Hello World')`
returns a callback just like the first example.

Instead of making a list of facades, Cradle rolls all facades in a magical class
called `Flow` used above. To add controllers in your package to the Flow object
you simply need to register it like the following.

```

use Cradle\App\Www\Controller;

Flow::register('custom', function () {
    static $cache = null;

    if (is_null($cache)) {
        $cache = new Controller(cradle());
    }

    return $cache;
});

```

```info
While you can define the above code anywhere, it's recommended to put it
inside of your `.cradle` file.
```

Also please note `new Controller(cradle())` which passes the App to the
controller. This will be used later. For illustration purposes define your
controller like the following.

```

namespace Cradle\App\Www;

class Controller
{
    public function hello()
    {
        return function($request, $response) {
            echo 'Hello World';
        };
    }
}

```

Now we can call on our controller like the following example.

```

Flow::custom()->hello();

```

While this being fantastic, overtime you will have a bunch of methods that
cannot be used directly. To prevent having to return a callback, we need to
add two things. The first one is add a helper trait called `FlowTrait` used
like below.

```

namespace Cradle\App\Www;

use Cradle\Framework\App;
use Cradle\Framework\FlowTrait;

use Cradle\App\Www\Action\Hello;

class Controller
{
    use FlowTrait {
        FlowTrait::__callFlow as __call;
        FlowTrait::__getFlow as __get;
    }

    public function __construct(App $app)
    {
        $this->actions['hello'] = $this->resolve(Hello::class, $app);
    }
}

```

Several things happened in the example above. First off `Flow` comes with a
helper trait called `FlowTrait`. And `FlowTrait` is used to delay your methods
by wrapping methods in a callback and returning that instead. The exact
definition of flow traits is provided below. The second thing is that we
registered an action to the `FlowTrait` using `resolve`. To learn more about
`resolve` you can see the section about [Resolvers]('/docs/resolver.html').

###### Definition of the FlowTrait
```

trait FlowTrait
{
    use ResolverTrait;

    /**
     * @var array $actions
     */
    protected $actions = array();

    /**
     * @var array $current
     */
    protected $current = null;

    /**
     * Returns the action property
     * example `Flow::auth()->load()`
     * example `Flow::auth()->search()->load()`
     * example `Flow::auth()->search->load()`
     *
     * @param *string $name
     * @param *array  $args
     *
     * @return string
     */
    public function __callFlow($name, $args)
    {
        if (is_null($this->current)) {
            if (!isset($this->actions[$name])) {
                return $this;
            }

            //its the search part in `Flow::auth()->search()->load()`
            $this->current = $this->actions[$name];
            return $this;
        }

        //its the load part in `Flow::auth()->search()->load()`
        $action = $this->current;
        $this->current = null;

        if (property_exists($action, $name)) {
            return $action->$name;
        }

        return function ($request, $response) use ($action, $name, &$args) {
            //we should throw a method exist error at runtime
            $results = $action->$name($request, $response, ...$args);

            if ($results instanceof $action) {
                return;
            }

            return $results;
        };
    }

    /**
     * Returns the action property
     * example `Flow::auth()->search->load`
     *
     * @param *string $name
     *
     * @return string|callable
     */
    public function __getFlow($name)
    {
        return $this->__callFlow($name, array());
    }
}

```

Before we fire off our custom facade the next thing to do is create an action
class called `Cradle\App\Www\Action\Hello`.

```
<?php

namespace Cradle\App\Www\Action;

use Cradle\Framework\App;

class Hello
{
    protected $app;

    public function __construct(App $app)
    {
        $this->app = $app;
    }

    public function world($request, $response) {
        echo 'Hello World';

        return $this;
    }
}

```

If you made it this far, you can now add your custom facade like the following.

```

use Cradle\Framework\Flow;

cradle()->flow(
    'A process flow',
    'An event',
    //add a logger
    Flow::custom()->hello->world
);

```

You can accept additional parameters to your custom methods like this.

```

Flow::custom()->hello->world($foo, 'bar');

```

In which can be accepted by your methods like this.

```
public function world($request, $response, $foo, $bar) {
    echo 'Hello World';
    return $this;
}
```
