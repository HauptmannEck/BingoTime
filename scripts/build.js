const process = require('process');
const fse = require('fs-extra');

const filter = (item) => {
	return !/node_modules/.test(item)
};

console.log('Make sure there is no build directory');
fse.emptyDirSync('./build');

console.log('Building Client');
process.chdir('./client');

const clientBuild = require('../client/scripts/build');
clientBuild.runBuild().then(() => {
	console.log('Copy Client, Config and Server');

	process.chdir('../');
	fse.copySync('./client/build', './build/public');
	fse.copySync('./server', './build', {filter});
	fse.copySync('./.ebextensions', './build/.ebextensions');

	console.log('Build Complete');
});