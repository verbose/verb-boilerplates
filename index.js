var path = require('path');
var glob = require('globule');

// Specify the directory to search
module.exports = function() {
  var filepath = path.join.apply(path, arguments);
  var dir = path.join(__dirname, filepath, '**').replace(/\\/g, '/');

  // Return expanded array of files.
  return require('globule').find(dir, {filter: 'isFile'});
};
