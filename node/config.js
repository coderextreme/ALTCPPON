var config = {};

function examples() {
	return "C:/alt-code/www.alt.org/alt/content/examples/";
}

config.examples = examples;

function altcode() {
	return "C:/alt-code/";
}
config.altcode = altcode;

if (typeof module === 'undefined') {
	var module = {};
}

module.exports = config;
