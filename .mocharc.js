'use strict';

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'nyan',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  require: ['@babel/polyfill', '@babel/register'],
  'watch-files': ['test/**/*.*']
};