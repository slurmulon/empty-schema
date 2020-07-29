"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _string;

function _string() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      format = _ref.format;

  if (!format || !defaultFormatValues[format]) {
    return '';
  }

  return defaultFormatValues[format]();
}

var defaultFormatValues = {
  date: function date() {
    return new Date().toISOString().split('T')[0];
  },
  time: function time() {
    return new Date().toISOString().split('T')[1];
  },
  uri: function uri() {
    return 'a:';
  },
  url: function url() {
    return 'http://a.aa';
  },
  email: function email() {
    return 'a@a';
  },
  hostname: function hostname() {
    return 'a';
  },
  ipv4: function ipv4() {
    return '0.0.0.0';
  },
  ipv6: function ipv6() {
    return '0:0:0:0:0:0:0:0';
  },
  regex: function regex() {
    return '';
  },
  uuid: function uuid() {
    return '00000000-0000-0000-0000-000000000000';
  },
  'date-time': function dateTime() {
    return new Date().toISOString();
  },
  'uri-reference': function uriReference() {
    return '';
  },
  'uri-template': function uriTemplate() {
    return '';
  },
  'json-pointer': function jsonPointer() {
    return '';
  },
  'relative-json-pointer': function relativeJsonPointer() {
    return '0';
  }
};