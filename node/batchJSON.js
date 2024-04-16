"use strict";

let APIJSONLD = require('./APIJSONLD')
let fs = require('fs');

process.argv.shift();
process.argv.shift();

function fileJSON(classes, root, file) {
	try {  
		let str = fs.readFileSync(file).toString();
		let json = JSON.parse(str);
		APIJSONLD.loadJsonIntoApi(json, classes, root);
	} catch (e) {
		console.error("//================================================================================");
		console.error("//File:", file);
		console.error("//Error:", e);
	}
}

function batchJSON(classes, root) {
	let files = process.argv;
	for (let f in files) {
		let file = files[f];
		fileJSON(classes, root, file);
	}
	return classes;
}

if (typeof module === 'object')  {
	module.exports = {
		batchJSON : batchJSON,
		fileJSON : fileJSON
	}
}

