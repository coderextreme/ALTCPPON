"use strict";

const DOUBLE_SUFFIX = '';
const FLOAT_SUFFIX = '';
const OBJ = '.'; // ->
const NEW = ""; // new
const PTR = ""; // *
const REF = "&"; // *

function CppScriptSerializer () {
this.preno = 0;
}


CppScriptSerializer.prototype = {
	serializeToString : function(json, element, clazz) {
		this.preno = 0;
		var stack = [];
		stack.unshift(this.preno);
		this.preno++;
        
		var str = "";
		str += "//int main(int argc, char ** argv) {\n";
		str += element.nodeName+REF+" "+element.nodeName+stack[0]+" = "+NEW+" "+element.nodeName+"();\n";
		str += this.subSerializeToString(element, 3, stack);
		str += "//}\n";
		stack.shift();
		return str;
	},

	printSubArray : function (type, lead, joiner, values, trail) {
		return NEW+' '+type+'[]{'+lead+values.join(joiner)+trail+'}';
	},

	printParentChild : function (element, node, cn) {
		let prepre = OBJ;
		let addpre = "set";
		if (cn > 0) {
			addpre = "add";
		}
		let method = node.nodeName;
		return prepre+addpre+method;
	},
	subSerializeToString : function(element, n, stack) {
		let str = "";
		let attrType = "";
		for (let a in element.attributes) {
			let attrs = element.attributes;
			try {
				parseInt(a);
				let attrsa = attrs[a];
				if (attrs.hasOwnProperty(a) && attrsa.nodeType === 2) {
					let attr = attrsa.nodeName;
					let value = attrsa.nodeValue;
					let strval = "";
					if (Array.isArray(value)) {
						strval = printSubArray(typeof value[0], "", ",", value, "");
					} else if (typeof value == 'string') {
						strval = '"'+value+'"';
					}
					let method = attr.charAt(0).toUpperCase() + attr.slice(1);
					str += element.nodeName+stack[0];
					str += OBJ+"set"+method+"("+strval+");\n";
				}
			} catch (e) {
				console.error(e);
			}
			attrType = "";
		}
		for (let cn in element.childNodes) {
			let node = element.childNodes[cn];
			if (element.childNodes.hasOwnProperty(cn) && node.nodeType === 1) {
				stack.unshift(this.preno);
				this.preno++;
				let ch = "";

				let nodeName = node.nodeName;
				ch += nodeName+REF+" "+node.nodeName+stack[0]+" = "+NEW+" "+nodeName+"();\n";

				let childstr = this.subSerializeToString(node, n+1, stack);
				ch += childstr;
				let method = this.printParentChild(element, node, cn);
				ch += element.nodeName+stack[1];
				ch += method+"("+node.nodeName+stack[0]+");\n\n";
				str += ch;
				stack.shift();
			} else if (element.childNodes.hasOwnProperty(cn) && node.nodeType === 8) {
				str += "Type 8:"+node.nodeValue;
			} else if (element.childNodes.hasOwnProperty(cn) && node.nodeType === 4) {
				str += "Type 4:"+node.nodeValue;
			}
	        		
		}
		return str;
	}
};
module.exports = CppScriptSerializer;
