---
layout: documentation
class: page-docs page-docs-admin-create-schema
title:  "Creating a Schema - Working the Admin - Cradle"
description: "For this tutorial we will create an article. If you have worked with articles in other systems, you can already visualize how the form should like."
menu_title: 2.1. Creating a Schema
menu:
  info: 2.1.1. Schema Fields
  types: 2.1.2. Custom Fields
  validation: 2.1.3. Validation
  formats: 2.1.4. Formats
  indexes: 2.1.5. Indexes
  morefields: 2.1.6. Add More Fields
  relations: 2.1.7. Relations
  suggested: 2.1.8. Suggested Format
---
# 2.1. Creating a Schema

A schema contains all the information needed to create an object. For example
when we think about an **Article** it could have the following properties.

 - **Title** - Text Field; required
 - **Detail** - Textarea Field; required
 - **Status** - Select Field with the following options:
   - *pending* - Still a work in progress
   - *reviewed* - Draft is complete and reviewed by an editor
   - *published* - Article is now viewable to the public
 - **Published Date** - The date showing when it was first available to the public

We also can determine that an **Article** should have an **Author** *(1:1 relationship)*,
but an **Author** is another kind of schema which we will cover later in this chapter.
If you have worked with articles in other systems, you can already visualize
how the form should like.

###### Figure 2.1.A. Visualizing the Article Form
![Article Form](/docs/admin/assets/2.1.A.png)

Let's begin by going to `http://127.0.0.1:8888/admin/system/schema/search`.
You should see something similar to the following image below.

###### Figure 2.1.B. Schema Search
![Schema Search](/docs/admin/assets/2.1.B.png)

Click the `Create Schema` button on the top right and you should be redirected
to the  **Schema Form** which looks like the image below.

###### Figure 2.1.C. Schema Form
![Schema Form](/docs/admin/assets/2.1.C.png)

Let's drill down what each schema field is in the next section.

