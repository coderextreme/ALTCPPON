"use strict";

let APIJSONLD = require('./APIJSONLD')
let fs = require('fs');

process.argv.shift();
process.argv.shift();

function batchJSON(classes) {
	let files = process.argv;
	for (let f in files) {
		let file = files[f];
		try {  
			let str = fs.readFileSync(file).toString();
			let json = JSON.parse(str);
			APIJSONLD.loadJsonIntoApi(json, classes);
		} catch (e) {
			console.error("//================================================================================");
			console.error("//File:", file);
			console.error("//Error:", e);
			continue;
		}
	}
	return classes;
}

if (typeof module === 'object')  {
	module.exports = batchJSON;
}

