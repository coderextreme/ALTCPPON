"use strict";

var fs = require('fs');

var xmldom = require('@xmldom/xmldom');
if (typeof DOMSerializer === 'undefined') {
	var DOMSerializer = require('./DOMSerializer.js');
}

var ALTJSONLD = {
elementSetAttribute : function(element, key, value, paren) {
	if (typeof element === 'undefined') {
		console.warn("undefined element.  Cannot set attribute", key, "to", value);
	} else if (typeof element.setAttribute === 'function') {
		if (element.nodeName === key) {
			paren.setAttribute(key, value);
			return false;  // tell caller not to add element
		} else if (value !== "") {
			element.setAttribute(key, value);
		}
	} else {
		console.warn("No function setAttribute on element. Cannot set attribute", key, "to", value);
	}
	return true;
},

/**
 * a method to create and element with tagnam key to DOM in a namespace.  If
 */
CreateElement : function(xmlDoc, key) {
	var child = xmlDoc.createElement(key);
	return child;
},

convertArray : function(xmlDoc, parentkey, array, element, paren) {
	var key;
	var localArray = [];
	var isObjectArray = false;
	if (!Array.isArray(array)) {
		console.warn("Not array")
	}
	for (key in array) {
		if (typeof array[key] === 'number') {
			localArray.push(array[key]);
		} else if (typeof array[key] === 'string') {
			localArray.push(array[key]);
		} else if (typeof array[key] === 'boolean') {
			localArray.push(array[key]);
		} else if (Array.isArray(array[key])) {
			console.warn("Can't do array of arrays yet");
			// convertArray(xmlDoc, key, array[key], element, paren);
		} else if (typeof array[key] === 'object') {
			isObjectArray = true;
			let remove_s = 1;
			if (parentkey === "scene" || parentkey == "asset") {
				remove_s = 0;
			}
			if (parentkey === "meshes") {
				remove_s = 2;
			}
			let child = ALTJSONLD.CreateElement(xmlDoc, parentkey.substring(0, parentkey.length-remove_s));
			element.appendChild(child);
			element.appendChild(xmlDoc.createTextNode("\n"));
			ALTJSONLD.convertObject(xmlDoc,     key, array[key], child, paren);
			element.appendChild(xmlDoc.createTextNode("\n"));
		} else if (typeof array[key] === 'undefined') {
			console.warn(key, "property is undefined")
		} else {
			console.error("Unknown type found in array "+typeof array[key]);
		}
	}
	if (!isObjectArray) {
		if (!ALTJSONLD.elementSetAttribute(element, parentkey, localArray.join(" "), paren)) {
			// element set in parent
			paren.removeChild(element);
		}
	}
},

convertObject : function(xmlDoc, parentkey, object, element, paren) {
	var key;
	for (key in object) {
		if (Array.isArray(object[key])) {
			let child = ALTJSONLD.CreateElement(xmlDoc, key);
			element.appendChild(child);
			element.appendChild(xmlDoc.createTextNode("\n"));
			ALTJSONLD.convertArray(xmlDoc,      key, object[key], child, element);
			element.appendChild(xmlDoc.createTextNode("\n"));
		} else if (typeof object[key] === 'object') {
			let child = ALTJSONLD.CreateElement(xmlDoc, key);
			element.appendChild(child);
			element.appendChild(xmlDoc.createTextNode("\n"));
			ALTJSONLD.convertObject(xmlDoc,     key, object[key], child, paren);
			element.appendChild(xmlDoc.createTextNode("\n"));
		} else if (typeof object[key] === 'number') {
			ALTJSONLD.elementSetAttribute(element, key, object[key], paren);
		} else if (typeof object[key] === 'string') {
			ALTJSONLD.elementSetAttribute(element, key, object[key], paren);
		} else if (typeof object[key] === 'boolean') {
			ALTJSONLD.elementSetAttribute(element, key, object[key], paren);
		} else if (typeof object[key] === 'undefined') {
		} else if (object[key] === null) {
			ALTJSONLD.elementSetAttribute(element, key, null, paren);
		} else {
			console.error("Unknown type found in object", key, ":", typeof object[key]);
			console.error(object);
		}
	}
	return element;
},

/*
 * Load ALT JSON into an xml.
 * DOMImplementation - normally document.implementation
 * jsobj - the JavaScript object to convert to XML and DOM.
 * path - the path of the JSON file.
 *
 * returns child element, xml document, xml string.
 */
loadJsonIntoXml: function(DOMImplementation, jsobj) {
	var child;
	var xml;
	[ child, xml ]  = ALTJSONLD.loadJsonIntoDom(DOMImplementation, jsobj);
	if (!xml) {
		xml = ALTJSONLD.serializeDOM(jsobj, child, true);
	}
	console.log(xml);
	return [ child, xml ];
},

/*
 * Load ALT JSON into an element.
 * DOMImplementation - normally document.implementation
 * jsobj - the JavaScript object to convert to XML and DOM.
 * path - the path of the JSON file.
 *
 * returns child element, xml document.
 */
loadJsonIntoDom: function(DOMImplementation, jsobj) {
	var xmlDoc = ALTJSONLD.prepareDocument(DOMImplementation, jsobj);
	var child = ALTJSONLD.CreateElement(xmlDoc, 'ALT');
	child.setAttribute("xmlns:xsd", 'http://www.w3.org/2001/XMLSchema-instance');
	ALTJSONLD.convertObject(xmlDoc, "", jsobj, child, xmlDoc);
	return [ child, null ]; // TODO null until we can refactor
},

prepareDocument: function(DOMImplementation, jsobj) {
	var version = 0.1
       	var docType = DOMImplementation.createDocumentType("GLTF", 'ISO//ALT//DTD GLTF '+version+'//EN" "https://www.alt.org/specifications/alt-'+version+'.dtd', null);
	var xmlDoc = DOMImplementation.createDocument(null, "GLTF", docType);

	xmlDoc.insertBefore(xmlDoc.createProcessingInstruction('xml', 'version="1.0" encoding="UTF-8"'), docType);
	return xmlDoc;
},

/**
 * fixXML
 * Fix XML after it has been serialized.
 */
fixXML : function(xmlstr) {
	// get rid of self-closing tags
	xmlstr = xmlstr.replace(/(<[ \t]*)([A-Za-z0-9]+)([^>]*)\/>/g, "$1$2$3></$2>\n");
	// strip out namespace
	xmlstr = xmlstr.replace(/xmlns="[^"]*"/g, "");

	// strip out schema
	xmlstr = xmlstr.replace(/xsd:noNamespaceSchemaLocation="[^"]*"/gi, "");


	// Fix CDATA sections
	xmlstr = xmlstr.replace(/&lt;!\[CDATA\[/g, "\n<![CDATA[");
	xmlstr = xmlstr.replace(/\]\]&gt;/g, "]]>\n");
	xmlstr = xmlstr.replace(/[\u0080-\uFFFF]/g, 
		function (v) {return '&#'+v.charCodeAt()+';';}
	);
	// xmlstr = xmlstr.replace(/(\\+)&quot;/g, '\\&quot;');
	do {
		var xmlstr2 = xmlstr;
		xmlstr = xmlstr2.replace(/(<!\[CDATA\[(.|\n)*)&lt;((.|\n)*\]\]>)/gi, "$1<$3");
	} while (xmlstr !== xmlstr2);
	do {
		xmlstr2 = xmlstr;
		xmlstr = xmlstr2.replace(/(<!\[CDATA\[(.|\n)*)&gt;((.|\n)*\]\]>)/gi, "$1>$3");
	} while (xmlstr !== xmlstr2);
	do {
		xmlstr2 = xmlstr;
		xmlstr = xmlstr2.replace(/(<!\[CDATA\[(.|\n)*)&amp;((.|\n)*\]\]>)/gi, "$1&$3");
	} while (xmlstr !== xmlstr2);
	return xmlstr;
},

/**
 * Serialize an element to XML and add an XML header.
 */
serializeDOM : function(json, element, appendDocType) {
	var version = "0.1";
	var encoding = "UTF-8";
	if (typeof json !== 'undefined') {
		version = "0.1"
		encoding = "UTF-8"
	}
	var xml = '';
	if (typeof element === 'string') {
		xml += element;
	} else if (typeof element !== 'undefined') {
		var domserial = new DOMSerializer();
		xml += domserial.serializeToString(json, element);
	}

	xml = ALTJSONLD.fixXML(xml);
	return xml;
},


/**
 * selectObjectFromJSObj() --  get an object in a node internally.
 * The node is the javascript object tree to get an object out of.
 * selectorField is a " > " separated list of properties in node.
 *
 */
selectObjectFromJSObj : function(node, selectorField) {
	selectorField = selectorField.substring(1);
	var skipDescendants = 0; // number of descendents to skip
	var selectedValue = node;
	var higherValue = selectedValue;
	var selector  = selectorField.split(/\//);
	var depth = (selector.length - skipDescendants);
	for (var index = 0; index < depth - 0; index++) {
		higherValue = selectedValue;
		selectedValue = selectedValue[selector[index]];
		if (typeof selectedValue === 'undefined') {
			// not sure how we got here, but let's bail
			console.error("Error: I think we went down too far: "+selectorField+" is unavailable.");
			return true;
		}
	}
	return selectedValue;
},

setDocument : function(doc) {
	document = doc;
}
}

module.exports = ALTJSONLD;
