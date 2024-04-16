"use strict";

var batchJSON = require('./batchJSON.js').batchJSON;

var classes = {};
batchJSON(classes, 'glTF');
for (let clazz in classes) {
	let classinfo = clazz;
	classinfo = classinfo.replaceAll("@", "");
	classinfo = classinfo.replaceAll(":", "_colon_");
	classinfo = classinfo.replaceAll("-", "");
	console.log("class", classinfo, "{");
	for (let method in classes[clazz]) {
		let methodinfo = classes[clazz][method];
		methodinfo = methodinfo.replaceAll("@", "");
		methodinfo = methodinfo.replaceAll(":", "_colon_");
		methodinfo = methodinfo.replaceAll("-", "");
		console.log(methodinfo);
	}
	console.log("}");
}
