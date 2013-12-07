var concat = require('concat-stream');

process.stdin.pipe(concat(function(body) {
  var rs = body.toString().split('').reverse().join('');
  console.log(rs);
}));
