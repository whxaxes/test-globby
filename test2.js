const globby = require('globby');

const value = globby.sync([
  '**/*.js',
  '!**/node_modules',
  '!.*/**',
]);

console.info(value);
