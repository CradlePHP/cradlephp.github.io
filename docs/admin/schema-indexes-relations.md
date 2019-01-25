---
layout: documentation
class: page-docs page-docs-system-indexes-relations
title:  "Reference: Indexes and Relations - System Documentation - Cradle"
description: "Though Cradle is powerful tool, there are limitations when it comes to indexes and relationships. This guide is to help you learn about these limitations."
menu_title: Indexes and Relationships
menu:
  searchable: 2.12.1. Searchable
  filterable: 2.12.2. Filterable
  sortable: 2.12.3. Sortable
  relationships: 2.12.4. Relationships
---

# 2.12. Reference: Schema Indexes and Relationships

Though Cradle is powerful tool, there are limitations when it comes to indexes
and relationships. This guide is to help you learn about these limitations.
First off, the diagram below shows how it will look like if you enable various
indexes and relationships in your schema fields.

![Indexes](/images/indexes.png)

## 2.12.1. Searchable

Though you can technically declare every field searchable. It's probably not a
good idea to do that. This is because indexes create a new table in your SQL
database. Too many will substantially increase the size of your database.

The second reason is the search results may feel random. Consider that if you
actually do make every field searchable and you do a search for `1` this will
look for partial matches in every column, so most likely every row would return.

It's good practice to make 1-3 fields searchable, which is usually the title.
slug, detail and/or description fields.

## 2.12.2. Filterable

Unlike searchable fields, filterable fields only compare the exact match. Though
you can technically declare every field filterable. You should only consider
fields to be filterable if many could have the same value.

For example, it probably wouldn't make sense for the title to be filterable
because most titles are different from each other. It would only yield one
result.

Filter fields match the field type of the field that is filterable. For example,
a select field would yield the same select field in the filters

For dates and numbers, since these can be exact values we automatically create
filter ranges.

## 2.12.3. Sortable

Some fields may not make sense to be sortable either. For example it probably
wouldn't make sense for a select to be sortable as it implies that most values
will be the same *(filterable would be more appropriate)*.

## 2.12.4. Relationships

The above diagram shows how a `1:1` relationship would show like. A `1:1`
relationship implies that each row must be linked to that relationship in order
to show in the search results. When changing relations after the fact this might
be why some rows could be missing. This is the reason why we created a `1:0`
relationship.

A `1:0` relationship is like a `1:1` relationship, but it is optional. Since it
is optional it won't be displayed in the search results and not in the filter
form because it implies a `LEFT JOIN` operation. A `1:0` relationship will only
show in the create and update form.

```info
By default, in cradle we only do `INNER JOIN` SQL operations.
```

A `1:N` and `N:N` are very similar to each other. They have almost the same
functionality with the exception that both schemas that are related to each
other have the many action link per row.

```info
It is possible to do a N:N relationship with the originating schema as in post:post
```

The diagram below shows what features are enabled by declaring a `1:N` relationship.

![Relations](/images/relationships.png)
