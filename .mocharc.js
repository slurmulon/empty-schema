'use strict';

module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  reporter: 'nyan',
  require: ['@babel/polyfill', '@babel/register'],
  'watch-files': ['test/**/*.*']
};