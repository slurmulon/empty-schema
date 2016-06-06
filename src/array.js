import empty from './empty'

export default function _array(schema, global) {
  const {
    items,
    minItems,
    // maxItems // does not matter
  } = schema

  if (items instanceof Array) {
    return items.map(function(item) {
      return empty(item, global)
    })
  } else if (minItems && items) {
    // require at least this amount of items
    return Array.from(new Array(minItems), () => empty(items, global))
  } else {
    // minItems is not given or we don't know item type
    return []
  }
}