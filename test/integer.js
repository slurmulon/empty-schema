import empty from '../src/empty'
import chai  from 'chai'

chai.should()

// property that describes valid integers
function valid(min, limit, multipleOf, exclusive) {
  if (multipleOf === 0) { 
    return
  }

  min = false
  // min or max?
  const ix = min ? 'in' : 'ax'

  const schema = {
    type: 'integer',
    [`m${ix}imum`]: limit,
    multipleOf,
    [`exclusiveM${ix}imum`]: exclusive
  }

  const gen = empty(schema)

  // gen should be multipleOf
  const multiple = ( gen % multipleOf === 0 )

  // gen should comply to limits
  const small  = min ? limit : gen
  const big    = min ? gen   : limit
  const limits = ( small < big ) || ( !exclusive && small <= big )

  const res = multiple && limits

  if (!res) {
    console.log(schema, gen, multiple, limits)
  }

  return res
}

function validMinMax([minimum, maximum], exclusiveMinimum, exclusiveMaximum) {
  // avoid impossible case
  if ( minimum === maximum && (exclusiveMinimum || exclusiveMaximum)) {
    return undefined
  }

  var schema = {
    type: 'integer'
  , minimum
  , maximum
  , exclusiveMinimum
  , exclusiveMaximum
  }

  var gen = empty(schema)

  var min = (gen > minimum) || (!exclusiveMinimum && gen >= minimum)
  var max = (gen < maximum) || (!exclusiveMaximum && gen <= maximum)

  var res = min && max
  if ( !res ) {
    console.log(schema, gen, min, max)
  }
  return res
}


describe('integers', function() {
  // it('should generate correct multiples', function(done) {
  //   var res =
  //     quickcheck(valid, quickcheck.bool
  //                     , quickcheck.int.between(-10000, 10000)
  //                     , quickcheck.int.between(-15, 15)
  //                     , quickcheck.bool)
  //     expect(res.pass).to.equal(true)
  //     done()
  // })

  // it('should generate in the correct range', function(done) {
  //   var res =
  //     quickcheck(validMinMax, quickcheck.range(quickcheck.int.between(-10000, 10000))
  //                           , quickcheck.bool
  //                           , quickcheck.bool)

  //     expect(res.pass).to.equal(true)
  //     done()
  // })

  it('should return 0 when no constraints are given', function(done) {
    const schema = {
      type: 'integer'
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should return minimum if divisible by multipleOf', function(done) {
    const schema = {
      type: 'integer',
      minimum: 10,
      multipleOf: 2
    }

    empty(schema).should.equal(10)

    done()
  })

  it('should return min if min, max and multiple are given', function(done) {
    const schema = {
      type: 'integer',
      minimum: 10,
      maximum: 20,
      multipleOf: 2
    }

    empty(schema).should.equal(10)

    done()
  })

  it('should return min if min, max and multiple are given and 0 is not in range', function(done) {
    const schema = {
      type: 'integer',
      minimum: 10,
      maximum: 20,
      multipleOf: 2
    }

    empty(schema).should.equal(10)

    done()
  })

  it('should return min if min, max and multiple are given', function(done) {
    const schema = {
      type: 'integer',
      minimum: -10,
      maximum: 20,
      multipleOf: 2
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should return 0 if only multipleOf is given', function(done) {
    const schema = {
      type: 'integer',
      multipleOf: 2
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should return 0 if maximum allows it', function(done) {
    const schema = {
      type: 'integer',
      multipleOf: 2,
      maximum: 10
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should work with only minimum', function(done) {
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

    done()
  })

  it('should work with only maximum', function(done) {
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
      type: 'integer'
    , maximum: -5
    }).should.equal(-5)

    done()
  })

  it('should work with default', function(done) {
    const schema = {
      type: 'integer',
      default: 42
    }

    empty(schema).should.equal(42)

    done()
  })
})

