import empty from './empty'

export default function _object(schema, global) {
  if (!schema.required) {
    return {}
  } else {
    return schema.required
      .reduce((prev, next) => {
        const prop = schema.properties[next]

        if (!prop) {
          throw new Error(`property \`${next}\` not defined on object`)
        }

        prev[next] = empty(prop, global)

        return prev
      }, {})
  }
}