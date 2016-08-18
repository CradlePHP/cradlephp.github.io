# Response
 - [Registry](#registry)
 - [Response Methods](#response)
 - [API (1)](#api)
    - [ContentTrait (3)](#content)
    - [HeaderTrait (3)](#head)
    - [PageTrait (9)](#page)
    - [RestTrait (15)](#rest)
    - [StatusTrait (2)](#status)

<a name="registry"></a>
## Registry

A response is a type of registry and a registry is a type of array object
in which, we are dealing with one property which is an array. Every method
in an array object helps interacting with that object like a native array
and with a registry, every method is designed to make it easier to manipulate
the contents of an array. Particularly, a registry contains methods to manage
a multi dimensional array. Since a response contains header, status, content,
etc. a response object deals with these like a registry as well. But at the
end of the day, a registry is a glorified array.

###### Remember Routes Uses Responses
```
<?php
cradle()->get('Some Event', function($response, $response) {
	//Do something here
});

```

To see what's inside of a response, you can simply echo it out like the
following.

```

echo $response;

```

And it will show JSON like the one representing this page.

```
{
    "headers": {
        "Content-Type": "text\/html; charset=utf-8"
    },
    "code": 200,
    "header": {
    	"Status": "200 OK",
    },
    "body": {
        "error": false,
        "results": {
        	"menu": {
            	"#registry": "Registry",
            	"#methods": "Response Methods",
            }
        }
    }
}
```

To access the `"Registry"` in the above JSON, you can do so in two ways

```

$response->get('body', 'results', 'menu', '#registry');

$response->getDot('body.results.menu.#registry');

```

Like wise, setting that same path to `"Introduction"` can be done like this.

```

$response->set('body', 'results', 'menu', '#registry', 'Introduction');

$response->setDot('body.results.menu.#registry', 'Introduction');

```

Removing that path is similar as well.

```

$response->remove('body', 'results', 'menu', '#registry');

$response->removeDot('body.results.menu.#registry');

```

And checking for data can be like this.

```

$response->exists('body', 'results', 'menu', '#registry');

$response->isDot('body.results.menu.#registry');

```

```info
 If you have an actual `.` in your path, you can change the delimeter like `$response->getDot('body-results-menu-#registry', '-');`
```

<a name="methods"></a>
## Response Methods

### Content
Though at the end a response body should be a string, dealing with the body
before that could be an array. This makes a lot of sense if you are building
REST calls for example. So content methods comes in two flavors, when it's
an array or when it's a string. When it's an array, the response object will
be built out like the following.

```
<?php
[
    'error' => false,
    'message' => 'A message',
    'validation' => [
        'post_title' => 'Cannot be empty'
    ]
    'results' => [
        'post_title' => 'A Title named Foo Bar'
    ]
]

```

And the following methods can help build this structure.

```

$response->isContentFlat(); //is it a string or array?

$response->addValidation(...$args, $value);

$response->getResults(...$args);

$response->setResults(...$args, $value);

$response->getValidation(...$args);

$response->setError(true, $message);

```

And when you know content is a string, you can use these methods.

```

$response->getContent(true); //if the content is an array make it into json

$response->hasContent();

$response->setContent($content);

```

<a name="api"></a>
## API

`load` - Loads a default response data

```

$request->load();

```

----

<a name="content"></a>
### ContentTrait

`getContent` - Returns the content body

```

$response->getContent();

```

----

`hasContent` - Returns true if there's content

```

$response->hasContent();

```

----

`setContent` - Sets the content

```

$response->setContent('foobar');

```

----

<a name="head"></a>
### HeaderTrait

`addHeader` - Adds a header parameter

```

$response->addHeader('Content-Type', 'text/html');

$response->addHeader('Expect');

```

----

`getHeaders` - Returns either the header value given the name or the all headers

```

$response->getHeaders();
$response->getHeaders('Content-Type', 'text/html');

```

----

`removeHeaders` - Removes either the header value given the name or the all headers

```

$response->removeHeaders();
$response->removeHeaders('Content-Type');

```

----

<a name="page"></a>
### PageTrait

`addMeta` - Adds a page meta item

```

$response->addMeta('description', 'foobar');

```

----

`getFlash` - Returns flash data

```

$response->getFlash(); //--> ['message' => 'foobar', 'type' => 'success']

```

----

`getMeta` - Returns page meta data

```

$response->getMeta('description'); //--> 'foobar'

```

----

`getPage` - Returns parts of the page data or the entire page data

```

$response->getPage('meta'); //--> ['description' => 'foobar']
$response->getPage('meta', 'description'); //--> 'foobar'
$response->getPage('title'); //--> 'foobar'
$response->getPage('flash'); //--> ['message' => 'foobar', 'type' => 'success']
$response->getPage('flash', 'message'); //--> 'foobar'

//...

```

----

`hasPage` - Returns parts of the page data or the entire page data

```

$response->hasPage();
$response->hasPage('meta');
$response->hasPage('meta', 'description');
$response->hasPage('title');
$response->hasPage('flash');
$response->hasPage('flash', 'message');

//...

```

----

`removePage` - Removes parts of the page data or the entire page data

```

$response->removePage();
$response->removePage('meta');
$response->removePage('meta', 'description');
$response->removePage('title');
$response->removePage('flash');
$response->removePage('flash', 'message');

//...

```

----

`setFlash` - Sets a Page flash

```

$response->setFlash('Just letting you know');

$response->setFlash('Something went wrong', 'error');
$response->setFlash('Just letting you know', 'info');
$response->setFlash('Something went good', 'success');

```

----

`setPage` - Sets parts of the page data or the entire page data

```

$response->setPage([
    'title' => 'foobar',
    'meta' => ['description' => 'foobar'],
    'flash' => ['message' => 'Just letting you know', 'type' => 'info']
]);

$response->setPage('meta', 'description', 'foobar');
$response->setPage('title', 'foobar');
$response->setPage('flash', ['message' => 'Just letting you know', 'type' => 'info']);
$response->setPage('flash', 'message', 'Just letting you know');

//...

```

----

`setTitle` - Sets the page title

```

$response->setTitle('foobar');

//...

```

----

<a name="rest"></a>
### RestTrait

`addValidation` - Adds a JSON validation message or sets all the validations

```

$response->addValidation(['post_title' => 'Cannot be empty']);
$response->addValidation('post_title', 'Cannot be empty');

```

----

`getResults` - Returns parts of the results or the entire JSON result set

```

$response->getResults();
/*-->
[
    'error' => false,
    'message' => 'A message',
    'validation' => [
        'post_title' => 'Cannot be empty'
    ]
    'results' => [
        'post_title' => 'A Title named Foo Bar'
    ]
]
*/

$response->getResults('error'); //--> false
$response->getResults('validation', 'post_title'); //--> 'Cannot be empty'

//...

```

----

`getMessage` - Returns the message

```

$response->getMessage(); //--> 'A message'

```

----

`getMessageType` - Returns the message type

```

$response->getMessageType(); //--> 'error' | 'success' | 'info'

```

----

`getValidation` - Returns parts of the validation or the entire validation data

```

$response->getValidation(); //--> ['post_title' => 'Cannot be empty']
$response->getValidation('post_title'); //--> 'Cannot be empty'

```

----

`hasJson` - Returns true if the given part exists or if there's JSON data at all

```

$response->hasJson(); //--> true
$response->hasJson('validation'); //--> true
$response->hasJson('validation', 'post_title'); //--> true

//...

```

----

`hasMessage` - Returns true if a message was set

```

$response->hasMessage();

```

----

`hasResults` - Returns true if the given part exists or if there's JSON results data at all

```

$response->hasResults();
$response->hasResults('post_title');

```

----

`hasValidation` - Returns true if the given part exists or if there's JSON validation data at all

```

$response->hasValidation();
$response->hasValidation('post_title');

```

----

`isError` - Returns true if the JSON data is an error set

```

$response->isError();

```

----

`isSuccess` - Returns true if the JSON data is a successful set

```

$response->isSuccess();

```

----

`removeResults` - Removes parts of the results or the entire JSON result set

```

$response->removeResults();

$response->removeResults('error');
$response->removeResults('validation', 'post_title');

```

----

`removeValidation` - Removes parts of the validation or the entire JSON validation set

```

$response->removeValidation();

$response->removeValidation('post_title');

```

----

`setError` - Sets a JSON error message

```

$response->setError(true, 'An error message');
$response->setError(false, 'A success message');

```

----

`setResults` - Sets parts of the results or the entire JSON result set

```

$response->setResults(['post_title' => 'A Title named Foo Bar']);

$response->setResults('post_title', 'A Title named Foo Bar');

```

----

<a name="status"></a>
### StatusTrait

`getStatus` - Returns the status code

```

$response->getStatus(); //--> 200

```

----

`setStatus` - Sets a status code

```

$response->setStatus(200, '200 OK');

```

----
