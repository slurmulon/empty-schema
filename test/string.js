import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('string schema definition', () => {

  it('string schema should yield empty string', () => {
    const schema = {
      type: 'string'
    }

    empty(schema).should.equal('')
  })

  it('string schema with default should work', () => {
    const schema = {
      type: 'string',
      default: 'foo'
    }

    empty(schema).should.equal('foo')
  })
})
