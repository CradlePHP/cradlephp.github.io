---
layout: documentation
class: page-docs page-docs-system-field-types
title:  "Reference: Schema Field Types - System Documentation - Cradle"
description: "Documentation of system schema field types."
menu_title: Field Types
menu:
  text: Text Field
  email: Email Field
  password: Password Field
  search: Search Field
  url: URL Field
  color: Color Field
  mask: Mask Field
  slug: Slug Field
  textarea: Textarea Field
  wysiwyg: WYSIWYG Field
  markdown: Markdown Field
  number: Number Field
  small: Small Number Field
  range: Range Field
  float: Float Field
  price: Price Field
  date: Date Field
  time: Time Field
  datetime: Date Time Field
  week: Week Field
  month: Month Field
  checkbox: Checkbox Field
  switch: Switch Field
  select: Select Field
  checkboxes: Checkboxes Field
  file: File Field
  image: Image Field
  files: Files Field
  images: Images Field
  tag: Tag Field
  meta: Meta Field
  multirange: Multi Range Field
  unique: Unique ID Field
  active: Active Field
  created: Created Field
  updated: Updated Field
---
# 2.9. Reference: Schema Field Types

The following is the documentation for field types you can choose from when
creating a schema with Cradle. The fields are a mixture of HTML5 fields as well
as advanced fields commonly used around the web.

<a name="text"></a>
## Text Field

