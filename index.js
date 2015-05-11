var glob = require('glob')
  , path = require('path');

module.exports = function(App) {
  glob
    .sync(path.join(__dirname, 'test', '**', '*'))
    .forEach(function(file) {
      return require(file)(App);
    });

};
