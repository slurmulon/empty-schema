import empty from '../src/empty'
import chai  from 'chai'

chai.should()

describe('object schema definition', () => {

  it('should create the empty object when no required fields are given', () => {
    const schema = {
      type: 'object'
    }

    empty(schema).should.deep.equal({})
  })

  it('should create the fields when they are required', () => {
    const schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'object'
        },
        bar: {
          type: 'object'
        }
      },
      required: ['foo', 'bar']
    }

    empty(schema).should.have.keys(['foo', 'bar'])
  })

  it('should work with default', () => {
    const def = {
      foo: 'bar',
      baz: 42
    }

    const schema = {
      type: 'object',
      default: def
    }

    empty(schema).should.deep.equal(def)
  })

  xit('should error when required object property is not given', () => {
    const func = () => empty({
      type: 'object',
      properties: {},
      required: ['foo']
    });

    (func()).should.Throw(Error)
  })
})
