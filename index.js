'use strict';

function kebab2camel(str) {
  return str.replace(/(\-[A-Za-z])/g, function (m) {
	return m.toUpperCase().replace('-','');
  });
};

function reverse(str) {
  return str.replace(/([A-Z])/g, function(m) {
	return '-' + m.toLowerCase();
  });
};

module.exports = exports = kebab2camel;
exports.reverse = reverse;
