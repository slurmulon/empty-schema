import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('meta properties', () => {
  it('should work with oneOf', () => {
    const schema = {
      oneOf: [ {type: 'integer'}, {type: 'string'} ]
    }

    empty(schema).should.equal(0)
  })

  it('should work with anyOf', () => {
    const schema = {
      anyOf: [ {type: 'integer'}, {type: 'string'} ]
    }

    empty(schema).should.equal(0)
  })

  it('should work with allOf', () => {
    const schema = {
      allOf: [ {type: 'integer'}, {minimum: 5} ]
    }

    empty(schema).should.equal(5)
  })

  it('should work for type unions', () => {
    const schema = {
      type: [ 'integer', 'string' ]
    }

    empty(schema).should.equal(0)
  })
})

