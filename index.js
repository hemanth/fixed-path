'use strict';
var fs = require('fs');
var path = require('path');

var fixedPath = module.exports = function (filepath, cb) {
	var fixedPath = path.resolve(path.normalize(filepath.trim()));
	fs.realpath(fixedPath, function (err) {
		if (err) {
			return cb(err, null);
		}
		cb(null, fixedPath);
	});
};

fixedPath.sync = function (filepath) {
	var fixedPath = path.resolve(path.normalize(filepath.trim()));
	try {
		fixedPath = fs.realpathSync(fixedPath);
	} catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
  return fixedPath;
}
