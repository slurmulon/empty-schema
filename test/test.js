import empty from '../src/empty'
import chai  from 'chai'

chai.should()

function throwing(schema, err = Error) {
  (() => empty(schema)).should.Throw(err)
}


describe('errors', () => {

  it('should error on unknown type', (done) => {
    throwing({
      type: 'bla'
    })
    done()
  })

  it('should error when no schema is passed', (done) => {
    throwing()
    done()
  })

  it('should throw when invalid schema is passed', (done) => {
    throwing({})
    done()
  })

})
