'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _empty;

var _simpleJsonSchemaDeref = require('simple-json-schema-deref');

var _simpleJsonSchemaDeref2 = _interopRequireDefault(_simpleJsonSchemaDeref);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var _array2 = require('./array');

var _array3 = _interopRequireDefault(_array2);

var _boolean2 = require('./boolean');

var _boolean3 = _interopRequireDefault(_boolean2);

var _integer2 = require('./integer');

var _integer3 = _interopRequireDefault(_integer2);

var _null2 = require('./null');

var _null3 = _interopRequireDefault(_null2);

var _number2 = require('./number');

var _number3 = _interopRequireDefault(_number2);

var _object2 = require('./object');

var _object3 = _interopRequireDefault(_object2);

var _string2 = require('./string');

var _string3 = _interopRequireDefault(_string2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates an empty object / placeholder based on a JSON Schema
 *
 * @param {Array<Object>} schema JSON Schema
 * @param Object [global]
 */
function _empty(schema, global) {
  var type = schema.type,
      default_ = schema['default'],
      enum_ = schema['enum'],
      $ref = schema.$ref,
      oneOf = schema.oneOf,
      anyOf = schema.anyOf,
      allOf = schema.allOf;


  if (default_) {
    return default_;
  } else if (enum_) {
    return enum_[0];
  } else if ($ref) {
    var derefed = (0, _simpleJsonSchemaDeref2.default)($ref, global);
    return _empty(derefed, global);
  } else if (type) {
    var kind = void 0;

    if (type instanceof Array) {
      kind = type.sort()[0];
    } else {
      kind = type;
    }

    switch (kind) {
      case 'array':
        return (0, _array3.default)(schema, global);

      case 'boolean':
        return (0, _boolean3.default)(schema, global);

      case 'integer':
        return (0, _integer3.default)(schema, global);

      case 'number':
        return (0, _number3.default)(schema, global);

      case 'null':
        return (0, _null3.default)(schema, global);

      case 'object':
        return (0, _object3.default)(schema, global);

      case 'string':
        return (0, _string3.default)(schema, global);

      default:
        throw new Error('cannot create value of type ' + type);
    }
  } else if (allOf) {
    return _empty((0, _merge2.default)(allOf), global);
  } else if (anyOf) {
    return _empty(anyOf[0], global);
  } else if (oneOf) {
    return _empty(oneOf[0], global);
  } else {
    throw new Error('cannot generate data from schema ' + schema);
  }
}