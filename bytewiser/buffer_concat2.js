// Generated by CoffeeScript 1.6.3
var bl;

bl = require('bl')(function(e, d) {
  return console.log(d);
});

process.stdin.pipe(bl);
