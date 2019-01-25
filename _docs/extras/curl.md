---
layout: documentation
class: page-docs page-docs-extras-curl
title:  "cURL - Extras - Cradle"
description: "Curl is a wrapper for the PHP curl function."
menu_title: cURL
menu:
  usage: Usage
  api: API
---
# cURL

`Cradle\Curl` is a wrapper for the PHP curl function.

<a name="usage"></a>
## Usage

```php
use Cradle\Curl\CurlHandler;
$curl = CurlHandler::i();
$results = $curl
    ->setUrl('http://iamawesome.com')
    ->setPostFields([
        'foo' => 'bar'
    ])
    ->getResponse();
```

### Magical Reference

```php
$curl->setAutoReferer(true) // Same as CURLOPT_AUTOREFERER
```

See http://docs.php.net/manual/da/function.curl-setopt.php for all the options

<a name="api"></a>
## API

##### `getDomDocumentResponse()`

Send the curl off and returns the results parsed as DOMDocument

 * **Returns:** `DOMDOcument`

----

##### `getJsonResponse($assoc = true)`

Send the curl off and returns the results parsed as JSON

 * **Parameters:** `$assoc` — `bool` — To use associative array instead
 * **Returns:** `array`

----

##### `getMeta($key = null)`

Returns the meta of the last call

 * **Parameters:** `$key` — `string|null` — The name of the key in meta
 * **Returns:** `array`

----

##### `getQueryResponse()`

Send the curl off and returns the results parsed as url query

 * **Returns:** `array`

----

##### `getResponse()`

Send the curl off and returns the results

 * **Returns:** `string`

----

##### `getSimpleXmlResponse()`

Send the curl off and returns the results parsed as SimpleXml

 * **Returns:** `SimpleXmlElement`

----

##### `send()`

Send the curl off

 * **Returns:** `CurlHandler`

----

##### `setCustomGet()`

Curl has problems handling custom request types from misconfigured end points or vice versa. When default cURL fails, try a custom GET instead

 * **Returns:** `CurlHandler`

----

##### `setCustomOptions()`

Curl has problems handling custom request types from misconfigured end points or vice versa. When default cURL fails, try a custom OPTIONS instead

 * **Returns:** `CurlHandler`

----

##### `setCustomPost()`

Curl has problems handling custom request types from misconfigured end points or vice versa. When default cURL fails, try a custom POST instead

 * **Returns:** `CurlHandler`

----

##### `setCustomPatch()`

Curl has problems handling custom request types from misconfigured end points or vice versa. When default cURL fails, try a custom PATCH instead

 * **Returns:** `CurlHandler`

----

##### `setCustomPut()`

Curl has problems handling custom request types from misconfigured end points or vice versa. When default cURL fails, try a custom PUT instead

 * **Returns:** `CurlHandler`

----

##### `setCustomDelete()`

Curl has problems handling custom request types from misconfigured end points or vice versa. When default cURL fails, try a custom DELETE instead

 * **Returns:** `CurlHandler`

----

##### `setPostFields($fields, string $type = self::ENCODE_QUERY)`

CURLOPT_POSTFIELDS accepts array and string arguments, this is a special case that __call does not handle

 * **Parameters:**
   * `$fields` — `*string|array` — the post data to send
   * `$type` — `string` — query or json
 * **Returns:** `CurlHandler`

----

##### `setHeaders($key, $value = null)`

Sets request headers

 * **Parameters:**
   * `$key` — `*array|string` — The header name
   * `$value` — `scalar|null` — The header value
 * **Returns:** `CurlHandler`

----

##### `setUrlParameter($key, $value = null)`

Sets url parameter

 * **Parameters:**
   * `$key` — `*array|string` — The parameter name
   * `$value` — `scalar` — The parameter value
 * **Returns:** `CurlHandler`

----

##### `verifyHost($on = true)`

Sets CURLOPT_SSL_VERIFYHOST

 * **Parameters:** `$on` — `bool` — Flag to verify host
 * **Returns:** `CurlHandler`

----

##### `verifyPeer($on = true)`

Sets CURLOPT_SSL_VERIFYPEER

 * **Parameters:** `$on` — `bool` — Flag to verify peer
 * **Returns:** `CurlHandler`
