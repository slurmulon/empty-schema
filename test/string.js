import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('string schema definition', () => {

  it('string schema should yield empty string', (done) => {
    const schema = {
      type: 'string'
    }

    empty(schema).should.equal('')

    done()
  })

  it('string schema with default should work', (done) => {
    const schema = {
      type: 'string',
      default: 'foo'
    }

    empty(schema).should.equal('foo')

    done()
  })
})
