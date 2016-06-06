import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('null schema definition', () => {

  it('should yield null', () => {
    const schema = {
      type: 'null'
    }

    chai.should(empty(schema)).not.exist()
  })
})
