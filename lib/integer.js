"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minmul = minmul;
exports.maxmul = maxmul;
exports._integer = _integer;
// create smallest number that is greater than minimum and a mulitple of multipleOf
function minmul(minimum, multipleOf, exclusive) {
  if (minimum < 0 || !exclusive && minimum <= 0) {
    return 0;
  }

  var min = exclusive ? minimum + 1 : minimum;
  var rest = min % multipleOf;

  if (rest === 0) {
    return min;
  }

  var sign = multipleOf / Math.abs(multipleOf);
  var quot = (min - rest) / multipleOf;

  return (quot + sign) * multipleOf;
}

// create smallest number that is greater than minimum and a mulitple of multipleOf
function maxmul(maximum, multipleOf, exclusive) {
  var res = -minmul(-maximum, multipleOf, exclusive);

  return res;
}

function _integer(schema) {
  var multipleOf = schema.multipleOf,
      minimum = schema.minimum,
      maximum = schema.maximum,
      exclusiveMinimum = schema.exclusiveMinimum,
      exclusiveMaximum = schema.exclusiveMaximum;


  var mo = !Object.is(multipleOf, undefined);
  var mi = !Object.is(minimum, undefined);
  var ma = !Object.is(maximum, undefined);

  if (mo && mi && ma || !mo && mi && ma) {
    // minimum and maximum
    if ((minimum < 0 || !exclusiveMinimum && minimum <= 0) && (maximum > 0 || !exclusiveMaximum && maximum >= 0)) {
      return 0;
    } else {
      return exclusiveMinimum ? minimum + 1 : minimum;
    }
  } else if (mo && !mi && ma) {
    // multipleOf and maximum
    return maxmul(maximum, multipleOf, exclusiveMaximum);
  } else if (mo && mi && !ma) {
    // multipleOf and minimum
    return minmul(minimum, multipleOf, exclusiveMinimum);
  } else if (mo && !mi && !ma) {
    // only multipleOf
    return 0;
  } else if (!mo && !mi && ma) {
    // only maximum
    if (exclusiveMaximum) {
      return maximum > 0 ? 0 : maximum - 1;
    } else {
      return maximum >= 0 ? 0 : maximum;
    }
  } else if (!mo && mi && !ma) {
    // only minimum
    if (exclusiveMinimum) {
      return minimum < 0 ? 0 : minimum + 1;
    } else {
      return minimum <= 0 ? 0 : minimum;
    }
  } else {
    return 0;
  }
}

exports.default = _integer;