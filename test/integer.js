import empty from '../src/empty'
import chai  from 'chai'

chai.should()

// property that describes valid integers
// function valid(min, limit, multipleOf, exclusive) {
//   if (multipleOf === 0) {
//     return
//   }

//   min = false
//   // min or max?
//   const ix = min ? 'in' : 'ax'

//   const schema = {
//     type: 'integer',
//     [`m${ix}imum`]: limit,
//     multipleOf,
//     [`exclusiveM${ix}imum`]: exclusive
//   }

//   const gen = empty(schema)

//   // gen should be multipleOf
//   const multiple = ( gen % multipleOf === 0 )

//   // gen should comply to limits
//   const small  = min ? limit : gen
//   const big    = min ? gen   : limit
//   const limits = ( small < big ) || ( !exclusive && small <= big )

//   const res = multiple && limits

//   if (!res) {
//     console.log(schema, gen, multiple, limits)
//   }

//   return res
// }

// function validMinMax([minimum, maximum], exclusiveMinimum, exclusiveMaximum) {
//   // avoid impossible case
//   if (minimum === maximum && (exclusiveMinimum || exclusiveMaximum)) {
//     return undefined
//   }

//   const schema = {
//     type: 'integer',
//     minimum,
//     maximum,
//     exclusiveMinimum,
//     exclusiveMaximum
//   }

//   const gen = empty(schema)

//   const min = (gen > minimum) || (!exclusiveMinimum && gen >= minimum)
//   const max = (gen < maximum) || (!exclusiveMaximum && gen <= maximum)

//   const res = min && max

//   if (!res) {
//     console.log(schema, gen, min, max)
//   }

//   return res
// }


describe('integers', () => {
  // it('should generate correct multiples', () => {
  //   var res =
  //     quickcheck(valid, quickcheck.bool
  //                     , quickcheck.int.between(-10000, 10000)
  //                     , quickcheck.int.between(-15, 15)
  //                     , quickcheck.bool)
  //     expect(res.pass).to.equal(true)
  // })

  // it('should generate in the correct range', () => {
  //   var res =
  //     quickcheck(validMinMax, quickcheck.range(quickcheck.int.between(-10000, 10000))
  //                           , quickcheck.bool
  //                           , quickcheck.bool)

  //     expect(res.pass).to.equal(true)
  // })

  it('should return 0 when no constraints are given', () => {
    const schema = {
      type: 'integer'
    }

    empty(schema).should.equal(0)
  })

  it('should return minimum if divisible by multipleOf', () => {
    const schema = {
      type: 'integer',
      minimum: 10,
      multipleOf: 2
    }

    empty(schema).should.equal(10)
  })

  it('should return min if min, max and multiple are given', () => {
    const schema = {
      type: 'integer',
      minimum: 10,
      maximum: 20,
      multipleOf: 2
    }

    empty(schema).should.equal(10)
  })

  it('should return min if min, max and multiple are given and 0 is not in range', () => {
    const schema = {
      type: 'integer',
      minimum: 10,
      maximum: 20,
      multipleOf: 2
    }

    empty(schema).should.equal(10)
  })

  it('should return min if min, max and multiple are given', () => {
    const schema = {
      type: 'integer',
      minimum: -10,
      maximum: 20,
      multipleOf: 2
    }

    empty(schema).should.equal(0)
  })

  it('should return 0 if only multipleOf is given', () => {
    const schema = {
      type: 'integer',
      multipleOf: 2
    }

    empty(schema).should.equal(0)
  })

  it('should return 0 if maximum allows it', () => {
    const schema = {
      type: 'integer',
      multipleOf: 2,
      maximum: 10
    }

    empty(schema).should.equal(0)
  })

  it('should work with only minimum', () => {
    empty({
      type: 'integer',
      minimum: 5
    }).should.equal(5)

    empty({
      type: 'integer',
      minimum: -5,
      exclusiveMinimum: true
    }).should.equal(0)

    empty({
      type: 'integer',
      minimum: -5
    }).should.equal(0)

    empty({
      type: 'integer',
      minimum: 5,
      exclusiveMinimum: true
    }).should.equal(6)
  })

  it('should work with only maximum', () => {
    empty({
      type: 'integer',
      maximum: 5
    }).should.equal(0)

    empty({
      type: 'integer',
      maximum: 5,
      exclusiveMaximum: true
    }).should.equal(0)

    empty({
      type: 'integer',
      maximum: 5
    }).should.equal(0)

    empty({
      type: 'integer',
      maximum: -5,
      exclusiveMaximum: true
    }).should.equal(-6)

    empty({
      type: 'integer',
      maximum: -5
    }).should.equal(-5)
  })

  it('should work with default', () => {
    const schema = {
      type: 'integer',
      default: 42
    }

    empty(schema).should.equal(42)
  })
})

