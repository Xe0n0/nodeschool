var bl = require('bl');

process.stdin.pipe(bl(function(err, buf) {
  var rs = buf.toString().split('').reverse().join('');
  console.log(rs);
}));
