---
layout: documentation
class: page-docs page-docs-framework-role
title:  "Roles - Framework - Cradle"
description: "Deals with site wide roles and permissions"
---

### Routes

 - `GET /admin/role/create`
 - `GET /admin/role/detail/:role_id`
 - `GET /admin/role/remove/:role_id`
 - `GET /admin/role/restore/:role_id`
 - `GET /admin/role/search`
 - `GET /admin/role/update/:role_id`
 - `POST /admin/role/create`
 - `POST /admin/role/update/:role_id`
 - `GET /admin/access/search`
 - `GET /admin/access/create`
 - `POST /admin/access/create`
 - `GET /admin/access/:role_id/:role_auth_id/remove`

### Events

 - `role-create`
 - `access-search`
 - `access-link`
 - `access-unlink`
 - `role-detail`
 - `role-remove`
 - `role-restore`
 - `role-search`
 - `role-update`
 - `auth-detail`
