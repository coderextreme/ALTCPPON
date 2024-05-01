"use strict";

let fs = require('fs');

let namespace = "glTF";

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
			let uckey = parentkey;
			let member = uckey;
			if (uckey.indexOf("#") === 0 || uckey.indexOf("-") === 0 || uckey.indexOf("@") === 0 ) {
				uckey = uckey.slice(1);
				member = uckey;
			}
			if (uckey == 'function') {
				member = "functions";
			}
			if (uckey == 'point') {
				member = "points";
			}
			uckey = uckey[0].toUpperCase() + uckey.slice(1);
			classes[ggparentkey][parentkey] = "\tadd"+uckey+"(arg1) { this."+member+".push(...arg1); return this; }\n\tremove"+uckey+"(arg1) { "+member+".splice("+member+".findIndex(e => arg1.includes(e)), 1); }";
		} else if (typeof array[key] === 'object') {
			let remove_s = 1;
			if (namespace === "X3D") {
				remove_s = 0;
			} else if (namespace === "glTF") {
				if (parentkey === "scene" || parentkey == "asset") {
					remove_s = 0;
				}
				if (parentkey === "meshes") {
					remove_s = 2;
				}
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
 * parentkey -- property name that points to object
 * gparentkey -- grand property name that points to object
 * ggparentkey -- great grand property name that points to object
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
		if (Array.isArray(object[key])) {
			let uckey = key;
			let member = uckey;
			if (uckey.indexOf("#") === 0 || uckey.indexOf("-") === 0 || uckey.indexOf("@") === 0 ) {
				uckey = uckey.slice(1);
				member = uckey;
			}
			if (uckey == 'function') {
				member = "functions";
			}
			if (uckey == 'point') {
				member = "points";
			}
			uckey = uckey[0].toUpperCase() + uckey.slice(1);
			classes[clazz][key] = "\tadd"+uckey+"(arg1) { this."+member+".push(...arg1); return this; }\n\tremove"+uckey+"(arg1) { "+member+".splice("+member+".findIndex(e => arg1.includes(e)), 1); }";
			APIJSONLD.convertArray(classes,      key, object[key], parentkey, gparentkey);
		} else if (typeof object[key] === 'object') {
			APIJSONLD.convertObject(classes,     key, object[key], parentkey, gparentkey);
			if (key !== namespace) {
				classes[clazz][key] = "\tset "+key+"(arg1) { this."+key+" = arg1; return this; }\n\tget "+key+"() { return "+key+"; }";
			}
		} else if (typeof object[key] === 'number') {
			classes[clazz][key] = "\tset "+key+"(arg1) { this."+key+" = arg1; return this; }\n\tget "+key+"() { return "+key+";}";
		} else if (typeof object[key] === 'string' && key !== 'JSON Schema') {
			let uckey = key;
			if (uckey === '@class') {
				uckey = '@cssClass';
			}
			classes[clazz][key] = "\tset "+uckey+"(arg1) { this."+uckey+" = arg1; return this; }\n\tget "+uckey+"() { return "+uckey+";}";
		} else if (typeof object[key] === 'boolean') {
			classes[clazz][key] = "\tset "+key+"(arg1) { this."+key+" = arg1; return this; }\n\tget "+key+"() { return "+key+";}";
		} else if (typeof object[key] === 'undefined') {
		} else if (object[key] === null) {
			classes[clazz][key] = "set "+key+"() { this."+key+" = null; }";
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
loadJsonIntoApi: function(jsobj, classes, root) {
	namespace = root;
	APIJSONLD.convertObject(classes, root, jsobj, root, root);
}

}

module.exports = APIJSONLD;
