import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('numbers', function() {

  it('should return 0 when possible', function(done) {
    const schema = {
      type: 'number'
    }

    empty(schema).should.equal(0)

    done()
  })

  it('should use default', function(done) {
    const schema = {
      type: 'number',
      default: 42
    }

    empty(schema).should.equal(42)

    done()
  })

  it('should work with non-integer multipleOf', function(done) {
    const schema = {
      type: 'number',
      multipleOf: 3.5,
      minimum: 5
    }

    empty(schema).should.equal(7)

    done()
  })

})
