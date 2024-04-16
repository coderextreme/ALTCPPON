"use strict";

const fs = require('fs');

let classes = {};

let fileJSON = require('./batchJSON.js').fileJSON;

function processFile(filePath) {
    let stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath);
    } else if (filePath.endsWith('.json')) {
      fileJSON(classes, 'X3D', filePath);
    }
}

function traverseDirectory(directoryPath) {
  let files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    let filePath = directoryPath + '/' + file;
    processFile(filePath);
  });
}

traverseDirectory('C:/x3d-code/www.web3d.org/x3d/content/examples');

for (let clazz in classes) {
	let classinfo = clazz;
	classinfo = classinfo.replaceAll("@", "");
	classinfo = classinfo.replaceAll(":", "_colon_");
	classinfo = classinfo.replaceAll("-", "");
	classinfo = classinfo.replaceAll("#", "");
	console.log("class", classinfo, "{");
	for (let method in classes[clazz]) {
		let methodinfo = classes[clazz][method];
		methodinfo = methodinfo.replaceAll("@", "");
		methodinfo = methodinfo.replaceAll(":", "_colon_");
		methodinfo = methodinfo.replaceAll("-", "");
		methodinfo = methodinfo.replaceAll("#", "");
		methodinfo = methodinfo.replaceAll("JSON schema", "JSON_schema");
		console.log(methodinfo);
	}
	console.log("}");
}
