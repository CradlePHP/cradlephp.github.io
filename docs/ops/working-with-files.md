---
layout: documentation
class: page-docs page-docs-admin-working-with-files
title:  "Working With Files - Server Operations - Cradle"
description: ""
menu_title: 3.4. Working With Files
---
# 3.4. Working With Files

## 3.4.1. Upload to Server

## 3.4.2. Upload to CDN

###### Figure 3.3.A. config/services.php
```php
...
's3-main' => [
    'region' => '<AWS REGION>',
    'token' => '<AWS TOKEN>',
    'secret' => '<AWS SECRET>',
    'bucket' => '<S3 BUCKET>',
    'host' => 'https://<AWS REGION>.amazonaws.com',
    'root' => '<ROOT PATH IN BUCKET OR REMOVE THIS>'
]
...
```

### 3.4.2.1. Client Side Uploading to CDN

### 3.4.2.2. Uploading assets to CDN

###### Figure 3.4.2.2.A. Uploading assets to CDN
```bash
$ bin/cradle deploy-s3
$ bin/cradle deploy-s3 --include-yarn
$ bin/cradle deploy-s3 --include-upload
$ bin/cradle deploy-s3 --include-yarn --include-upload
```
