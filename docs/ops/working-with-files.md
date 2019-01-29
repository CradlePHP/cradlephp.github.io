---
layout: documentation
class: page-docs page-docs-admin-working-with-files
title:  "Working With Files - Server Operations - Cradle"
description: ""
menu_title: 3.4. Working With Files
menu:
  server: 3.4.1. Upload to Server
  cdn: 3.4.2. Upload to CDN
  deploy: 3.4.3. Deploying assets to CDN
---
# 3.4. Working With Files

For security puposes, the system purposely discourages using
[`move_uploaded_file()`](http://php.net/manual/en/function.move-uploaded-file.php).
It's recommended if you want to upload a file to the server to first encode
the file to [base64](https://codepen.io/AshV/pen/pjodjV) and reassign the key to
that base64 value.

```info
INFORMATION: Though you could use move_uploaded_file() in your custom controllers.
```

<a name="server"></a>
## 3.4.1. Upload to Server

To upload a file you should create a form and set the method to `post` like the
following example.

###### Figure 3.4.1.A. Basic Form Post
```html
<form method="post">
...
</form>
```

In Cradle, the following snippet, when wrapped around the form above, can be
used to perform this base64 process.

###### Figure 3.4.1.B. Doon File Field
```html
<table class="table table-striped file-field" data-do="file-field" data-name="custom_file">
    <thead>
        <tr>
            <th>Preview</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr class="file-field-none">
            <td colspan="5">
                <div class="alert alert-info">No File Selected</div>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="5">
                <button class="file-field-upload btn btn-info" type="button">
                    Choose File
                </button>
            </td>
        </tr>
    </tfoot>
</table>
```

The above HTML uses a **Doon** interface to perform its front end logic. To
learn more about these interfaces visit
[4.7. Intro to Doon & Acquire](/docs/develop/intro-to-doon-acquire.html).

When the form is submitted in this manner, `custom_file` as in
`$_POST['custom_file']` will have the base64 version of the file. From here,
you can process that file using PHP's `base64_decode()` using the following logic.

###### Figure 3.4.1.C. Processing a BASE64 in PHP
```php
$path = __DIR__ . '/upload/custom_file.png';
$base64 = substr($_POST['custom_file'], strpos($_POST['custom_file'], ',') + 1);
file_put_contents($path, base64_decode($base64));
```

Cradle has a set of functions that help working with base64 files easier and
can be used like the following examples.

###### Figure 3.4.1.D. System File Class Handler
```php
use Cradle\Module\Utility\File;
...
$data = $_POST['custom_file'];
$path =  __DIR__ . '/upload';

//returns the mime type from base64 file data
$mime = File::getMimeFromData($data); //--> image/png

//returns the extension from base64 file data
$extension = File::getExtensionFromData($data); //--> png

//saves a bsae64 into a file and returns the file path
$link = File::base64ToUpload($data, $path);

//returns the mime type from a file path
$mime = File::getMimeFromLink($link); //--> image/png

//returns the extension from a file path
$extension = File::getExtensionFromLink($link); //--> png
```

```info
INFORMATION: To remain unopinionated, the File class is found in `/module/utility`
in case you need to add or change the way it works.
```

<a name="cdn"></a>
## 3.4.2. Upload to CDN

The system also provides an easy way to interact with a CDN,
[AWS S3](https://aws.amazon.com/s3/) particularly in this case. You first need
to make sure you have **S3** credentials before continuing. Then enter the
credentials in `services.php`

###### Figure 3.4.2.A. config/services.php
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

The following describes what each configure is and how to use it.

 - `region` - this is the s3 region for example `ap-southeast-1`
 - `token` - this is the IAM token that is connected with S3
 - `secret` - this is the IAM token secret that is connected with S3
 - `bucket` - this is the name of the bucket you created on S3
 - `host` - this is the accessible public host of the S3 for example
 `https://s3-ap-southeast-1.amazonaws.com`
 - `root` - if your files need to be uploaded to a particular folder in the
 bucket for example `/sub/folder`

### 3.4.2.1. Client Side Uploading to CDN

To prevent the application server from accepting uploads and processing files
directly, it is recommended to forward that load from the client *(browser)*
side directly to the CDN. This [Client Side Uploading](https://github.com/codeartists/codeartists-com/blob/master/How-to-upload-files-to-Amazon-S3-from-client-side-web-app.md) process remains to be
secure since CDN by nature do not process server side code.

While the actual documentation to get this done is highly advance, fortunately
Cradle has wrappers to make this process easier. In a route, you simply need to
add the following lines of code.

###### Figure 3.4.2.1.A. controller.php
```php
use Cradle\Module\Utility\File;
...
//add CDN
$config = $this->package('global')->service('s3-main');
$data['cdn_config'] = File::getS3Client($config);
```

Then take `$data` and pass it on to your template to process. The template
*(if in Handlebars)* would look like the following.

###### Figure 3.4.2.1.B. template.html
```html
<form
    class="box"
    method="post"
    data-do="cdn-upload"
    data-on="submit"
    data-progress="We are uploading your files. Please do not refresh page."
    data-complete="Upload Complete"
    data-enctype="{% raw %}{{cdn_config.form.enctype}}{% endraw %}"
    data-method="{% raw %}{{cdn_config.form.method}}{% endraw %}"
    data-action="{% raw %}{{cdn_config.form.action}}{% endraw %}"
    data-cdn="{% raw %}{{cdn_config.form.action}}{% endraw %}"
    data-acl="{% raw %}{{cdn_config.inputs.acl}}{% endraw %}"
    data-key="{% raw %}{{cdn_config.inputs.key}}{% endraw %}"
    data-credential="{% raw %}{{cdn_config.inputs.X-Amz-Credential}}{% endraw %}"
    data-algorythm="{% raw %}{{cdn_config.inputs.X-Amz-Algorithm}}{% endraw %}"
    data-date="{% raw %}{{cdn_config.inputs.X-Amz-Date}}{% endraw %}"
    data-policy="{% raw %}{{cdn_config.inputs.Policy}}{% endraw %}"
    data-signature="{% raw %}{{cdn_config.inputs.X-Amz-Signature}}{% endraw %}"
>
    ...
</form>
```

The above HTML again uses a **Doon** interface to perform its front end logic
and you don't really need to worry about what data is actually passed to these.

<a name="deploy"></a>
## 3.4.3. Deploying assets to CDN

Additionally the system can upload your static assets like images, JavaScript,
fonts, CSS, etc. to the CDN "automagically". The following commands can do just
that.

###### Figure 3.4.3.A. Uploading assets to CDN
```bash
$ bin/cradle deploy s3
$ bin/cradle deploy s3 --include-yarn
$ bin/cradle deploy s3 --include-upload
$ bin/cradle deploy s3 --include-yarn --include-upload
```

 - `--include-yarn` - This is to determine if we should also deploy the `node_modules`
 folder. Since that folder is usually big, it could be literally costly to upload it
 every time. Usually you would want to add this flag if this is the first time
 uploading to the bucket.
 - `--include-upload` - This is to determine if we should also upload the
 `/public/upload` folder which is usually has placeholder files if you are in a
 development environment you may not want to upload that all the time.

These commands base where to upload on your `s3-main` configurations in
`config/services.php` and upload assets only found in the `/public` folder. To
make sure the assets are pointed to the right place we need to add an extra
configuration to `settings.php` which looks like the following code.

###### Figure 3.4.3.B. config/settings.php
 ```php
 ...
'cdn' => 'https://<AWS REGION>.amazonaws.com'
...
```
