# empty-schema

> :crystal_ball: Generate empty placeholder data from JSON Schemas

Generating random data is useful for testing (try [hazy](https://www.npmjs.com/package/hazy) if you have this need), but developers often need empty placeholder data to work with, particularly when working with web forms.

The data `empty-schema` generates conforms to the following:
  - Data is generated deterministically. If the schema is the same, the date will be the same.
  - Data is as simple as possible.
  - Data conforms to the *form* specified in the schema.  It will, however, sometimes fail to be valid according to the schema. The reason for this is simple: you cannot generate all values automatically (see the [rules](#rules) section for more info on this).

## Installation

```sh
npm install --save empty-schema
```

## Usage

```js
import {empty} from 'empty-schema'

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'integer',
      minimum: 12,
      multipleOf: 5
    },
    bar: {
      type: 'array',
      items: { type: 'integer' },
      minItems: 3
    },
    baz: {
      type: 'string',
      minLength: 5
    }
  },
  required: [ 'foo', 'bar', 'baz' ]
}

console.log(empty(schema))

// {
//   foo: 15,
//   bar: [ 0, 0, 0 ],
//   baz: ''
// }
```

## Rules

  - **string**: because it impossible to guess what the string
    content should be, even when patterns and length limits are given,
    a string schema always results in the empty string: `''`.

  - **integer**: `empty-schema` tries to satisfy the `minimum`, `maximum`
    and `multipleOf` constraints whenever possible wth the additional property
    that, when it is possible, `0` is returned.

  - **number**: just follows the `integer` schema.
  - **object**: tries to create a minimal object with as few keys as possible.
    Only keys that are in the `required` array are generated.

    Object size is ignored completely, for the same reason that the
    strings are empty: we cannot guess the keys.

  - **array**: when the `item` type is given, and `minItems` is given,
    the shortest array that matches this is generated.  It also works
    when `items` is a tuple.  `maxItems` is ignored.  Whenever possible,
    the empty array is returned.

  - **boolean**: always results in `false`.
  - **null**: always results in `null`.

  - **oneOf**, **anyOf**: selects one of the accepted types and goes from there.
  - **allOf**: `empty-schema` merges all schemas and works from that schema
    to generate a value.
  - **enum**: selects the first possible value.
  - `$ref`: just works!

Whenever specified, `empty-schema` uses the `default` value (even if it
does not match the schema).

## License

This code is licensed under the ISC License