import empty from '../src/empty'
import chai  from 'chai'
import Ajv  from 'ajv'

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

  describe('format', () => {
    const createValidation = schema => new Ajv().compile(schema);
    [
        'date',
        'time',
        'date-time',
        'uri',
        'uri-reference',
        'uri-template',
        'url',
        'email',
        'hostname',
        'ipv4',
        'ipv6',
        'regex',
        'uuid',
        'json-pointer',
        'relative-json-pointer'
    ].forEach(format => {
        it(`should generate valid data for '${format}' format`, () => {
            const schema = {type: 'string', format}
            createValidation(schema)(empty(schema)).should.be.true
        })
    })
  })
})
