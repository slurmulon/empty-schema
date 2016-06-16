'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.empty = exports.merge = exports.string = exports.object = exports._null = exports.number = exports.integer = exports._boolean = exports.array = exports._empty = undefined;

var _empty2 = require('./empty');

Object.defineProperty(exports, '_empty', {
  enumerable: true,
  get: function get() {
    return _empty2._empty;
  }
});

var _array2 = require('./array');

Object.defineProperty(exports, 'array', {
  enumerable: true,
  get: function get() {
    return _array2._array;
  }
});

var _boolean2 = require('./boolean');

Object.defineProperty(exports, '_boolean', {
  enumerable: true,
  get: function get() {
    return _boolean2._boolean;
  }
});

var _integer2 = require('./integer');

Object.defineProperty(exports, 'integer', {
  enumerable: true,
  get: function get() {
    return _integer2._integer;
  }
});

var _number2 = require('./number');

Object.defineProperty(exports, 'number', {
  enumerable: true,
  get: function get() {
    return _number2._number;
  }
});

var _null2 = require('./null');

Object.defineProperty(exports, '_null', {
  enumerable: true,
  get: function get() {
    return _null2._null;
  }
});

var _object2 = require('./object');

Object.defineProperty(exports, 'object', {
  enumerable: true,
  get: function get() {
    return _object2._object;
  }
});

var _string2 = require('./string');

Object.defineProperty(exports, 'string', {
  enumerable: true,
  get: function get() {
    return _string2._string;
  }
});

var _merge = require('./merge');

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _merge.merge;
  }
});

var _simpleJsonSchemaDeref = require('simple-json-schema-deref');

var _simpleJsonSchemaDeref2 = _interopRequireDefault(_simpleJsonSchemaDeref);

var _empty3 = _interopRequireDefault(_empty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = exports.empty = function empty(schema) {
  var denormed = (0, _simpleJsonSchemaDeref2.default)(schema);

  return (0, _empty3.default)(denormed, denormed);
};

exports.default = empty;