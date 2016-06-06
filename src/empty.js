import deref from 'simple-json-schema-deref'
import merge from './merge'

import _array from './array'
import _boolean from './boolean'
import _integer from './integer'
import _null from './null'
import _number from './number'
import _object from './object'
import _string from './string'

/**
 * Generates an empty object / placeholder based on a JSON Schema
 *
 * @param {Array<Object>} schema JSON Schema
 * @param Object [global]
 */
export default function _empty(schema, global) {
  const {
    type, 
    'default': default_,
    'enum':    enum_,
    // $ref, 
    oneOf,
    anyOf,
    allOf
  } = schema

  if (default_) {
    return default_
  } else if (enum_) {
    return enum_[0]
  // } else if ($ref) {
  //   // a ref is passed, deref it and go on from there
  //   var s = deref($ref, global)
  //   return _empty(s, global)
  } else if (type) {
    let kind

    if (type instanceof Array) {
      kind = type.sort()[0]
    } else {
      kind = type
    }

    switch (kind) {
      case 'array':
        return _array(schema, global)

      case 'boolean':
        return _boolean(schema, global)

      case 'integer':
        return _integer(schema, global)

      case 'number':
        return _number(schema, global)

      case 'null':
        return _null(schema, global)

      case 'object':
        return _object(schema, global)

      case 'string':
        return _string(schema, global)

      default:
        throw new Error(`cannot create value of type ${type}`)
    }
  } else if (allOf) {
    return _empty(merge(allOf), global)
  } else if (anyOf) {
    return _empty(anyOf[0], global)
  } else if ( oneOf ) {
    return _empty(oneOf[0], global)
  } else {
    throw new Error(`cannot generate data from schema ${schema}`)
  }
}