---
layout: documentation
class: page-docs page-docs-extras-image
title:  "Image - Extras - Cradle"
description: "Images"
---
# Image

- [Usage](#usage)
- [API](#api)
   - [blur](#blur)
   - [brightness](#brightness)
   - [colorize](#colorize)
   - [contrast](#contrast)
   - [crop](#crop)
   - [edgedetect](#edgedetect)
   - [emboss](#emboss)
   - [gaussianBlur](#gaussianBlur)
   - [getDimensions](#getDimensions)
   - [getResource](#getResource)
   - [greyscale](#greyscale)
   - [invert](#invert)
   - [meanRemoval](#meanRemoval)
   - [negative](#negative)
   - [resize](#resize)
   - [rotate](#rotate)
   - [scale](#scale)
   - [setTransparency](#setTransparency)
   - [smooth](#smooth)
   - [save](#save)

<a name="usage"></a>
## Usage

```php
use Cradle\Image\ImageHandler;
$image = ImageHandler::i('/path/to/image.jpg');
```

Once you are done modifying the image you can save the image to a file or simply echo out the image object like below.

```php
header('Content-Type: image/jpg');
echo $image;
```

----

<a name="api"></a>
## API

----

<a name="blur"></a>

### blur

Applies the selective blur filter. Blurs the image

#### Usage

```php
$image->blur();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="brightness"></a>

### brightness

Applies the brightness filter. Changes the brightness of the image.

#### Usage

```php
$image->brightness(*number $level);
```

#### Parameters

- `*number $level` - The level of brightness

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->brightness($level);
```

----

<a name="colorize"></a>

### colorize

Applies the colorize filter. Like greyscale except you can specify the color.

#### Usage

```php
$image->colorize(*number $red, *number $blue, *number $green, number $alpha);
```

#### Parameters

- `*number $red` - The 255 value of red to use
- `*number $blue` - The 255 value of blue to use
- `*number $green` - The 255 value of green to use
- `number $alpha` - The level of alpha transparency

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->colorize($red, $blue, $green);
```

----

<a name="contrast"></a>

### contrast

Applies the contrast filter. Changes the contrast of the image.

#### Usage

```php
$image->contrast(*number $level);
```

#### Parameters

- `*number $level` - The level of contrast

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->contrast($level);
```

----

<a name="crop"></a>

### crop

Crops the image

#### Usage

```php
$image->crop(int|null $width, int|null $height);
```

#### Parameters

- `int|null $width` - The width; If null will use the original width
- `int|null $height` - The height; If null will use the original height

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->crop();
```

----

<a name="edgedetect"></a>

### edgedetect

Applies the edgedetect filter. Uses edge detection to highlight the edges in the image.

#### Usage

```php
$image->edgedetect();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="emboss"></a>

### emboss

Applies the emboss filter. Embosses the image.

#### Usage

```php
$image->emboss();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="gaussianBlur"></a>

### gaussianBlur

Applies the gaussian blur filter. Blurs the image using the Gaussian method.

#### Usage

```php
$image->gaussianBlur();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="getDimensions"></a>

### getDimensions

Returns the size of the image

#### Usage

```php
$image->getDimensions();
```

#### Parameters

Returns `array`

----

<a name="getResource"></a>

### getResource

Returns the resource for custom editing

#### Usage

```php
$image->getResource();
```

#### Parameters

Returns `[RESOURCE]`

----

<a name="greyscale"></a>

### greyscale

Applies the greyscale filter. Converts the image into grayscale.

#### Usage

```php
$image->greyscale();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="invert"></a>

### invert

Inverts the image.

#### Usage

```php
$image->invert(bool $vertical);
```

#### Parameters

- `bool $vertical` - If true invert vertical; if false invert horizontal

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->invert();
```

----

<a name="meanRemoval"></a>

### meanRemoval

Applies the mean removal filter. Uses mean removal to achieve a "sketchy" effect.

#### Usage

```php
$image->meanRemoval();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="negative"></a>

### negative

Applies the greyscale filter. Reverses all colors of the image.

#### Usage

```php
$image->negative();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="resize"></a>

### resize

Resizes the image. This is a version of scale but keeping it's original aspect ratio

#### Usage

```php
$image->resize(int|null $width, int|null $height);
```

#### Parameters

- `int|null $width` - the width; if null will use the original width
- `int|null $height` - the height; if null will use the original height

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->resize();
```

----

<a name="rotate"></a>

### rotate

Rotates the image.

#### Usage

```php
$image->rotate(*int $degree, int $background);
```

#### Parameters

- `*int $degree` - The degree to rotate by
- `int $background` - Background color code

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->rotate(123);
```

----

<a name="scale"></a>

### scale

Scales the image. If width or height is set to null a width or height will be auto determined based on the aspect ratio

#### Usage

```php
$image->scale(int|null $width, int|null $height);
```

#### Parameters

- `int|null $width` - The width; if null will use the original width
- `int|null $height` - The height; if null will use the original height

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->scale();
```

----

<a name="setTransparency"></a>

### setTransparency

Sets the background color to be transparent

#### Usage

```php
$image->setTransparency();
```

#### Parameters

Returns `Cradle\Image\ImageHandler`

----

<a name="smooth"></a>

### smooth

Applies the smooth filter. Makes the image smoother.

#### Usage

```php
$image->smooth(*number $level);
```

#### Parameters

- `*number $level` - The level of smoothness

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->smooth($level);
```

----

<a name="save"></a>

### save

Saves the image data to a file

#### Usage

```php
$image->save(*string $path, string|null $type);
```

#### Parameters

- `*string $path` - The path to save to
- `string|null $type` - The render type

Returns `Cradle\Image\ImageHandler`

#### Example

```php
$image->save('foo');
```
