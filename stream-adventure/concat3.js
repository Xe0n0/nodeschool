var BufferList = require('bl');
bl = new BufferList();

process.stdin.on('end', function() {
  console.log(bl.toString().split('').reverse().join(''));
});
process.stdin.pipe(bl);
