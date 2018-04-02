---
layout: documentation
class: page-docs page-docs-system-create-schema
title:  "Creating a Schema - System Documentation - Cradle"
description: "System is the primary feature of Cradle which generically handles schemas, relations and models."
---
# Creating a Schema

## Introduction

For this tutorial we will create an article. An article has a title, detail,
published date, and status. If you have worked with articles in other systems,
you can already visualize how the form should like.

Go to `http://127.0.0.1:8888/admin/system/schema/search`. You should see
something similar to the following.

![Schema Search](/images/full-7.png)

and click the `Create Schema` button on the top right.

![Schema Form](/images/full-12.png)

## Information Fields

In the **singular** field enter `Article`. You will see that the **keyword**
field auto-populates based on what you entered. Leave the **keyword** field
alone for now.

In the **plural** field enter `Articles`, which is obviously the plural form of
`Article`. The **icon** field you can choose which ever icon you like and the
**Detail** field is optional.

## Custom Fields

Next we will be creating our first custom field called title. Look for the
`Add Field` button and click it.

![Schema Form](/images/full-13.png)

In the **Label** field enter `Title`. You will see that the **keyword**
field auto-populates based on what you entered. Leave the **keyword** field
alone for now.

For the `Type` dropdown, choose `Text Field`. As you noticed there are quite a
few options to choose from.

![Schema Form](/images/field-options.png)
