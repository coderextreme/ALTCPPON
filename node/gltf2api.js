"use strict";

var batchJSON = require('./batchJSON.js');

var classes = {};
batchJSON(classes);
for (let clazz in classes) {
	let classinfo = clazz;
	classinfo = classinfo.replaceAll("@", "At_");
	classinfo = classinfo.replaceAll(":", "Colon_");
	classinfo = classinfo.replaceAll("-", "Dash_");
	console.log("class", classinfo, "{");
	for (let method in classes[clazz]) {
		let methodinfo = classes[clazz][method];
		methodinfo = methodinfo.replaceAll("@", "At_");
		methodinfo = methodinfo.replaceAll(":", "Colon_");
		methodinfo = methodinfo.replaceAll("-", "Dash_");
		console.log(methodinfo);
	}
	console.log("}");
}
