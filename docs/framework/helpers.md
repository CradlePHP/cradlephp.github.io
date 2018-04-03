---
layout: documentation
class: page-docs page-docs-framework-helpers
title:  "Handlebars Helpers - Framework Documentation - Cradle"
description: "As well as the original Handlebars helpers. Cradle adds over 30 more reusable helpers to use within your templates."
---

# Handlebars Helpers

Cradle uses [Handlebars](https://handlebarsjs.com/) for the templating engine.
We chose Handlebars for it's simplicity and it's availability in other
programming languages. As well as the original Handlebars helpers. Cradle adds
over 30 more reusable helpers to use within your templates.

 - [capital](#capital)
 - [upper](#upper)
 - [lower](#lower)
 - [chars](#chars)
 - [words](#words)
 - [strip](#strip)
 - [markdown](#markdown)
 - [number](#number)
 - [price](#price)
 - [formula](#formula)
 - [number_format_short](#number_format_short)
 - [date](#date)
 - [relative](#relative)
 - [join](#join)
 - [split](#split)
 - [scope](#scope)
 - [query](#query)
 - [sorturl](#sorturl)
 - [sortcaret](#sortcaret)
 - [redirecturl](#redirecturl)
 - [pager](#pager)
 - [or](#or)
 - [when](#when)
 - [otherwise](#otherwise)
 - [has](#has)
 - [hasnt](#hasnt)
 - [in](#in)
 - [notin](#notin)
 - [compile](#compile)
 - [partial](#partial)
 - [inspect](#inspect)
 - [fileinfo](#fileinfo)
 - [request](#request)
 - [response](#response)
 - [ _ ](#_)
 - [settings](#settings)

<a name="capital"></a>
## {% raw %}{{capital}}{% endraw %}

Capitalizes the given value.

##### Parameters

 - **string** The string to parse

###### Usage
```html
<!-- Foo Bar -->
{% raw %}{{capital 'foo bar'}}{% endraw %}

<!-- Bar -->
{% raw %}{{capital foo}}{% endraw %}
```

<a name="upper"></a>
## {% raw %}{{upper}}{% endraw %}

Uppercases the given value.

##### Parameters

 - **string** The string to parse

###### Usage
```html
<!-- FOO BAR -->
{% raw %}{{upper 'foo bar'}}{% endraw %}

<!-- BAR -->
{% raw %}{{upper foo}}{% endraw %}
```

<a name="lower"></a>
## {% raw %}{{lower}}{% endraw %}

Lowercases the given value.

##### Parameters

 - **string** The string to parse

###### Usage
```html
<!-- foo bar -->
{% raw %}{{lower 'Foo Bar'}}{% endraw %}

<!-- bar -->
{% raw %}{{lower foo}}{% endraw %}
```

<a name="chars"></a>
## {% raw %}{{chars}}{% endraw %}

Limits the output by the given amount of characters.

##### Parameters

 - **string** The string to parse
 - **int** The amount of characters to show

###### Usage
```html
<!-- foo -->
{% raw %}{{chars 'foo bar' 3}}{% endraw %}

<!-- b -->
{% raw %}{{lower foo 1}}{% endraw %}
```

<a name="words"></a>
## {% raw %}{{words}}{% endraw %}

Limits the output by the given amount of words.

##### Parameters

 - **string** The string to parse
 - **int** The amount of words to show

###### Usage
```html
<!-- foo -->
{% raw %}{{chars 'foo bar' 1}}{% endraw %}

<!-- Went to -->
{% raw %}{{lower zoo 2}}{% endraw %}
```

<a name="strip"></a>
## {% raw %}{{strip}}{% endraw %}

Strip HTML tags

##### Parameters

 - **string** The string to parse

###### Usage
```html
<!-- foo bar -->
{% raw %}{{strip '<b>foo</b> <em>bar</em>'}}{% endraw %}

<!-- foo <em>bar</em> -->
{% raw %}{{strip '<b>foo</b> <em>bar</em>' '<em>'}}{% endraw %}
```

<a name="markdown"></a>
## {% raw %}{{markdown}}{% endraw %}

Converts markdown to HMTL

##### Parameters

 - **string** The string to parse

###### Usage
```html
<!-- foo <em>bar</em> -->
{% raw %}{{markdown 'foo *bar*'}}{% endraw %}
```

<a name="number"></a>
## {% raw %}{{number}}{% endraw %}

Formats a number using commas and decimals

##### Parameters

 - **int** The number to parse
 - **int** The number of decimal places

###### Usage
```html
<!-- 1,000 -->
{% raw %}{{number 1000}}{% endraw %}

<!-- 1,000.00 -->
{% raw %}{{number 1000 2}}{% endraw %}
```

<a name="price"></a>
## {% raw %}{{price}}{% endraw %}

Formats a number to a price format

##### Parameters

 - **int** The number to parse

###### Usage
```html
<!-- 1,000.00 -->
{% raw %}{{price 1000}}{% endraw %}
```

<a name="formula"></a>
## {% raw %}{{formula}}{% endraw %}

Computes the given formula

##### Parameters

 - **string** The template string to parse

###### Usage
```html
{% raw %}{{formula '1000 + {{amount}}'}}{% endraw %}
```

<a name="number_format_short"></a>
## {% raw %}{{number_format_short}}{% endraw %}

Returns a short version of the number

##### Parameters

 - **int** The number to parse

###### Usage
```html
<!-- 100 -->
{% raw %}{{number_format_short 100}}{% endraw %}

<!-- 1K -->
{% raw %}{{number_format_short 1000}}{% endraw %}

<!-- 1M -->
{% raw %}{{number_format_short 1000000}}{% endraw %}
```

<a name="date"></a>
## {% raw %}{{date}}{% endraw %}

Returns a date time format

##### Parameters

 - **string** The raw date
 - **string** The date format

###### Usage
```html
<!-- January 01, 2018 -->
{% raw %}{{date '2018-01-01' 'F d, Y'}}{% endraw %}
```

<a name="relative"></a>
## {% raw %}{{relative}}{% endraw %}

Returns a date time format relative to now

##### Parameters

 - **string** The raw date
 - **string** The date format

###### Usage
```html
<!-- 3 months ago -->
{% raw %}{{relative '2018-01-01' 'F d, Y'}}{% endraw %}
```

<a name="join"></a>
## {% raw %}{{join}}{% endraw %}

Transforms an array to string

##### Parameters

 - **array** The array to join
 - **string** The separator

###### Usage
```html
<!-- 1, 2 -->
{% raw %}{{join '1 2' ', '}}{% endraw %}
```

<a name="split"></a>
## {% raw %}{{split}}{% endraw %}

Splits a string into an array

##### Parameters

 - **string** The string to split
 - **string** The separator

###### Usage
```html
<!-- foo,bar,zoo, -->
{% raw %}
{{#split 'foo,bar,zoo' ','}}{{this}},{{/split}}
{% endraw %}
```

<a name="scope"></a>
## {% raw %}{{scope}}{% endraw %}

Traverses into the specified array path

###### Usage
```html
{% raw %}
{{#scope list '0'}}
    {{@key}} -> {{this}}
{{/scope}}
{% endraw %}
```

<a name="query"></a>
## {% raw %}{{query}}{% endraw %}

Manipulates $_GET and returns the final query

 - if 1 argument, will return the key value in $_GET (should be scalar)
 - if 2 or more arguments, will set the path and return the final query

###### Usage
```html
{% raw %}
{{query 'q'}}

{{query 'q' 'foobar'}}
{% endraw %}
```

<a name="sorturl"></a>
## {% raw %}{{sorturl}}{% endraw %}

Manipulates sort order and returns the final query

##### Parameters

 - **string[,string..]** url path

###### Usage
```html
{% raw %}
<!-- look for the sorting value at ?order[profile_id] -->
{{sorturl 'order' 'profile_id'}} //--> ASC|DESC|null
{% endraw %}
```

<a name="sortcaret"></a>
## {% raw %}{{sortcaret}}{% endraw %}

Determines the caret to be used (needs fontawesome 5)

##### Parameters

 - **string[,string..]** url path

###### Usage
```html
{% raw %}
<!-- look for the sorting value at ?order[profile_id] -->
{{sortcaret 'order' 'profile_id'}} //--> <i class="fas fa-caret-up"></i>|<i class="fas fa-caret-down"></i>|null
{% endraw %}
```

<a name="redirecturl"></a>
## {% raw %}{{redirecturl}}{% endraw %}

Returns the current url encoded, used for recdirect flags

###### Usage
```html
{% raw %}{{redirecturl}}{% endraw %}
```

<a name="pager"></a>
## {% raw %}{{pager}}{% endraw %}

Uses a block to generate the pagination

##### Parameters

 - **int** total
 - **int** range

###### Usage
```html
{% raw %}
<ul>
    {{#pager 200 50}}
        <li>{{page}}</li>
    {{/pager}}
</ul>
{% endraw %}
```

<a name="or"></a>
## {% raw %}{{or}}{% endraw %}

 - If the 1st argument is populated and evaluates to true, the same argument will
   be returned
 - Otherwise the 2nd argument will be returned

##### Parameters

 - **scalar** The value to be tested
 - **scalar** The default value otherwise

###### Usage
```html
{% raw %}{{or 1 0}}{% endraw %}
```

<a name="when"></a>
## {% raw %}{{when}}{% endraw %}

A better if statement for handlebars.

##### Parameters

 - **scalar** The comparative value 1
 - **string** The comparative operator
 - **scalar** The comparative value 2

##### Supported Operators

 - `==`
 - `===`
 - `!=`
 - `!==`
 - `<`
 - `<=`
 - `>`
 - `>=`
 - `||`
 - `&&`

###### Usage
```html
<!-- No -->
{% raw %}
{{#when 1 '===' '1'}}
    Yes
{{else}}
    No
{{/if}}
{% endraw %}
```

<a name="otherwise"></a>
## {% raw %}{{otherwise}}{% endraw %}

The opposite of when

##### Parameters

 - **scalar** The comparative value 1
 - **string** The comparative operator
 - **scalar** The comparative value 2

##### Supported Operators

 - `==`
 - `===`
 - `!=`
 - `!==`
 - `<`
 - `<=`
 - `>`
 - `>=`
 - `||`
 - `&&`

###### Usage
```html
<!-- Yes -->
{% raw %}
{{#otherwise 1 '===' '1'}}
    Yes
{{else}}
    No
{{/if}}
{% endraw %}
```

<a name="has"></a>
## {% raw %}{{has}}{% endraw %}

Checks to see if a key exists

##### Parameters

 - **array** The array
 - **string** The key

###### Usage
```html
{% raw %}
{{#has post 'title'}}
    Yes
{{else}}
    No
{{/if}}
{% endraw %}
```

<a name="hasnt"></a>
## {% raw %}{{hasnt}}{% endraw %}

Checks to see if a key does not exists

##### Parameters

 - **array** The array
 - **string** The key

###### Usage
```html
{% raw %}
{{#hasnt post 'title'}}
    Yes
{{else}}
    No
{{/if}}
{% endraw %}
```

<a name="in"></a>
## {% raw %}{{in}}{% endraw %}

Checks to see if the given array has a value

##### Parameters

 - **array** The array
 - **scalar** The value

###### Usage
```html
{% raw %}
{{#in post 'title'}}
    Yes
{{else}}
    No
{{/if}}
{% endraw %}
```

<a name="notin"></a>
## {% raw %}{{notin}}{% endraw %}

Checks to see if the given array does not have a value

##### Parameters

 - **array** The array
 - **scalar** The value

###### Usage
```html
{% raw %}
{{#notin post 'title'}}
    Yes
{{else}}
    No
{{/if}}
{% endraw %}
```

<a name="compile"></a>
## {% raw %}{{compile}}{% endraw %}

Calls the compiler again to compile the given string (recursive)

##### Parameters

 - **string** The template
 - **array** The template variables

###### Usage
```html
{% raw %}{{compile '{{post_title}}' post}}{% endraw %}
```

<a name="partial"></a>
## {% raw %}{{partial}}{% endraw %}

Calls the compiler again to compile the given string (recursive)

##### Parameters

 - **string** The name of the partial
 - **array** The template variables

###### Usage
```html
{% raw %}{{partial 'name' post}}{% endraw %}
```

<a name="inspect"></a>
## {% raw %}{{inspect}}{% endraw %}

Calls the compiler again to compile the given string (recursive)

##### Parameters

 - **mixed** Force outputs any handlebars variables

###### Usage
```html
{% raw %}{{inspect post}}{% endraw %}
```

<a name="fileinfo"></a>
## {% raw %}{{fileinfo}}{% endraw %}

Reads the given filename and determines the file information

##### Parameters

 - **string** Path of the file

###### Usage
```html
{% raw %}
{{#fileinfo '/some/path/to/image.jpg'}}
    {{name}} - image.jpg
    {{base}} - image
    {{path}} - /some/path/to
    {{extension}} - jpg
    {{mime}} - image/jpg
{{/fileinfo}}
{% endraw %}
```

<a name="request"></a>
## {% raw %}{{request}}{% endraw %}

Gives access to the current request object

##### Parameters

 - **scalar[,scalar..]** The request path

###### Usage
```html
<!-- 127.0.0.1 -->
{% raw %}{{request 'server' 'HTTP_HOST'}}{% endraw %}
```

<a name="response"></a>
## {% raw %}{{response}}{% endraw %}

Gives access to the current response object

##### Parameters

 - **scalar[,scalar..]** The response path

###### Usage
```html
<!-- false -->
{% raw %}{{response 'json' 'error'}}{% endraw %}
```

<a name="_"></a>
## {% raw %}{{_}}{% endraw %}

i18n translation engine. Translate the given string based on the current
language.

##### Parameters

 - **string** The string to be translated

###### Usage
```html
<!-- nom -->
{% raw %}{{_ 'Name'}}{% endraw %}
```

<a name="settings"></a>
## {% raw %}{{settings}}{% endraw %}

Returns the settings in `config/settings.php`

##### Parameters

 - **string** The key in settings

###### Usage
```html
<!-- dev -->
{% raw %}{{settings 'environment'}}{% endraw %}
```
