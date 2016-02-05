'use strict';

module.exports = exports = function kebabCase(str) {
  return str.replace(/([A-Z])/g, function(match) {
	return '-' + match.toLowerCase();
  });
};

exports.reverse = function (str) {
  return str.replace(/(\-[A-Za-z])/g, function (match) {
	return match.toUpperCase().replace('-','');
  });
};
