'use strict';

function camel2Kebab(str) {
  return str.replace(/([A-Z])/g, function(m) {
	return '-' + m.toLowerCase();
  });
};

function reverse(str) {
  return str.replace(/(\-[A-Za-z])/g, function (m) {
	return m.toUpperCase().replace('-','');
  });
};

module.exports = exports = camel2Kebab;
exports.reverse = reverse;
