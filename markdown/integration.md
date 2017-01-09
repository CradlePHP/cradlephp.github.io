# Integration
 - [Semi-Integration](#semi)
 - [Full Integration](#full)

<a name="semi"></a>
## Semi Integration

When it comes to PHP, there are already existing great enterprise solutions
out there. If you have done something existing in PHP already, most likely you
have used one of them. Cradle is a meta framework, and whenever your ready to
integrate with a more enterprise solution, you can easily so with the
`->export()` method. The following example shows how this can be done.

###### Exporting a Flow
```
<?php
/**
 * Hello Laravel !
 */
$app->get('/', cradle()->export('Get Foo Bar'));

```

The above will return a callback which [Laravel](https://laravel.com/) can
call on. In this particular case [Laravel](https://laravel.com/) can pass an
*N* amount of arguments, all of which will be ignored by default and
Cradle will continue with its own way of doing things and in the end either
return a response string or false. If you want to map out the response before
it gets sent to [Laravel](https://laravel.com/) you need to create a map
callback and add true to the `->export()` method. The following shows how
this can be done.

```
<?php
/**
 * Hello Laravel !
 */
$app->get('/{app_id}', function($appId) {
    list($request, $response, $next) = cradle()->export('Get Foo Bar', true);

    $request->setPost('app_id', $appId);

    return $next();
});
```

Doing it this way will return three properties, `$request` which is the
Cradle [Request](/docs/request.html) object, `$response` which is the Cradle
[Response](/docs/response.html) object and `$next` which is the callback to
trigger the flow. In [Symfony](https://symfony.com/) you an achieve the same
in [Laravel](https://laravel.com/) with the following.

```
<?php
// src/AppBundle/Controller/BlogController.php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class BlogController extends Controller
{
    /**
     * Matches /blog/*
     *
     * @Route("/blog/{slug}", name="blog_show")
     */
    public function showAction($slug)
    {
        list($request, $response, $next) = cradle()->export('Get Foo Bar', true);

        $request->setPost('blog_slug', $slug);

        return new Response($next());
    }
}

```

<a name="full"></a>
##Full Integration

With full integration, we will not be utilizing Cradle's
[Request](/docs/request.html), [Response](/docs/response.html),
nor the [Router](/docs/routing.html) to run these flows. Instead we rely on
the framework that we are integrating with to have these features. To do a
full on integration it's really three steps.

### Step 1
Define all your flows in the configuration folder which is usually marked as
`/config` or `/app/config`. Your File should look like the following.

###### `/config/flows.php`
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

### Step 2

Setup Cradle in the main PHP file. Most frameworks use `/public/index.php`
or `/web/app.php`. Open that file and add the following.

```
<?php

if(!function_exists('cradle')) {
    function cradle()
    {
        static $framework = null;

        if(is_null($framework)) {
            $framework = new \Cradle\Frame\FrameHttp;
        }

        return $framework;
    }
}

```

### Step 3
Populate the Framework Actions

```
<?php
// src/AppBundle/Controller/BlogController.php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class BlogController extends Controller
{
    /**
     * Matches /blog/*
     *
     * @Route("/blog/{slug}", name="blog_show")
     */
    public function showAction($slug)
    {
        $response = new Response();

        cradle()->trigger('Render Page', $slug, $response);

        return $response;
    }
}
```
