---
layout: documentation
class: page-docs page-docs-system-format-types
title:  "Schema Format Types - System Documentation - Cradle"
description: "Documentation of system schema format types."
---
# Schema Format Types

 - [Lower Case](#lower)
 - [Upper Case](#upper)
 - [Capitalize](#capital)
 - [Character Length](#char)
 - [Word Length](#word)
 - [Date Format](#date)
 - [Relative Format](#relative)
 - [Raw HTML](#html)
 - [Strip HTML](#strip)
 - [Markdown](#markdown)
 - [Link](#link)
 - [Image](#image)
 - [Email](#email)
 - [Phone](#phone)
 - [Formula](#formula)
 - [Comma Separated](#comma)
 - [Price Format](#price)
 - [Yes/No](#yes)
 - [Custom Format](#custom)
 - [Dont Show](#hide)
 - [No Filter](#none)

<a name="lower"></a>
## Lower Case

![Lower Case](/images/format/format-lower.png)

Transforms the value to lower case.

```
Foo Bar -> foo bar
```

<a name="upper"></a>
## Upper Case

![Upper Case](/images/format/format-upper.png)

Transforms the value to upper case.

```
Foo Bar -> FOO BAR
```

<a name="capital"></a>
## Capitalize

![Capitalize](/images/format/format-capital.png)

Capitalizes the value.

```
foo bar -> Foo Bar
```

<a name="char"></a>
## Character Length

![Character Length](/images/format/format-char.png)

Limits the value to the specified amount of characters

###### Given that length is 5
```
foo bar -> foo b
```

<a name="word"></a>
## Word Length

![Word Length](/images/format/format-word.png)

Limits the value to the specified amount of words

###### Given that length is 1
```
foo bar -> foo
```

<a name="date"></a>
## Date Format

![Date Format](/images/format/format-date.png)

Formats the value to a specified date format

###### Given that the format is `F d, Y`
```
2018-01-01 -> January 01, 2018
```

<a name="relative"></a>
## Relative Format

![Relative Format](/images/format/format-relative.png)

Formats the value to a specified relative date format

###### Given that the format is `F d, Y`
```
2018-01-01 -> 3 months ago
```

###### Given that the format is `F d, Y`
```
2016-01-01 -> January 01, 2016
```

<a name="html"></a>
## Raw HTML

![Raw HTML](/images/format/format-html.png)

If the value contains HTML, by default we escape these tags. This format will
allow the use of HTML as an output

<a name="strip"></a>
## Strip HTML

Strips HTML from the value

###### Given that allowable is '<b>'
```
<p>something <b>strong</b> happened</p> -> something <b>strong</b> happened
```

![Strip HTML](/images/format/format-strip.png)

<a name="markdown"></a>
## Markdown

![Markdown](/images/format/format-markdown.png)

If the value contains Markdown, this will convert it to HTML.

<a name="link"></a>
## Link

![Link](/images/format/format-link.png)

Converts value to a link tag. The first parameter is the value of the href
attribute of the link tag. The second parameter is for the inner text of the
link tag.

###### Given `/some/link` and `Foobar`
```
<a href="/some/link">Foobar</a>
```

Both parameters can optionally accept Handlebars variables. Handlebars
variables are relative to the model that is using this format.

###### For example if `article` and has field called `title` ...
```
/some/path/{% raw %}{{article_title}}{% endraw %}
```


<a name="image"></a>
## Image

![Image](/images/format/format-image.png)

Converts a value to an image tag.

###### Given width is 100 and height is 200
```
<img src="/some/path/{% raw %}{{value}}{% endraw %}" width="100" height="200" />
```

<a name="email"></a>
## Email

![Email](/images/format/format-email.png)

Converts value to an email link.

###### Given `john@doe.com` and `Foobar`
```
<a href="mailto:john@doe.com">Foobar</a>
```

<a name="phone"></a>
## Phone

![Phone](/images/format/format-phone.png)

Converts value to an email link.

###### Given `555-2424` and `Foobar`
```
<a href="tel:555-2424">Foobar</a>
```

<a name="formula"></a>
## Formula

![Formula](/images/format/format-formula.png)

Compiles the given Handlebars template and evaluates the final formula.

Given
 - `product` has `price` and `tax`
 - `price` is 100
 - `tax` is 20

```
{% raw %}{{product_price}}{% endraw %} + {% raw %}{{product_tax}}{% endraw %} -> 100 + 20 -> 120
```

<a name="comma"></a>
## Comma Separated

![Lower](/images/format/format-comma.png)

Joins an array into a comma separated string

<a name="price"></a>
## Price Format

![Lower](/images/format/format-price.png)

Adds commas and 2 decimal places to the number value

<a name="yes"></a>
## Yes/No

![Lower](/images/format/format-yes.png)

Transforms the value to either Yes or No.

```
1 -> Yes
0 -> No
```

<a name="custom"></a>
## Custom Format

![Custom Format](/images/format/format-custom.png)

Compiles the given Handlebars template.

Given
 - `product` has `name` and `price`
 - `name` is iphone
 - `price` is 1000

```
{% raw %}{{product_name}}{% endraw %} - ${% raw %}{{product_price}}{% endraw %} -> iphone - $1000
```

<a name="hide"></a>
## Dont Show

![Dont Show](/images/format/format-hide.png)

Hides the value

<a name="none"></a>
## No Filter

![No Filter](/images/format/format-none.png)

Performs no formatting on the value
