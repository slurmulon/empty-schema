import empty from '../src/empty'
import chai from 'chai'

chai.should()

describe('enum schema definition', () => {

  it('should yield first enum value', (done) => {
    const schema = {
      enum: [
        42
      ]
    }

    empty(schema).should.equal(42)

    done()
  })
})
