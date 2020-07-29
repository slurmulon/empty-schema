export default function _string({format} = {}) {
  if (!format || !defaultFormatValues[format]) {
    return ''
  }

  return defaultFormatValues[format]();
}

const defaultFormatValues = {
  date: () => new Date().toISOString().split('T')[0],
  time: () => new Date().toISOString().split('T')[1],
  uri: () => 'a:',
  url: () => 'http://a.aa',
  email: () => 'a@a',
  hostname: () => 'a',
  ipv4: () => '0.0.0.0',
  ipv6: () => '0:0:0:0:0:0:0:0',
  regex: () => '',
  uuid: () => '00000000-0000-0000-0000-000000000000',
  'date-time': () => new Date().toISOString(),
  'uri-reference': () => '',
  'uri-template': () => '',
  'json-pointer': () => '',
  'relative-json-pointer': () => '0'
}
