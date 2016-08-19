## Writing an App

First off, writing an app is similar to [writing a package](/docs/packages.html).

Create a folder path called `app/www` in your `<project folder name>` so the
final folder path should look like `<project folder name>/app/www`. Inside of
this folder create a file called `.cradle`, open it up and add the following
code.

###### Inside of `<project folder name>/app/www/.cradle`
```
<?php

$cradle->get('/foo/bar', 'Do something');

$cradle->on('Do something', function($request, $response) {
    $response->setContent('Doing Something.');
});

```

The code above makes use of [events](/docs/events.html),
[routes](/docs/routing.html), [request](/docs/request.html),
and [response](/docs/response.html). Please read through these in case you have
questions about these.

The importance of this file is that when you register this package, your
`.cradle` file will be called. This file is suppose to bootstrap everything
that is needed in order for your app to work. From within your
`<project folder name>/app/www` folder you are free to decide on the folder
structure because in the `.cradle` file you will be linking each event
handler manually like in the example below.

```
<?php

$cradle
    ->get('/foo/bar', 'Do something')
    ->on('Do something', include(__DIR__ . '/events/something.php'));

```

```info
If you have code coloring problems in your editor you can use `.cradle.php`
instead.
```

Don't add in the code above yet, for now go to your `/public/index.php` make
sure it looks similar to the following.

```

return cradle()
    //add packages here
    ->register('/app/www')

    //start rendering
    ->render();

```

If you go to your browser and open up `http://127.0.0.1/foo/bar`, you will
see that your package triggered.

While this is fantastic, overtime your `.cradle` file will be populated with
many routes and events. To separate the app into *mini apps* you can add a mini app hander
like the following.

```

$cradle->app('/foo', include(__DIR__ . '/route/foo.php'));

```

###### And Inside of <project folder name>/app/www/route/foo.php
```
<?php
use Cradle\Framework\App;

return App::i()
    ->get('/bar', 'Do something');
    ->on('Do something', function($request, $response) {
        $response->setContent('Doing Something.');
    });

```

If you go to your browser and open up `http://127.0.0.1/foo/bar`, you should
see the exact same result as before. To see an extreme example, it would look
like the following.

```

$cradle
    ->app('/'       , include(__DIR__ . '/route/global.php'))
    ->app('/app'    , include(__DIR__ . '/route/app.php'))
    ->app('/auth'   , include(__DIR__ . '/route/auth.php'))
    ->app('/profile', include(__DIR__ . '/route/profile.php'))
    ->app('/files'  , include(__DIR__ . '/route/file.php'))
    ->app('/utility', include(__DIR__ . '/route/utility.php'));

```

This is pretty much what you need to know to meta programming custom apps on
Cradle.

###### How to Meta Program
```

cradle()
    ->get('/checkout', 'Checkout Page')
    ->flow(
        'Checkout Page',
        'get products from cart',
        'get customer data',
        'render checkout body',
        'render website page',
        function($request, $response) {
            //more psuedo coding
            $response->setContent('Done.');
        }
    );

```

If you go to your browser and open up `http://127.0.0.1/checkout` You will
notice that only `Done.` was outputted. From here you merely have to define
event handlers for each event.

For a more OOP discussion on writing apps, please see
[Facades](/docs/facades.html).
