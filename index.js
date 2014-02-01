var path = require('path');
var glob = require('globule');

module.exports = function() {
  var filepath = path.join.apply(path, arguments);
  var dir = path.join(__dirname, filepath, '*');
  return glob.find(dir.replace(/\\/g, '/'));
};