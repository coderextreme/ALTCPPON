"use strict";

// Convert ALT JSON to JAVA

process.argv.shift();
process.argv.shift();

var convertJSON = require('./convertJSON.js').convertJSON;

convertJSON([{ 
	serializer : './CppSerializer.js',
	folder : "../cplusplus/net/coderextreme/",
	extension : ".cpp",
	codeOutput : "../",
	}
]);
