'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _number;

var _integer2 = require('./integer');

var _integer3 = _interopRequireDefault(_integer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _number(schema, global) {
  return (0, _integer3.default)(schema, global);
}