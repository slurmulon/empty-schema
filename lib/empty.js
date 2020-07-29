"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _empty;

var _simpleJsonSchemaDeref = _interopRequireDefault(require("simple-json-schema-deref"));

var _merge = _interopRequireDefault(require("./merge"));

var _array2 = _interopRequireDefault(require("./array"));

var _boolean2 = _interopRequireDefault(require("./boolean"));

var _integer2 = _interopRequireDefault(require("./integer"));

var _null2 = _interopRequireDefault(require("./null"));

var _number2 = _interopRequireDefault(require("./number"));

var _object2 = _interopRequireDefault(require("./object"));

var _string2 = _interopRequireDefault(require("./string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    var derefed = (0, _simpleJsonSchemaDeref["default"])($ref, global);
    return _empty(derefed, global);
  } else if (type) {
    var kind;

    if (type instanceof Array) {
      kind = type.sort()[0];
    } else {
      kind = type;
    }

    switch (kind) {
      case 'array':
        return (0, _array2["default"])(schema, global);

      case 'boolean':
        return (0, _boolean2["default"])(schema, global);

      case 'integer':
        return (0, _integer2["default"])(schema, global);

      case 'number':
        return (0, _number2["default"])(schema, global);

      case 'null':
        return (0, _null2["default"])(schema, global);

      case 'object':
        return (0, _object2["default"])(schema, global);

      case 'string':
        return (0, _string2["default"])(schema, global);

      default:
        throw new Error("cannot create value of type ".concat(type));
    }
  } else if (allOf) {
    return _empty((0, _merge["default"])(allOf), global);
  } else if (anyOf) {
    return _empty(anyOf[0], global);
  } else if (oneOf) {
    return _empty(oneOf[0], global);
  } else {
    throw new Error("cannot generate data from schema ".concat(schema));
  }
}