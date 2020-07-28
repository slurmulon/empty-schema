'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _array;

var _empty = require('./empty');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _array(schema, global) {
  var items = schema.items,
      minItems = schema.minItems;


  if (items instanceof Array) {
    return items.map(function (item) {
      return (0, _empty2.default)(item, global);
    });
  } else if (minItems && items) {
    return Array.from(new Array(minItems), function () {
      return (0, _empty2.default)(items, global);
    });
  } else {
    return [];
  }
}