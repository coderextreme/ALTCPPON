var fs = require('fs');
var http = require('http');

if (typeof ALTJSONLD === 'undefined') {
	var ALTJSONLD = require('./ALTJSONLD.js');
}
if (typeof ALTJSONLD === 'undefined') {
	ALTJSONLD = window.ALTJSONLD;
}

ALTJSONLD = Object.assign(ALTJSONLD, { processURLs : function(urls) { return urls; }});
var selectObjectFromJSObj = ALTJSONLD.selectObjectFromJSObj;

/**
 * Load ALT JSON into an element.
 * DOMImplementation - normally document.implementation
 * jsobj - the JavaScript object to convert to XML and DOM.
 * path - the path of the JSON file.
 * NS - a namespace for X_ITE (optional) -- stripped out.
 * callback -- returns the element whose scene children to append or insert into the DOM.
 */
loadALTJS = function loadALTJS(DOMImplementation, jsobj, path, NS, callback) {
	ALTJSONLD.altjsonNS = NS;
	[ child, xml ] = ALTJSONLD.loadJsonIntoXml(DOMImplementation, jsobj, path);
	callback(child, xml);
}

/*
 * replaceALTJSON
 * replace children of an element with DOM created from ALT JSON.
 *	also, generate xml for inclusion elsewhere
 *
 * parent -- parent DOM element
 * json (json object) -- json to convert to DOM
 * url -- name of path/filename json loaded from
 * NS -- XML namespace (optional)
 * next -- to return the element or null
 * returns element loaded, followed by xml
 */
replaceALTJSON = function replaceALTJSON(parent, json, url, NS, next) {

	loadALTJS(DOMImplementation, json, url, NS, function(child, xml) {
		if (child != null) {
			while (parent.firstChild) {
			    parent.removeChild(parent.firstChild);
			}
			parent.appendChild(child);
		}
		next(child, xml);
	});
}

if (typeof window !== 'undefined') {
	window.replaceALTJSON = replaceALTJSON;
	window.loadALTJS = loadALTJS;
}
if (typeof module === 'object')  {
	module.exports = {
		replaceALTJSON: replaceALTJSON,
		loadALTJS: loadALTJS,
	};
}
