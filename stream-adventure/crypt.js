// Generated by CoffeeScript 1.6.3
var crypto, stream;

crypto = require('crypto');

if (process.argv.length < 3) {
  return;
}

stream = crypto.createDecipher('aes256', process.argv[2]);

process.stdin.pipe(stream).pipe(process.stdout);
