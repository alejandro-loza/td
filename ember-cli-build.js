/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});


  app.import('bower_components/jquery/dist/jquery.min.js');

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2');
  
  app.import('bower_components/moment/min/moment.min.js');

  return app.toTree();
};
