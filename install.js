'use strict';

const { copyFile, stat } = require(`fs`).promises;
const { cyan, green, red } = require(`chalk`);
const { name, version } = require(`./package.json`);
const packageInLog = cyan(`[${name} ${version}]:`);
const editorconfigFile = `../../.editorconfig`;

try {
	await stat(editorconfigFile);
	console.log(`${packageInLog} ${green(`.editorconfig already exists`)}`);
} catch (err) {
	try {
		await copyFile(`.editorconfig`, editorconfigFile);
		console.log(`${packageInLog} ${green(`.editorconfig successfully copied`)}`);
	} catch (err) {
		console.error(`${packageInLog} ${red(err)}`);
		console.error(`${packageInLog} try "node node_modules/${name}/install"`);
	}
}
