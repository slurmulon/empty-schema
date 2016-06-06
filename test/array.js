import empty from '../src/empty'
import chai from 'chai'

chai.should()

describe('array schema definition', () => {

  it('should yield empty array', (done) => {
    empty({
      type: 'array'
    }).should.deep.equal([])

    done()
  })

  it('should work with tuples', (done) => {
    empty({
      type: 'array',
      items: [
        { type: 'integer' },
        { type: 'string' }
      ]
    }).should.deep.equal([0, ''])

    done()
  })

  it('should work with minItems', (done) => {
    empty({
      type: 'array',
      items:{ type: 'integer' },
      minItems: 5
    }).should.deep.equal([0, 0, 0, 0, 0])

    done()
  })
})
