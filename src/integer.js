// create smallest number that is greater than minimum and a mulitple of multipleOf
export function minmul(minimum, multipleOf, exclusive) {
  if (( minimum < 0 ) || ( !exclusive && minimum <= 0 )) {
    return 0
  }

  const min  = exclusive ? minimum + 1 : minimum
  const rest = min % multipleOf

  if ( rest === 0 ) {
    return min
  }

  const sign = multipleOf  / Math.abs(multipleOf)
  const quot = (min - rest) / multipleOf

  return (quot + sign) * multipleOf
}

// create smallest number that is greater than minimum and a mulitple of multipleOf
export function maxmul(maximum, multipleOf, exclusive) {
  const res = -minmul(-maximum, multipleOf, exclusive)

  return res;
}

export function _integer(schema) {
  const {
    multipleOf,
    minimum,
    maximum,
    exclusiveMinimum,
    exclusiveMaximum
  } = schema

  const mo = !Object.is(multipleOf, undefined)
  const mi = !Object.is(minimum, undefined)
  const ma = !Object.is(maximum, undefined)

  if ( (  mo &&  mi &&  ma ) ||
       ( !mo &&  mi &&  ma ) ) {
    // minimum and maximum
    if (    (( minimum < 0 ) || ( !exclusiveMinimum && minimum <= 0 ))
         && (( maximum > 0 ) || ( !exclusiveMaximum && maximum >= 0 ))) {
      return 0
    } else {
      return exclusiveMinimum ? minimum + 1 : minimum
    }
  } else if (  mo && !mi &&  ma ) {
    // multipleOf and maximum
    return maxmul(maximum, multipleOf, exclusiveMaximum)
  } else if (  mo &&  mi && !ma ) {
    // multipleOf and minimum
    return minmul(minimum, multipleOf, exclusiveMinimum)
  } else if (  mo && !mi && !ma ) {
    // only multipleOf
    return 0
  } else if ( !mo && !mi &&  ma ) {
    // only maximum
    if ( exclusiveMaximum ) {
      return maximum > 0  ? 0 : maximum - 1
    } else {
      return maximum >= 0 ? 0 : maximum
    }
  } else if ( !mo &&  mi && !ma ) {
    // only minimum
    if ( exclusiveMinimum ) {
      return minimum < 0 ? 0 : minimum + 1
    } else {
      return minimum <= 0 ? 0 : minimum
    }
  } else {
    return 0
  }
}

export default _integer
