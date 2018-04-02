---
layout: documentation
class: page-docs page-docs-concepts-response
title:  "Response - Documentation Concepts - Cradle"
description: "A response holds the results of a request and determines the format of the output."
---
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
```php
cradle()->get('/create/user', function($response, $response) {
    //Do something here
});
```

To see what's inside of a response, you can simply echo it out like the
following.

```php
echo $response;
```

And it will show JSON like the one representing this page.

```json
{
    "headers": {
        "Content-Type": "text\/plain"
    },
    "code": 200,
    "header": {
        "Status": "200 OK",
    },
    "json": {
        "error": false,
        "results": {
            "menu": {
                "#registry": "Registry",
                "#methods": "Response Methods",
            }
        }
    },
    "content": "Hello, World"
}
```

To access the `"Registry"` in the above JSON, you can do so in many ways

```php
$response->get('json', 'results', 'menu', '#registry');

$response->getDot('json.results.menu.#registry');

$response->getJson('results', 'menu', '#registry');

$response->getResults('menu', '#registry');
```

Like wise, setting that same path to `"Introduction"` can be done like this.

```php
$response->set('body', 'results', 'menu', '#registry', 'Introduction');

$response->setDot('body.results.menu.#registry', 'Introduction');

$response->setJson('results', 'menu', '#registry', 'Introduction');

$response->setResults('menu', '#registry', 'Introduction');
```

Removing that path is similar as well.

```php
$response->remove('json', 'results', 'menu', '#registry');

$response->removeDot('json.results.menu.#registry');

$response->removeJson('results', 'menu', '#registry');

$response->removeResults('menu', '#registry');
```

And checking for data can be like this.

```php
$response->exists('json', 'results', 'menu', '#registry');

$response->isDot('json.results.menu.#registry');

$response->hasJson('results', 'menu', '#registry');

$response->hasResults('menu', '#registry');
```

```info
 If you have an actual `.` in your path, you can change the delimeter like `$response->getDot('body-results-menu-#registry', '-');`
```

<a name="methods"></a>
## Response Methods

A response holds the results of a request and determines the format of the
output. Typically kinds of responses are HTML and JSON however any output type
is supported.

###### Image Response

```php
$response->addHeader('Content-Type', 'image/png');
$response->setContent('<image data here>')
```

### Content

Content in the response will be considered to be outputted first, but when
it is not set, by default the JSON data will be the latter choice. Setting
content can be done in the following way.

```php
$response->setContent('Hello, World');
```

When an array is passed to `$response->setContent(['foo' => 'bar'])`, the
content will automatically transform it to `JSON_PRETTYPRINT` format.

For both the content and the JSON, the following methods can help build
a response that can be outputted.


```php
$response->isContentFlat(); //is it a string or array?

$response->addValidation(...$args, $value);

$response->getResults(...$args);

$response->setResults(...$args, $value);

$response->getValidation(...$args);

$response->setError(true, $message);

$response->getContent(true); //if the content is an array make it into json

$response->hasContent();

$response->setContent($content);
```

<a name="api"></a>
## API

`load` - Loads a default response data

```php
$request->load();
```

----

<a name="content"></a>
### ContentTrait

`getContent` - Returns the content body

```php
$response->getContent();
```

----

`hasContent` - Returns true if there's content

```php
$response->hasContent();
```

----

`setContent` - Sets the content

```php
$response->setContent('foobar');
```

----

<a name="head"></a>
### HeaderTrait

`addHeader` - Adds a header parameter

```php
$response->addHeader('Content-Type', 'text/html');

$response->addHeader('Expect');
```

----

`getHeaders` - Returns either the header value given the name or the all headers

```php
$response->getHeaders();
$response->getHeaders('Content-Type', 'text/html');
```

----

`removeHeaders` - Removes either the header value given the name or the all headers

```php
$response->removeHeaders();
$response->removeHeaders('Content-Type');
```

----

<a name="page"></a>
### PageTrait

`addMeta` - Adds a page meta item

```php
$response->addMeta('description', 'foobar');
```

----

`getFlash` - Returns flash data

```php
$response->getFlash(); //--> ['message' => 'foobar', 'type' => 'success']
```

----

`getMeta` - Returns page meta data

```php
$response->getMeta('description'); //--> 'foobar'
```

----

`getPage` - Returns parts of the page data or the entire page data

```php
$response->getPage('meta'); //--> ['description' => 'foobar']
$response->getPage('meta', 'description'); //--> 'foobar'
$response->getPage('title'); //--> 'foobar'
$response->getPage('flash'); //--> ['message' => 'foobar', 'type' => 'success']
$response->getPage('flash', 'message'); //--> 'foobar'

//...
```

----

`hasPage` - Returns parts of the page data or the entire page data

```php
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

```php
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

```php
$response->setFlash('Just letting you know');

$response->setFlash('Something went wrong', 'error');
$response->setFlash('Just letting you know', 'info');
$response->setFlash('Something went good', 'success');
```

----

`setPage` - Sets parts of the page data or the entire page data

```php
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

```php
$response->setTitle('foobar');

//...
```

----

<a name="rest"></a>
### RestTrait

`addValidation` - Adds a JSON validation message or sets all the validations

```php
$response->addValidation(['post_title' => 'Cannot be empty']);
$response->addValidation('post_title', 'Cannot be empty');
```

----

`getResults` - Returns parts of the results or the entire JSON result set

```php
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

```php
$response->getMessage(); //--> 'A message'
```

----

`getMessageType` - Returns the message type

```php
$response->getMessageType(); //--> 'error' | 'success' | 'info'
```

----

`getValidation` - Returns parts of the validation or the entire validation data

```php
$response->getValidation(); //--> ['post_title' => 'Cannot be empty']
$response->getValidation('post_title'); //--> 'Cannot be empty'
```

----

`hasJson` - Returns true if the given part exists or if there's JSON data at all

```php
$response->hasJson(); //--> true
$response->hasJson('validation'); //--> true
$response->hasJson('validation', 'post_title'); //--> true

//...
```

----

`hasMessage` - Returns true if a message was set

```php
$response->hasMessage();
```

----

`hasResults` - Returns true if the given part exists or if there's JSON results data at all

```php
$response->hasResults();
$response->hasResults('post_title');
```

----

`hasValidation` - Returns true if the given part exists or if there's JSON validation data at all

```php
$response->hasValidation();
$response->hasValidation('post_title');
```

----

`isError` - Returns true if the JSON data is an error set

```php
$response->isError();
```

----

`isSuccess` - Returns true if the JSON data is a successful set

```php
$response->isSuccess();
```

----

`removeResults` - Removes parts of the results or the entire JSON result set

```php
$response->removeResults();

$response->removeResults('error');
$response->removeResults('validation', 'post_title');
```

----

`removeValidation` - Removes parts of the validation or the entire JSON validation set

```php
$response->removeValidation();

$response->removeValidation('post_title');
```

----

`setError` - Sets a JSON error message

```php
$response->setError(true, 'An error message');
$response->setError(false, 'A success message');
```

----

`setResults` - Sets parts of the results or the entire JSON result set

```php
$response->setResults(['post_title' => 'A Title named Foo Bar']);

$response->setResults('post_title', 'A Title named Foo Bar');
```

----

<a name="status"></a>
### StatusTrait

`getStatus` - Returns the status code

```php
$response->getStatus(); //--> 200
```

----

`setStatus` - Sets a status code

```php
$response->setStatus(200, '200 OK');
```
