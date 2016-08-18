# Writing a Package

## `.cradle`

In your `/vendor/` folder create a folder called `my/package`. You can call
this whatever you like, and ideally it should match how you named your
[GitHub](https://github.com) repository for example if your repository is
located at `http://github.com/my/package`, the folder should be `my/package`.
For this example we will be using `my/package`.

At the root of your `my/package` folder, create a file called `.cradle`, open
it up and add the following code.

```
<?php
$cradle->flow(
    'Do something',
    'debug://I am doing something'
);

```
The importance of this file is that when you register this package, your
`.cradle` file will be called. This file is suppose to bootstrap everything
that is needed in order for your package to work. From within your `my/package`
folder you are free to decide on the folder structure because in the `.cradle`
file you will be linking each event handler manually like in the example below.

```
<?php
$cradle->flow(
    'Do something',
    include(__DIR__ . '/i/am/doing/something.php')
);

```

Don't add in the code above yet, for now go to your `/public/index.php` make
sure it looks like the following.


```

return cradle()
    //add routes here
    ->get('/something', 'Do something')

    //...

    //add packages here
    ->register('my/package')

    //start rendering
    ->render();

```

If you go to your browser and open up `http://127.0.0.1/something`, you will
see that your package triggered. From here you can customize your package
however you like then follow instructions to submit it to
[Packagist](https://packagist.org/), if you would like for all to use.
[Composer](https://getcomposer.org/) also has a provision for 
[private repositories](https://getcomposer.org/doc/05-repositories.md) you can
look at as well.
