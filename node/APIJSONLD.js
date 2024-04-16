"use strict";

let fs = require('fs');
let classes = {};

let APIJSONLD = {
convertArray : function(classes, parentkey, array, gparentkey, ggparentkey) {
	let key;
	let localArray = [];
	if (!Array.isArray(array)) {
		console.warn("Not array")
	}
	for (key in array) {
		if (typeof array[key] === 'number') {
		} else if (typeof array[key] === 'string') {
		} else if (typeof array[key] === 'boolean') {
		} else if (Array.isArray(array[key])) {
			// APIJSONLD.convertArray(classes, key, array[key], parentkey, gparentkey);
			let uckey = parentkey[0].toUpperCase() + parentkey.slice(1);
			classes[ggparentkey][parentkey] = "\tadd"+uckey+"(arg1) {}\n\tremove"+uckey+"(arg1) {}";
		} else if (typeof array[key] === 'object') {
			let remove_s = 1;
			if (parentkey === "scene" || parentkey == "asset") {
				remove_s = 0;
			}
			if (parentkey === "meshes") {
				remove_s = 2;
			}
			let newparentkey = parentkey.substring(0, parentkey.length-remove_s);
			APIJSONLD.convertObject(classes, key, array[key], newparentkey, gparentkey);
		} else if (typeof array[key] === 'undefined') {
			console.warn(key, "property is undefined")
		} else {
			console.error("Unknown type found in array "+typeof array[key]);
		}
	}
},
// From Stackoverflow @krisk
isInt : function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
},
/** a method to convert objects to classes
 * classes -- collection of classes
 * object -- JavaScript object
 * paren -- parent
 */
convertObject : function(classes, parentkey, object, gparentkey, ggparentkey) {
	let key;
	let clazz;
	
	if (APIJSONLD.isInt(gparentkey)) {
		clazz = parentkey;
	} else {
		clazz = gparentkey;
	}
	if (typeof classes[clazz] === 'undefined') {
		classes[clazz] = {};
	}
	classes[clazz]["constructor"] = "\tconstructor() {}";
	classes[clazz]["__hiddenJSONset__"] = "\tget JSON() {}";
	classes[clazz]["__hiddenJSONget__"] = "\tset JSON(arg1) {}";
	for (key in object) {
		let uckey = key[0].toUpperCase() + key.slice(1);
		if (Array.isArray(object[key])) {
			classes[clazz][key] = "\tadd"+uckey+"(arg1) {}\n\tremove"+uckey+"(arg1) {}";
			APIJSONLD.convertArray(classes,      key, object[key], parentkey, gparentkey);
		} else if (typeof object[key] === 'object') {
			APIJSONLD.convertObject(classes,     key, object[key], parentkey, gparentkey);
			classes[clazz][key] = "\tset "+key+"(arg1) {}\n\tget "+key+"() {}";
		} else if (typeof object[key] === 'number') {
			classes[clazz][key] = "\tset "+key+"(arg1) {}\n\tget "+key+"() {}";
		} else if (typeof object[key] === 'string') {
			classes[clazz][key] = "\tset "+key+"(arg1) {}\n\tget "+key+"() {}";
		} else if (typeof object[key] === 'boolean') {
			classes[clazz][key] = "\tset "+key+"(arg1) {}\n\tget "+key+"() {}";
		} else if (typeof object[key] === 'undefined') {
		} else if (object[key] === null) {
			classes[clazz][key] = "set "+key+"() {}";
		} else {
			console.error("Unknown type found in object", key, ":", typeof object[key]);
			console.error(object);
		}
	}
},

/*
 * Load JSON into an API struct.
 * jsobj - the JavaScript object to convert to XML and DOM.
 * classes -- the output API structure
 */
loadJsonIntoApi: function(jsobj, classes) {
	APIJSONLD.convertObject(classes, "glTF", jsobj, "glTF", "glTF");
}

}

module.exports = APIJSONLD;
