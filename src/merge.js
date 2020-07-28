/**
 * Merges an array of schemas into a single schema
 *
 * @param {Array<Object>} schemas JSON Schemas to merge
 * @param Object schema
 */

function merge(schemas) {
    return schemas.reduce(
        (prev, next) => Object.assign(prev, next),
        {}
    );
}

export default merge
