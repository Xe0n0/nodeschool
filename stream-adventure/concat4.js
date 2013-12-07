var BufferList = require('bl');
bl = new BufferList();

bl.on('finish', function() {
  console.log(bl.toString().split('').reverse().join(''));
});
process.stdin.pipe(bl);