<a name="info"></a>
## 2.1.1. Schema Fields

 - **Singular** - **required**; This is the name of your object. Since we are going to create
 a schema called article, enter **Article** in that field.
 - **Plural** - **required**; This is the plural name form of the object. We need to know this
 to properly label the search page and instead of computing what the plural form
 for every possible noun in ever language and context, it's better off we
 explicitly tell the system what it is. Enter **Articles** in that field.
 - **Keyword** - **required**; This will be the programatic name of the object. The keyword
 should not have any spaces, dashes, or any special characters besides, letters,
 numbers or an underscore. When you enter the **Singular** field, this field
 automatically got populated with **article** leave that value alone for now.
 - **Group** - *optional*; In newer versions of *Cradle*, this new field was introduced to
 help categorize schemas, which is very helpful when you have tons of schemas
 defined. Enter **Content** in that field.
 - **Icon** - *optional*; If you click that field a drop down of [Font Awesome](https://fontawesome.com/icons)
 icons should appear. this list is alphabetized left-to-right and you can visit:
 [https://fontawesome.com/icons](https://fontawesome.com/icons) in case you want
 to choose a particular font. Feel free to choose any icon that is suitable to
 represent **Articles**.
 - **Detail** - *optional*; This field is shown on the schema search page so you don't forget
 what this schema does. Enter **Manages articles in the system.** for now.

If you were following this section thoroughly, then your schema form should look
like the following image.

###### Figure 2.1.1.A. Article Schema
![Article Schema](/docs/admin/assets/2.1.1.A.png)

<a name="types"></a>
## 2.1.2. Custom Fields

Now that we have our **Article** schema information populated, let's continue on
to create the fields. We will be creating our first custom field called **Title**.
Look for the `Add Field` button and click it.

###### Figure 2.1.2.A. Field Form
![Field Form](/docs/admin/assets/2.1.2.A.png)

 - **Label** - **required**; This is the title of a field used on forms. Enter
 **Title** in that field.
 - **Keyword** - **required**; This will be the programatic name of the field. The
 keyword should not have any spaces, dashes, or any special characters besides,
 letters, numbers or an underscore. When you enter the **Label** field, this field
 automatically got populated with **title** leave that value alone for now.
 - **Type** - *optional*; This is a dropdown of possible field types you can
 choose from. We tried to add as many possible fields we can think of and for
 any that was missed, you can define your custom fields as well. You can discover
 more about these types in [2.9. Reference: Field Types](/docs/admin/schema-field-types.html).
 For now, choose **Text Field** which is the equivalent to `input[type=text]`.
 This will produce a button called `Add Attributes` click it and on the
 **Attribute** field enter `placeholder` and on the **Value** field enter
 `eg. Spam is the new Wagyu`
 - **Validation** - *optional*; When a user creates an object, these will be used
 to help determine if the system should process the form submitted. More
 information will be covered in [2.1.3. Validation](#validation) below.
 - **List Format** - *optional*; This is used to determine how the value of this
 field should look like on a listing type page *(like a search page)*. More
 information will be covered in [2.1.4. Formats](#formats) below.
 - **Detail Format** - *optional*; Similar to **List Format**. This is used to
 determine how the value of this field should look like on a detail type page
 *(like an article page)*. More information will be covered in
 [2.1.4. Formats](#formats) below.

If you were following this section thoroughly, then your field form should look
like the following image.

###### Figure 2.1.2.B. Title Field
![Title Field](/docs/admin/assets/2.1.2.B.png)

<a name="validation"></a>
## 2.1.3. Validation

Next let's make the **Title** required. Click `Add Validation` and by default
`Required` will be selected. Leave that the way it is and in the **Error Message**
field set the value to `Title is Required`.

###### Figure 2.1.3.A. Title Validation
![Validation Example](/docs/admin/assets/2.1.3.A.png)

As you can also tell there are a lot of validation options. You can discover
more about these validations in
[2.10. Reference: Validation Types](/docs/admin/schema-validation-types.html).

<a name="formats"></a>
## 2.1.4. Formats

In the `List Format` and `Detail Format` choose `Capitalize`. In both the **Article**
search and detail page, this will transform the field value of **Title** to
capialize every first letter of every word.

###### Figure 2.1.4.A. Title Formats
![Format Example](/docs/admin/assets/2.1.4.A.png)

List formats filters the output in a search page and detail formats
filters the output on detail pages in the admin. You can discover more about
these formats in [2.11. Reference: Format Types](/docs/admin/schema-format-types.html).

<a name="indexes"></a>
## 2.1.5. Indexes

There are 3 index types which are **Searchable**, **Filterable** and
**Sortable**. For now, set the **Title** to be `Searchable`.

You can discover more about Indexes in
[2.12. Reference: Indexes & Relations](/docs/admin/schema-indexes-relations.html).

###### Figure 2.1.5.A. Title Should be Searchable
![Index Example](/docs/admin/assets/2.1.5.A.png)

<a name="morefields"></a>
## 2.1.6. Add More Fields

Continue to add the rest of the fields for the **Article**. I went ahead and
provided a summarized cheat sheet of field settings below.

###### Figure 2.1.6.A. Article Schema Cheat Sheet *(Click Me)*
[![Article Schema Cheat Sheet](/docs/admin/assets/2.1.6.A.png)](/docs/admin/assets/2.1.6.A.png)

If you did this correctly, your field table found in the schema form should look
like the following image.

###### Figure 2.1.6.B. Article Field Table
![Article Field Table](/docs/admin/assets/2.1.6.B.png)

<a name="relations"></a>
## 2.1.7. Relations

###### Figure 2.1.7.A. Article Relations
![Article Relations](/docs/admin/assets/2.1.7.A.png)

Next click the `Add Relation` button and set the dropdown to `1:1` and the
field value to `profile`. This will setup a required `1:1` relationship with
profile which will act as our **Author** schema in this case.

<a name="suggested"></a>
## 2.1.8. Suggested Format

The last step is to set the `Suggested Format` to
`{% raw %}{{article_title}}{% endraw %}`. Suggested formats are used when other
schemas declares a relationship with article.

<a name="conclusion"></a>
## 2.1.9. Conclusion

That's all it really takes to build a schema in Cradle. This saves a lot of time
versus getting your back end custom made. The purpose of this is to have your
developers move on to the advance things while we take care of the basics. In
the next section [2.2. Populating Models](/docs/admin/populating-models.html), we
will go over how to add new articles and manage its entries.
