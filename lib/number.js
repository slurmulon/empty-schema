"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _number;

var _integer2 = _interopRequireDefault(require("./integer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _number(schema, global) {
  return (0, _integer2["default"])(schema, global);
}