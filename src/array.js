import empty from './empty'

export default function _array(schema, global) {
  const {
    items,
    minItems
  } = schema

  if (items instanceof Array) {
    return items.map(function(item) {
      return empty(item, global)
    })
  } else if (minItems && items) {
    return Array.from(new Array(minItems), () => empty(items, global))
  } else {
    return []
  }
}