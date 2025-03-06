// mocha-runner.js
require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs'
  }
});

// This will load all the tests
const testFiles = require('glob').sync('src/**/*.spec.ts');
testFiles.forEach(file => require(`./${file}`));
