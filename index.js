// Generated by CoffeeScript 1.6.3
(function() {
  var coffeecup, endsWith, fs, path;

  coffeecup = require('coffeecup');

  path = require('path');

  fs = require('fs');

  endsWith = function(t, e) {
    return t.slice(-e.length) === e;
  };

  module.exports = function(src, extension) {
    var coffeecup_files, dir, file, views, _fn, _i, _len;
    if (extension == null) {
      extension = '.html.coffee';
    }
    dir = path.resolve(process.cwd(), src);
    coffeecup_files = fs.readdirSync(dir).filter(function(_) {
      return endsWith(_, extension);
    });
    views = function(name, options) {
      return views[name](options);
    };
    _fn = function(file) {
      var name, template;
      name = path.basename(file, extension);
      template = coffeecup.compile(fs.readFileSync(path.join(dir, file), 'utf-8'));
      return views[name] = template;
    };
    for (_i = 0, _len = coffeecup_files.length; _i < _len; _i++) {
      file = coffeecup_files[_i];
      _fn(file);
    }
    return views;
  };

}).call(this);
