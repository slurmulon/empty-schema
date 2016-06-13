import empty from '../src/index'
import chai  from 'chai'

chai.should()

describe('index', () => {

  describe('empty', () => {
    it('should provide empty Schemas by interfacing _empty', () => {
      const schema = {
        type: 'object'
      }

      empty(schema).should.deep.equal({})
    })
  })

})
