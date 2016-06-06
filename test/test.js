import empty from '../src/empty'
import chai  from 'chai'

chai.should()

function throwing(schema, err = Error) {
  (() => empty(schema)).should.Throw(err)
}

describe('errors', () => {

  it('should error on unknown type', () => {
    throwing({
      type: 'bla'
    })
  })

  it('should error when no schema is passed', () => {
    throwing()
  })

  it('should throw when invalid schema is passed', () => {
    throwing({})
  })

})
