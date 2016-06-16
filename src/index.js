import deref  from 'simple-json-schema-deref'
import _empty from './empty'

export { _empty }   from './empty'
export { _array   as array   } from './array'
export { _boolean            } from './boolean'
export { _integer as integer } from './integer'
export { _number  as number  } from './number'
export { _null               } from './null'
export { _object  as object  } from './object'
export { _string  as string  }  from './string'
export { merge    as merge   }  from './merge'

export const empty = (schema) => {
  const denormed = deref(schema)

  return _empty(denormed, denormed)
}

export { empty as default }