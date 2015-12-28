'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function (filepath, cb) {
	var fixedPath = path.resolve(path.normalize(filepath.trim()));
	fs.realpath(fixedPath, function (err) {
		if (err) {
			return cb(err, null);
		}
		cb(null, fixedPath);
	});
};
