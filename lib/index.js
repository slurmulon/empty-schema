"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "_empty", {
  enumerable: true,
  get: function get() {
    return _empty2._empty;
  }
});
Object.defineProperty(exports, "array", {
  enumerable: true,
  get: function get() {
    return _array2._array;
  }
});
Object.defineProperty(exports, "_boolean", {
  enumerable: true,
  get: function get() {
    return _boolean2._boolean;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function get() {
    return _integer2._integer;
  }
});
Object.defineProperty(exports, "number", {
  enumerable: true,
  get: function get() {
    return _number2._number;
  }
});
Object.defineProperty(exports, "_null", {
  enumerable: true,
  get: function get() {
    return _null2._null;
  }
});
Object.defineProperty(exports, "object", {
  enumerable: true,
  get: function get() {
    return _object2._object;
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function get() {
    return _string2._string;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _merge.merge;
  }
});
exports["default"] = exports.empty = void 0;

var _simpleJsonSchemaDeref = _interopRequireDefault(require("simple-json-schema-deref"));

var _empty2 = _interopRequireWildcard(require("./empty"));

var _array2 = require("./array");

var _boolean2 = require("./boolean");

var _integer2 = require("./integer");

var _number2 = require("./number");

var _null2 = require("./null");

var _object2 = require("./object");

var _string2 = require("./string");

var _merge = require("./merge");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var empty = function empty(schema) {
  var denormed = (0, _simpleJsonSchemaDeref["default"])(schema);
  return (0, _empty2["default"])(denormed, denormed);
};

exports["default"] = exports.empty = empty;