---
layout: documentation
class: page-docs page-docs-extras-timezone
title:  "Timezone - Extras - Cradle"
description: "Internationalization"
---
# Timezone

- [Usage](#usage)
- [API](#api)
   - [convertTo](#convertTo)
   - [getGMT](#getGMT)
   - [getGMTDates](#getGMTDates)
   - [getOffset](#getOffset)
   - [getOffsetDates](#getOffsetDates)
   - [getTime](#getTime)
   - [getUTC](#getUTC)
   - [getUTCDates](#getUTCDates)
   - [toRelative](#toRelative)
   - [setTime](#setTime)
   - [validation](#validation)
- [Contributing](#contributing)

----

<a name="install"></a>
## usage

```
use Cradle\i18n\Timezone;
$timezone = new Timezone(time(), 'GMT');
```

----

----

<a name="api"></a>
## API

----

<a name="convertTo"></a>

### convertTo

Convert current time set here to another time zone

#### Usage

```
$timezone->convertTo(*string $zone, string|null $format);
```

#### Parameters

- `*string $zone` - valid UTC, GMT, PHP Location or TZ Abbreviation
- `string|null $format` - format

Returns `string|int`

#### Example

```
$timezone->convertTo('Asia/Manila');
```

----

<a name="getGMT"></a>

### getGMT

Returns the GMT Format

#### Usage

```
$timezone->getGMT(string $prefix);
```

#### Parameters

- `string $prefix` - Prefix to add before the returned value

Returns `string`

#### Example

```
$timezone->getGMT();
```

----

<a name="getGMTDates"></a>

### getGMTDates

Returns a list of GMT formats and dates in a 24 hour period

#### Usage

```
$timezone->getGMTDates(*string $format, int $interval, string|null $prefix);
```

#### Parameters

- `*string $format` - The format of each date to display
- `int $interval` - The frequency of rows
- `string|null $prefix` - The prefix to add before each date display

Returns `array`

#### Example

```
$timezone->getGMTDates('F d, Y');
```

----

<a name="getOffset"></a>

### getOffset

Returns the current offset of this timezone

#### Usage

```
$timezone->getOffset();
```

#### Parameters

Returns `int`

----

<a name="getOffsetDates"></a>

### getOffsetDates

Returns a list of offsets and dates in a 24 hour period

#### Usage

```
$timezone->getOffsetDates(*string $format, int $interval);
```

#### Parameters

- `*string $format` - The format of each date to display
- `int $interval` - The frequency of rows

Returns `array`

#### Example

```
$timezone->getOffsetDates('F d, Y');
```

----

<a name="getTime"></a>

### getTime

Returns the time or date

#### Usage

```
$timezone->getTime(string|null $format);
```

#### Parameters

- `string|null $format` - Time format

Returns `string|int`

#### Example

```
$timezone->getTime();
```

----

<a name="getUTC"></a>

### getUTC

Returns the UTC Format

#### Usage

```
$timezone->getUTC(string|null $prefix);
```

#### Parameters

- `string|null $prefix` - The prefix to add before the returned value

Returns `string`

#### Example

```
$timezone->getUTC();
```

----

<a name="getUTCDates"></a>

### getUTCDates

Returns a list of UTC formats and dates in a 24 hour period

#### Usage

```
$timezone->getUTCDates(*string $format, int $interval, string|null $prefix);
```

#### Parameters

- `*string $format` - The format of each date to display
- `int $interval` - The frequency of rows
- `string|null $prefix` - The prefix to add before each date display

Returns `array`

#### Example

```
$timezone->getUTCDates('F d, Y');
```

----

<a name="toRelative"></a>

### toRelative

Returns the relative distance $time > this->time = ago

#### Usage

```
$timezone->toRelative(int|string $time, int $level, string $default);
```

#### Parameters

- `int|string $time` - The time to make relative
- `int $level` - The granular level
- `string $default` - The default date format

Returns `Cradle\i18n\Timezone`

#### Example

```
$timezone->toRelative();
```

----

<a name="setTime"></a>

### setTime

Sets a new time

#### Usage

```
$timezone->setTime(*int|string $time);
```

#### Parameters

- `*int|string $time` - The time value

Returns `Cradle\i18n\Timezone`

#### Example

```
$timezone->setTime(time() + 123);
```

----

<a name="validation"></a>

### validation

Returns timezone's validation methods

#### Usage

```
$timezone->validation();
```

#### Parameters

Returns `Cradle\i18n\Timezone`

----
