# cradlephp.github.io
Website

See [https://cradlephp.github.io/](https://cradlephp.github.io/) for more information.

## Documenter Script

```php
<?php

include 'vendor/autoload.php';

use Cradle\Handlebars\HandlebarsHandler;

$source = __DIR__ . '/current/markdown/';
$destination = __DIR__ . '/current/docs/';

$files = scandir($source);
$parsedown = new Parsedown;
$handlebars = new HandlebarsHandler;

//setup handlebars
$handlebars->registerPartial('head', file_get_contents(__DIR__.'/template/_head.html'));
$handlebars->registerPartial('foot', file_get_contents(__DIR__.'/template/_foot.html'));
$handlebars->registerPartial('menu', file_get_contents(__DIR__.'/template/_menu.html'));

foreach($files as $file) {
    if(strpos($file, '.md') === false) {
        continue;
    }

    //first parse the markdown
    $content = file_get_contents($source . $file);
    $content = $parsedown->text($content);

    //next add classes to code
    $content = str_replace(
        '<pre><code>',
        '<pre class="code line-numbers language-php"><code class="marked">',
        $content
    );

    $content = str_replace('</code></pre>', PHP_EOL.'</code></pre>', $content);
    $content = str_replace('<code>', '<code class="language-php">', $content);

    $content = str_replace('<a href="#', '<i class="fa fa-arrow-right"></i><a href="#', $content);
    $content = str_replace('<h2>', '<h2><i class="fa fa-arrow-down"></i> ', $content);

    //<pre><code class="language-warning"> Make sure you know how to Regex.
    //Invalid regular expressions will throw out an error or make the variables
    //results unexpected.</code></pre>
    $content = preg_replace(
        '#<pre><code class="language\-warning">(.+?)</code></pre>#is',
        '<div class="alert alert-warning"><i class="fa '
        .'fa-exclamation-triangle"></i> $1</div>',
        $content
    );

    $content = preg_replace(
        '#<pre><code class="language\-info">(.+?)</code></pre>#is',
        '<div class="alert alert-info"><i class="fa '
        .'fa-info-circle"></i> $1</div>',
        $content
    );

    $content = preg_replace(
        '#<pre><code class="language\-success">(.+?)</code></pre>#is',
        '<div class="alert alert-success"><i class="fa '
        .'fa-check"></i> $1</div>',
        $content
    );

    $content = preg_replace(
        '#<pre><code class="language\-error">(.+?)</code></pre>#is',
        '<div class="alert alert-danger"><i class="fa '
        .'fa-times"></i> $1</div>',
        $content
    );

    //next use handlebars to add to the body
    $template = $handlebars->compile(file_get_contents(__DIR__.'/template/display.html'));

    $content = $template(array('content' => $content));

    //next use handlebars to add to the page
    $template = $handlebars->compile(file_get_contents(__DIR__.'/template/_page.html'));

    $content = $template(array(
        'page' => array(
            'title' =>'CradlePHP'
        ),
        'content' => $content
    ));

    //next save to current/docs
    $file = substr($file, 0, -3) . '.html';
    file_put_contents($destination . $file, $content);
}
```
