var process = require('process');
process.chdir('./client');
console.log('New directory: ' + process.cwd());
require('../client/scripts/build');