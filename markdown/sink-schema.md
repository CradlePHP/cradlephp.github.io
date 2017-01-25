# Sink - Schemas

Schema files are used to help generate code, database schemas and index maps.
Investing a few hours in schemas can save days of initial coding because of the
generic logic laid out when generating.

To easier document the schema configuration and how to customize a schema, the
following sample configuration will provide links to descriptions respectively.
Also there are many examples of schemas found in the `/schema/` folder.

<pre>
[
    '<a title="Global Configuration" href=" #global-config">singular</a>' => 'Foo',
    '<a title="Global Configuration" href=" #global-config">plural</a>' => 'Foos',
    '<a title="Global Configuration" href=" #global-config">primary</a>' => 'foo_id',
    '<a title="Global Configuration" href=" #global-config">active</a>' => 'foo_active',
    '<a title="Global Configuration" href=" #global-config">created</a>' => 'foo_created',
    '<a title="Global Configuration" href=" #global-config">updated</a>' => 'foo_updated',
    '<a title="Global Configuration" href=" #global-config">relations</a>' => [
        'profile' => [
            '<a title="Relation Configuration" href=" #relation-config">primary</a>' => 'profile_id',
            '<a title="Relation Configuration" href=" #relation-config">many</a>' => false
        ]
    ],
    '<a title="Global Configuration" href=" #global-config">fields</a>' => [
        'foo_bar' => [
            '<a title="Field Configuration" href=" #field-config">sql</a>' => [
                '<a title="SQL Configuration" href=" #sql-config">type</a>' => 'varchar',
                '<a title="SQL Configuration" href=" #sql-config">length</a>' => 255,
                '<a title="SQL Configuration" href=" #sql-config">attributes</a>' => 'unsigned',
                '<a title="SQL Configuration" href=" #sql-config">default</a>' => 'Foobar',
                '<a title="SQL Configuration" href=" #sql-config">comment</a>' => 'foobar',
                '<a title="SQL Configuration" href=" #sql-config">required</a>' => true,
                '<a title="SQL Configuration" href=" #sql-config">index</a>' => true,
                '<a title="SQL Configuration" href=" #sql-config">unique</a>' => true,
                '<a title="SQL Configuration" href=" #sql-config">primary</a>' => true,
                '<a title="SQL Configuration" href=" #sql-config">encoding</a>' => <a href=" #encoding-options">false</a>,
                '<a title="SQL Configuration" href=" #sql-config">searchable</a>' => true,
                '<a title="SQL Configuration" href=" #sql-config">sortable</a>' => true,
                '<a title="SQL Configuration" href=" #sql-config">filterable</a>' => true,
            ],
            'elastic' => [
                'type' => 'string',
                'fields' => [
                    'keyword' => [
                        'type' => 'keyword'
                    ]
                ]
            ],
            '<a href=" #field-config">form</a>' => [
                '<a title="Form Configuration" href=" #form-config">label</a>' => 'Text Example',
                '<a title="Form Configuration" href=" #form-config">type</a>' => <a href=" #form-options">false</a>,
                '<a title="Form Configuration" href=" #form-config">default</a>' => 'foobar',
                '<a title="Form Configuration" href=" #form-config">attributes</a>' => [
                    'placeholder' => 'Sample Text',
                ],
                '<a title="Form Configuration" href=" #form-config">options</a>' => [
                    '' => 'Choose one',
                    'choice1' => 'Choice 1',
                    'choice2' => 'Choice 2',
                ],
                '<a title="Form Configuration" href=" #form-config">scripts</a>' => []
            ],
            '<a title="Field Configuration" href=" #field-config">list</a>' => [
                '<a title="List Configuration" href=" #list-config">label</a>' => 'Text',
                '<a title="List Configuration" href=" #list-config">format</a>' => '<a href=" #list-options">length</a>',
                '<a title="List Configuration" href=" #list-config">parameters</a>' => 255
            ],
            '<a title="Field Configuration" href=" #field-config">detail</a>' => [
                '<a title="List Configuration" href=" #list-config">label</a>' => 'Text',
                '<a title="List Configuration" href=" #list-config">format</a>' => '<a href=" #list-options">date</a>',
                '<a title="List Configuration" href=" #list-config">parameters</a>' => 'Y-m-d H:i:s'
            ],
            '<a title="Field Configuration" href=" #field-config">validation</a>' => [
                [
                    'method' => '<a href=" #validation-options">required</a>',
                    'message' => 'Is required',
                    'parameters' => []
                ]
            ],
            '<a title="Field Configuration" href=" #field-config">test</a>' => [
                'pass' => 'foo',
                'fail' => 'bar'
            ]
        ]
    ]
</pre>

<a name="global-config"></a>
### Global Configuration

| Name        |          | Description                                            |
|---------------------------------------------------------------------------------|
| `singular`  | Required | The singular name used on form and search titles       |
| `plural`    | Required | The plural name used on form and search titles         |
| `primary`   | Required | The name of the primary key                            |
| `active`    | Optional | The name of the active key                             |
| `created`   | Optional | The name of the column for the created timestamp       |
| `updated`   | Optional | The name of the column for the updated timestamp       |
| `relations` | Optional | A list of table relations. See (Relations)[#relations] |
| `fields`    | Optional | A list of column fields. See (Fields)[#fields]         |
| `fixtures`  | Optional | A dummy dataset used to populate or test against.      |

<a name="relation-config"></a>
### [Global](#global-config) > Relations Configuration

| Name      |          | Description                                                         |
|--------------------------------------------------------------------------------------------|
| `primary` | Required | The primary key name of the relating table                          |
| `many`    | Required | Set false if this is a one-to-one relationship, true if one-to-many |

<a name="field-config"></a>
### [Global](#global-config) > Field Configuration

| Name         |          | Description                                                                        |
|--------------------------------------------------------------------------------------------------------------|
| `sql`        | Optional | A set of SQL configurations. See (SQL Configuration)[#sql-config]                  |
| `elastic`    | Optional | A set of ElasticSearch configurations. See (ElasticSearch Configuration)[#elastic] |
| `form`       | Optional | A set of form configurations. See (Form Configuration)[#form-config]               |
| `list`       | Optional | A set of list configurations. See (List Configuration)[#list-config]               |
| `detail`     | Optional | A set of detail configurations. See (List Configuration)[#list-config]             |
| `validation` | Optional | A list of validations. See (Validations)[#validation-options]                      |
| `test`       | Optional | A `pass` and a `fail` example used on test suites generators                       |

<a name="sql-config"></a>
### [Global](#global-config) [Field](#field-config) > SQL Configuration

| Name         |          | Description                                                                      |
|------------------------------------------------------------------------------------------------------------|
| `type`       | Required | SQL data type                                                                    |
| `length`     | Optional | Byte length to allocate                                                          |
| `attributes` | Optional | extra SQL attributes                                                             |
| `default`    | Optional | A default value                                                                  |
| `comment`    | Optional | SQL Comment                                                                      |
| `required`   | Optional | `true` if this is a required field                                               |
| `index`      | Optional | `true` if this should be indexed                                                 |
| `unique`     | Optional | `true` if this should be uniquely indexed                                        |
| `primary`    | Optional | `true` if this should be primarily indexed                                       |
| `encoding`   | Optional | Encoding rule to apply before writing. See (Encoding Options)[#encoding-options] |
| `searchable` | Optional | `true` if this column is searchable                                              |
| `filterable` | Optional | `true` if this column is filterable                                              |
| `sortable`   | Optional | `true` if this column is sortable                                                |

<a name="encoding-options"></a>
### [Global](#global-config) [Field](#field-config) > [SQL](#sql-config) > Encoding Options
 - `md5` - Encode the value to MD5 format (insert/update)
 - `sha1` - Encode the value to SHA1 format (insert/update)
 - `uuid` - Generate a UUID (insert/update)
 - `token` - Generate a UUID (insert only)
 - `datetime` - Encode in SQL DateTime format (insert/update)
 - `date` - Encode in SQL Date format (insert/update)
 - `time` - Encode in SQL Time format (insert/update)
 - `created` - Generate an SQL Timestamp (insert only)
 - `updated` - Generate an SQL Timestamp (insert/update)
 - `json` - Encode in JSON format (insert/update)
 - `bool` - Changes boolean values to 1 or 0
 - `inline` - If this is provided, must provide `inline-code` (with provided PHP code)

<a name="form-config"></a>
### [Global](#global-config) [Field](#field-config) > Form Configuration

| Name         |          | Description                                            |
|----------------------------------------------------------------------------------|
| `label`      | Required | SQL data type                                          |
| `type`       | Required | type of field. See [Form Type Options](#form-options)  |
| `attributes` | Optional | HTML attributes applied to the field tag               |
| `default`    | Optional | A default value                                        |
| `options`    | Optional | Options used if type is radios, checkboxes or select   |
| `scripts`    | Optional | A list of scripts to append after the form             |

<a name="form-options"></a>
### [Global](#global-config) [Field](#field-config) [Form](#form-config) > Type Options
 - `input` - `<input>` tag
 - `select` - `<select>` tag
 - `textarea` - `<textarea>` tag
 - `radio` - `<input type="radio">` set
 - `radios` - List of radio fields given `options`
 - `checkbox` - `<input type="checkbox">` set
 - `checkboxes` - List of checkbox fields given `options`
 - `button` - `<button>` tag
 - `image-field` - Single image field uploader JS widget
 - `images-field` - Multiple image field uploader JS widget
 - `tag-field` - JSON array JS widget
 - `meta-field` - JSON object JS widget
 - `inline` - If this is provided, must provide `inline-code` (with provided HTML code)

<a name="list-config"></a>
### [Global](#global-config) [Field](#field-config) > List Configuration

| Name         |          | Description                                            |
|----------------------------------------------------------------------------------|
| `label`      | Required | SQL data type                                          |
| `format`     | Required | display formats. See [Format Options](#format-options) |
| `parameters` | Optional | argument/s depending on format                         |

<a name="format-options"></a>
### [Global](#global-config) [Field](#field-config) [List](#list-config) > Format Options
 - `date` - date format (parameters: `Y-m-d` for example)
 - `length` - limit to a specific character length (parameters: `25` for example)
 - `words` - limit to a specific word length (parameters: `5` for example)
 - `link` - wrap a link tag around value (parameters: `['href'=>'/product/{product_id}']` for example)
 - `image` - wrap an image tag around value (parameters: `[200,200]` for example)
 - `email` - wrap a link tag (with mailto:) around value
 - `phone` - wrap a link tag (with tel:) around value
 - `capital` - `ucwords()` the value
 - `implode` - `implodes()` the value (parameters: `,` for example)
 - `upper` - `strtoupper()` the value
 - `lower` - `strtolower()` the value
 - `inline` - If this is provided, must provide `inline-code` (with provided PHP code)

<a name="validation-options"></a>
### [Global](#global-config) [Field](#field-config) > Validation Options
 - `required` - Must provide a value (insert only)
 - `empty` - If provided, cannot be empty
 - `one` - Must be one of given options (parameters: `['one', 'two']` for example)
 - `number` - must be a number
 - `gt` - value must be greater than (parameters: `10` for example)
 - `lt` - value must be less than (parameters: `255` for example)
 - `char_eq` - character length must be equal (parameters: `10` for example)
 - `char_gt` - character length must be greater than (parameters: `10` for example)
 - `char_lt` - character length must be less than (parameters: `255` for example)
 - `word_eq` - word length must be equal (parameters: `10` for example)
 - `word_gt` - word length must be greater than (parameters: `10` for example)
 - `word_lt` - word length must be less than (parameters: `255` for example)
 - `regexp` - value must match the given regular expression (parameters: `#foobar#` for example)
 - `unique` - value must be unique (against what's in the database)
 - `inline` - If this is provided, must provide `inline-code` (with provided PHP code)
