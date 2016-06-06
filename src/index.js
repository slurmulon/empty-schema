import deref from 'simple-json-schema-deref'

export { _array }   from './array'
export { _boolean } from './boolean'
export { _integer } from './integer'
export { _number }  from './number'
export { _null }    from './null'
export { _object }  from './object'
export { _string }  from './string'
export { merge }    from './merge'

export default function(schema) {
  const denormed = deref(schema)

  return empty(denormed, denormed)
}
