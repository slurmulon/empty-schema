import deref from 'simple-json-schema-deref'
import _empty       from './empty'

export { _empty }   from './empty'
export { _array }   from './array'
export { _boolean } from './boolean'
export { _integer } from './integer'
export { _number }  from './number'
export { _null }    from './null'
export { _object }  from './object'
export { _string }  from './string'
export { merge }    from './merge'

export const empty = (schema) => {
  const denormed = deref(schema)

  return _empty(denormed, denormed)
}

export { empty as default }