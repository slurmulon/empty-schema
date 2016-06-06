import deref from 'deref'
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

export const empty = (schema, refs) => {
  const denormed = deref(schema, refs)

  return _empty(denormed, denormed)
}

export { empty as default }