![Text Field](/images/fields/field-text.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
pattern | regexp | Specifies a regular expression that the field value is checked against
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="email"></a>
## Email Field

![Email Field](/images/fields/field-email.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="password"></a>
## Password Field

![Password Field](/images/fields/field-password.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="search"></a>
## Search Field

![Search Field](/images/fields/field-search.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="url"></a>
## URL Field

![URL Field](/images/fields/field-url.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="color"></a>
## Color Field

![Color Field](/images/fields/field-color.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="mask"></a>
## Mask Field

![Mask Field](/images/fields/field-mask.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
pattern | regexp | Specifies a regular expression that the field value is checked against
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
data-format | string | Input field value format

### Format

 - `9` : numeric
 - `a` : alphabetical
 - `*` : alphanumeric`

It is possible to define some parts in the mask as optional. This is done by
using `[]` as in `(99) 9999[9]-9999`.

The above example will allow values like `(99) 99999-9999` or `(99) 9999-9999`.
Dynamic masks can change during the input. To define a dynamic part use `{}`.

 - `{n}` => n repeats
 - `{n|j}` => n repeats, with j jitmasking
 - `{n,m}` => from n to m repeats
 - `{n,m|j}` => from n to m repeats, with j jitmasking

Also `{+}` and `{*}` is allowed. `+` start from 1 and `*` start from 0.

<a name="slug"></a>
## Slug Field

![Slug Field](/images/fields/field-slug.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
pattern | regexp | Specifies a regular expression that the field value is checked against
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
data-source | selector | The CSS selector to which to based the value from

<a name="textarea"></a>
## Textarea Field

![Textarea Field](/images/fields/field-textarea.png)

### Attributes

autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
cols | number | Specifies the visible width of a text area
maxlength | number | Specifies the maximum number of characters allowed in the text area
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
rows | number | Specifies the visible number of lines in a text area
wrap | hard, soft | Specifies how the text in a text area is to be wrapped when submitted in a form

<a name="wysiwyg"></a>
## WYSIWYG Field

![WYSIWYG Field](/images/fields/field-wysiwyg.png)

### Attributes

cols | number | Specifies the visible width of a text area
maxlength | number | Specifies the maximum number of characters allowed in the text area
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
rows | number | Specifies the visible number of lines in a text area

<a name="markdown"></a>
## Markdown Field

![Markdown Field](/images/fields/field-markdown.png)

### Attributes

placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
data-height | number | height size of the editor
data-width | number | width size of the editor

<a name="number"></a>
## Number Field

![Number Field](/images/fields/field-number.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
max | number | Specifies the maximum value for the field
min | number | Specifies a minimum value for the field
step | number | Specifies the legal number intervals for an input field

<a name="small"></a>
## Small Number Field

![Small Number Field](/images/fields/field-small.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="range"></a>
## Range Field

![Range Field](/images/fields/field-range.png)

### Attributes

placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
max | number | Specifies the maximum value for the field
min | number | Specifies a minimum value for the field
step | number | Specifies the legal number intervals for an input field

<a name="float"></a>
## Float Field

![Float Field](/images/fields/field-float.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
max | number | Specifies the maximum value for the field
min | number | Specifies a minimum value for the field
step | number | Specifies the legal number intervals for an input field

<a name="price"></a>
## Price Field

![Price Field](/images/fields/field-price.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
max | number | Specifies the maximum value for the field
min | number | Specifies a minimum value for the field

<a name="date"></a>
## Date Field

![Date Field](/images/fields/field-date.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
max | date | Specifies the maximum value for the field
min | date | Specifies a minimum value for the field

<a name="time"></a>
## Time Field

![Time Field](/images/fields/field-time.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="datetime"></a>
## Date Time Field

![Date Time Field](/images/fields/field-datetime.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
max | date | Specifies the maximum value for the field
min | date | Specifies a minimum value for the field

<a name="week"></a>
## Week Field

![Week Field](/images/fields/field-week.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="month"></a>
## Month Field

![Month Field](/images/fields/field-month.png)

### Attributes

autocomplete | on, off | Specifies whether the field should have autocomplete enabled
autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form

<a name="checkbox"></a>
## Checkbox Field

![Checkbox Field](/images/fields/field-checkbox.png)

### Attributes

autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
checked | checked | Specifies that the field should be pre-selected when the page loads

<a name="switch"></a>
## Switch Field

![Switch Field](/images/fields/field-switch.png)

### Attributes

autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
placeholder | text | Specifies a short hint that describes the expected value of the field
required | required | Specifies that the field must be filled out before submitting the form
checked | checked | Specifies that the field should be pre-selected when the page loads

<a name="select"></a>
## Select Field

![Select Field](/images/fields/field-select.png)

### Attributes

autofocus | autofocus | Specifies that the field should automatically get focus when the page loads
required | required | Specifies that the field must be filled out before submitting the form
size | number | Defines the number of visible options in a drop-down list

<a name="checkboxes"></a>
## Checkboxes Field

![Checkboxes Field](/images/fields/field-checkboxes.png)

<a name="radio"></a>
## Radio Field

![Radio Field](/images/fields/field-radios.png)

<a name="file"></a>
## File Field

![File Field](/images/fields/field-file.png)

### Attributes

data-accept | string | Comma separated mime types
data-class | string | Class names to add to the field wrapper
data-width | number | Cropping width applied to images
data-height | number | Cropping height applied to images

<a name="image"></a>
## Image Field

![Image Field](/images/fields/field-image.png)

### Attributes

data-accept | string | Comma separated mime types
data-class | string | Class names to add to the field wrapper
data-width | number | Cropping width applied to images
data-height | number | Cropping height applied to images

<a name="files"></a>
## Files Field

![Files Field](/images/fields/field-files.png)

### Attributes

data-accept | string | Comma separated mime types
data-class | string | Class names to add to the field wrapper
data-width | number | Cropping width applied to images
data-height | number | Cropping height applied to images

<a name="images"></a>
## Images Field

![Images Field](/images/fields/field-images.png)

### Attributes

data-accept | string | Comma separated mime types
data-class | string | Class names to add to the field wrapper
data-width | number | Cropping width applied to images
data-height | number | Cropping height applied to images

<a name="tag"></a>
## Tag Field

![Tag Field](/images/fields/field-tags.png)

<a name="meta"></a>
## Meta Field

![Meta Field](/images/fields/field-meta.png)

<a name="multirange"></a>
## Multi Range Field

![Multi Range Field](/images/fields/field-multirange.png)

### Attributes

required | required | Specifies that the field must be filled out before submitting the form
data-max | number | Specifies the maximum value for the field
data-min | number | Specifies a minimum value for the field
data-step | number | Specifies the legal number intervals for an input field
data-from | number | Set start position for left handle (or for single handle)
data-to | number | Set start position for right handle

<a name="unique"></a>
## Unique ID Field

![Unique ID Field](/images/fields/field-unique.png)

<a name="active"></a>
## Active Field

![Active Field](/images/fields/field-active.png)

<a name="created"></a>
## Created Field

![Created Field](/images/fields/field-created.png)

<a name="updated"></a>
## Updated Field

![Updated Field](/images/fields/field-updated.png)
