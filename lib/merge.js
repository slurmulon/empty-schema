"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
/**
 * Merges an array of schemas into a single schema
 *
 * @param {Array<Object>} schemas JSON Schemas to merge
 * @param Object schema
 */
function merge(schemas) {
  return schemas.reduce(function (prev, next) {
    return Object.assign(prev, next);
  }, {});
}

exports.default = merge;