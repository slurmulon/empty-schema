/**
 * Merges an array of schemas into a single schema
 *
 * @param {Array<Object>} schemas JSON Schemas to merge
 * @param Object schema
 */
export default function merge(schemas) {
    return schemas
      .reduce((prev, next) => {
        return Object.assign(prev, next)
      }, {})
  }
