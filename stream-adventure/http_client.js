// Generated by CoffeeScript 1.6.3
(function() {
  var req, request;

  request = require('request');

  req = request.post('http://127.0.0.1:8000');

  process.stdin.pipe(req).pipe(process.stdout);

}).call(this);