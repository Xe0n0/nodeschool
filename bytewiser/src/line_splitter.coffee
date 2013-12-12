return if process.argv.length < 3

fs = require 'fs'
fs.readFile process.argv[2], { encoding: 'utf8' }, (err, data) ->
  array = data.split('\n')
  console.log(Buffer(line)) for line in array
