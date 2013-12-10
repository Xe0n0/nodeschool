crypto = require 'crypto'

return if process.argv.length < 3

stream = crypto.createDecipher 'aes256', process.argv[2]
process.stdin.pipe(stream).pipe process.stdout
