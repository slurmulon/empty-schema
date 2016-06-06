import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('meta properties', () => {
  it('should work with oneOf', function(done) {
    const schema = {
      oneOf: [ {type: 'integer'}, {type: 'string'} ]
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should work with anyOf', function(done) {
    const schema = {
      anyOf: [ {type: 'integer'}, {type: 'string'} ]
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should work with allOf', function(done) {
    const schema = {
      allOf: [ {type: 'integer'}, {minimum: 5} ]
    }

    empty(schema).should.equal(5)

    done()
  })

  it('should work for type unions', function(done) {
    const schema = {
      type: [ 'integer', 'string' ]
    }

    empty(schema).should.equal(0)

    done()
  })
})

