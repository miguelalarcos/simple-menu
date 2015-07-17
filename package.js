Package.describe({
  name: 'miguelalarcos:simple-menu',
  version: '0.1.3',
  // Brief, one-line summary of the package.
  summary: 'A very very simple menu for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/miguelalarcos/simple-menu.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript');
  api.use('stylus');
  api.use('mquandalle:jade@0.4.3');
  //api.use('tracker');
  api.use('jquery');
  api.use('templating');
  api.use('yasaricli:nanoscroller@0.0.1');
  //api.use('mystor:device-detection@0.2.0');
  //api.use('underscore');
  //api.use('reactive-var');
  api.addFiles('simple-menu.jade', 'client');
  api.addFiles('simple-menu.styl', 'client');
  api.addFiles('simple-menu.coffee', 'client');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('miguelalarcos:simple-menu');
  api.addFiles('simple-menu-tests.js');
});
*/