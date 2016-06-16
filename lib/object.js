'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _object;

var _empty = require('./empty');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _object(schema, global) {
  if (!schema.required) {
    return {};
  } else {
    return schema.required.reduce(function (prev, next) {
      var prop = schema.properties[next];

      if (!prop) {
        throw new Error('property `' + next + '` not defined on object');
      }

      prev[next] = (0, _empty2.default)(prop, global);

      return prev;
    }, {});
  }
}