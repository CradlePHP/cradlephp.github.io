---
layout: documentation
class: page-docs page-docs-admin-working-with-relations
title:  "Working with Relations - Working the Admin - Cradle"
description: "We call a group of schemas related to each other a system."
menu_title: 2.3. Working with Relations
menu:
  comment_schema: 2.3.1. Comment Schema
  relate_comments: 2.3.2. Relating Comments
  relation_actions: 2.3.3. Relation Actions
  recursive: 2.3.4. Relating to Itself
---
# 2.3. Working with Relations

In the last chapter [2.2. Populating Models](/docs/admin/populating-models.html),
we started seeing the usefulness of creating schemas and swiftness of managing
**Articles**. In this chapter we will be creating another schema called
**Comment**, relating it to our existing **Article** and understanding how the
admin interprets different kinds of relationships. We call a group of schemas
related to each other a system.

<a name="comment_schema"></a>
## 2.3.1. Comment Schema

Let's go back to `http://127.0.0.1:8888/admin/system/schema/search`.
You should populate the **Comment** schema information like the image below.


###### Figure 2.3.1.A. Comment Schema Information

{:.image-container}
![Comment Schema Information](/docs/admin/assets/2.3.1.A.png)

Again I provided a cheat sheet to help populate the fields of the **Comment**
faster. If any of this doesn't sound familiar please visit
[2.1. Creating a Schema](/docs/admin/create-schema.html) to get back up to speed.

###### Figure 2.3.1.B. Comment Fields *(click me)*
[![Comment Fields](/docs/admin/assets/2.3.1.B.png)](/docs/admin/assets/2.3.1.B.png)

If you entered the fields correctly your field table should look exactly like the
image below.

###### Figure 2.3.1.C. Comment Field Table
![Comment Field Table](/docs/admin/assets/2.3.1.C.png)

###### Figure 2.3.1.D. Comment Relations and Suggestions
![Comment Relations and Suggestions](/docs/admin/assets/2.3.1.D.png)

<a name="relate_comments"></a>
## 2.3.2. Relating Comments

###### Figure 2.3.2.A. Article Can Have Many Comments
![Article Can Have Many Comments](/docs/admin/assets/2.3.2.A.png)

###### Figure 2.3.2.B. Schema Summary
![Schema Summary](/docs/admin/assets/2.3.2.B.png)

<a name="relation_actions"></a>
## 2.3.3. Relation Actions

###### Figure 2.3.3.A. Relation Actions
![Relation Actions](/docs/admin/assets/2.3.3.A.png)

###### Figure 2.3.3.B. Article Comment Search
![Article Comment Search](/docs/admin/assets/2.3.3.B.png)

###### Figure 2.3.3.C. Adding a Comment
![Adding a Comment](/docs/admin/assets/2.3.3.C.png)

###### Figure 2.3.3.D. Unlink a Comment
![Unlink a Comment](/docs/admin/assets/2.3.3.D.png)

###### Figure 2.3.3.E. Link a Comment
![Link a Comment](/docs/admin/assets/2.3.3.E.png)

###### Figure 2.3.3.F. Why Suggestions Matter
![Why Suggestions Matter](/docs/admin/assets/2.3.3.F.png)

<a name="recursive"></a>
## 2.3.4. Relating to Itself

###### Figure 2.3.4.A. Comment Can Have Many Comments
![Comment Can Have Many Comments](/docs/admin/assets/2.3.4.A.png)

###### Figure 2.3.4.B. Schema Summary
![Schema Summary](/docs/admin/assets/2.3.4.B.png)

###### Figure 2.3.4.C. Comment Comment Search
![Comment Comment Search](/docs/admin/assets/2.3.4.C.png)

###### Figure 2.3.4.D. Final Result
![Final Result](/docs/admin/assets/2.3.4.D.png)

<a name="conclusion"></a>
## 2.3.5. Conclusion
