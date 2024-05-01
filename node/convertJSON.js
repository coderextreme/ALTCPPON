"use strict";

var fs = require('fs');
var mkdirp = require('node-mkdirp');
var config = require('./config.js');
var ALTJSONLD = require('./ALTJSONLD.js');
var Script = require('./Script');
var loadValidate = require("./loadValidate.js");
const { DOMParser, XMLSerializer, DOMImplementation } = require('@xmldom/xmldom')

var replaceALTJSON = loadValidate.replaceALTJSON;
var loadALTJS = loadValidate.loadALTJS;

//console.error("DOM", DOMImplementation);
var domImpl = new DOMImplementation();
//console.error("DOM Impl", domImpl);

var LOG = Script.LOG;
ALTJSONLD = Object.assign(ALTJSONLD, { processURLs : function(urls) { return urls; }});
var selectObjectFromJSObj = ALTJSONLD.selectObjectFromJSObj;


function convertJSON(options) {

	var files = process.argv;
	for (var f in files) {
		var file = files[f];
		if (file.match(/node_modules|package.json|JSONSchema/)) {
			continue;
		}
		var basefile = file.substr(0, file.lastIndexOf("."));
		var file = basefile+".gltf";
		// console.error("Reading", file, domImpl);
		var str = fs.readFileSync(file).toString();
		if (typeof str === 'undefined') {
			throw("Read nothing, or possbile error");
		}
		var json = null;
		try {  
			json = JSON.parse(str);
		} catch (e) {
			console.error("================================================================================");
			console.error("File:", file);
			console.error("Error:", e);
			continue;
		}
		var NS = "https://www.alt.org/specifications/alt";
		// console.error("loading", file);
		loadALTJS(domImpl, json, file, NS, function(element, xml) {
			if (typeof element === undefined) {
				throw ("Undefined element returned from loadALTJS()")
			}
			if (typeof element === null) {
				throw ("Null element returned from loadALTJS()")
			}
			// filename conversion goes here.
			/*
			var altcodeind = basefile.indexOf(config.altcode);
			if (altcodeind === 0) {
				basefile = basefile.substring(config.altcode.length);
			}
			*/
			// console.error("basefile0", basefile);
			basefile = basefile.replace(/^C:\//, "")
			basefile = basefile.replace(/^\.\.\//, "")
			basefile = basefile.replace(/-| /g, "_")
			// handle filenames with leading zeros and java keywords
			basefile = basefile.replace(/^(.*[\\\/])([0-9].*|default|switch|for)$/, "$1_$2")
			// console.error(basefile);

			for (var ser in options) {
				var serializer = require(options[ser].serializer);
				var co = options[ser].codeOutput+basefile;
				try {
					str = new serializer().serializeToString(json, element, co)
				} catch (e) {
					console.error(e);
				}
				if (typeof str !== 'undefined') {
					// console.error("basefile", basefile);
					var outfile = options[ser].folder+basefile+options[ser].extension
					// console.error("outfile", outfile);
					mkdirp(outfile.substr(0, outfile.lastIndexOf("/")));
					fs.writeFileSync(outfile, str);
				} else {
					throw("Wrote nothing, serializer returned nothing");
				}
			}
		});
	}
}

if (typeof module === 'object')  {
	module.exports = {
		convertJSON: convertJSON
	};
}
