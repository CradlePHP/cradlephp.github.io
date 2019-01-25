---
layout: documentation
class: page-docs page-docs-system-create-schema
title:  "Creating a Schema - System Documentation - Cradle"
description: "For this tutorial we will create an article. If you have worked with articles in other systems, you can already visualize how the form should like."
menu_title: Creating a Schema
menu:
  info: Information Fields
  types: Custom Fields
  validation: Validation
  formats: Formats
  indexes: Indexes
  relations: Relations
  suggested: Suggested Format
  create: Create an Article
---
# Creating a Schema

For this tutorial we will create an article. An article has a title, detail,
published date, and status. If you have worked with articles in other systems,
you can already visualize how the form should like.

 - [Information Fields](#info)
 - [Custom Fields](#types)
 - [Validation](#validation)
 - [Formats](#formats)
 - [Indexes](#indexes)
 - [Relations](#relations)
 - [Suggested Format](#suggested)
 - [Create an Article](#create)


Go to `http://127.0.0.1:8888/admin/system/schema/search`. You should see
something similar to the following.

![Schema Search](/images/full-7.png)

and click the `Create Schema` button on the top right.

![Schema Form](/images/full-12.png)

<a name="info"></a>
## Information Fields

In the **singular** field enter `Article`. You will see that the **keyword**
field auto-populates based on what you entered. Leave the **keyword** field
alone for now.

In the **plural** field enter `Articles`, which is obviously the plural form of
`Article`. The **icon** field you can choose which ever icon you like and the
**Detail** field is optional.

<a name="types"></a>
## Custom Fields

Next we will be creating our first custom field called title. Look for the
`Add Field` button and click it.

![Schema Form](/images/full-13.png)

In the **Label** field enter `Title`. You will see that the **keyword**
field auto-populates based on what you entered. Leave the **keyword** field
alone for now.

For the `Type` dropdown, choose `Text Field`. As you noticed there are quite a
few options to choose from. You can discover more about these types in
[Schema Field Types](/docs/system/field-types.html).

<a name="validation"></a>
## Validation

Next let's make the `title` required. Click `Add Validation` and by default
`Required` will be selected. Leave that the way it is and in the `Error Message`
field set the value to `Title is Required`.

![Validation Example](/images/full-14.png)

As you can also tell there are a lot of validation options. You can discover
more about these validations in
[Schema Validation Types](/docs/system/validation-types.html).

<a name="formats"></a>
## Formats

In the `List Format` and `Detail Format` choose `Capitalize`.

![Format Example](/images/full-15.png)

List formats filters the output in the model search page and Detail formats
filters the output on update pages in the admin. You can discover more about
these formats in [Schema Format Types](/docs/system/format-types.html).

<a name="indexes"></a>
## Indexes

There are 3 index types which are **Searchable**, **Filterable** and
**Sortable**. For now, set the `Title` to be `Searchable`.

![Index Example](/images/full-16.png)

### Searchable

![Searchable](/images/searchable.png)

Searchable fields will be considered in the search page, when the using the
search field. Searchable fields will use compare partial keywords to filter the
results.

### Filterable

![Filterable](/images/filterable-2.png)

Filterable fields will show up in the above form as well as a link in the search
results.

![Filterable](/images/filterable.png)

Unlike searchable fields, these fields use exact match to filter the results.

### Sortable

![Sortable](/images/sortable.png)

Sortable fields will show up in the search results header. Clicking the sortable
field headers will toggle the sorting direction.

### Continuing

Continue to add the rest of the fields to it kind of matches the table below.

![Article Fields](/images/article-fields.png)

<a name="relations"></a>
## Relations

![Article Relations](/images/article-relations.png)

Next click the `Add Relation` button and set the dropdown to `1:1` and the
input to profile.

This will setup a required `1:1` relationship with profile. `1:1` relationships
are bound to its current schema and will show on the search results and exports.

<a name="suggested"></a>
## Suggested Format

The last step is to set the `Suggested Format` to
`{% raw %}{{article_title}}{% endraw %}`. Suggested formats are used when other
schemas declares a relationship with article.

<a name="create"></a>
## Create an Article

After clicking `Submit`, go to
`http://127.0.0.1:8888/admin/system/model/article/search`. You should see
something similar to the following.

![Article Empty](/images/article-empty.png)

Click `Create Article` and fill out the form.

![Article Form](/images/article-form.png)

The first thing you notice is the Profile field. This field is here because we
declared that article has a `1:1` relationship with profile. The profile field
is an autocomplete field you will get familiar with over time.

After submitting the form you will be redirected back to the article search page
with your new entry. The search results should look similar to the following.

![Article Results](/images/article-results.png)

<a name="conclusion"></a>
## Conclusion

That's all it really takes to build a schema in Cradle. This saves a lot of time
versus getting your backend custom made. The purpose of this is to have your
developers move on to the advance things while we take care of the basics.
