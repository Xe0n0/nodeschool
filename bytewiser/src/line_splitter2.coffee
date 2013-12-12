return if process.argv.length < 3

fs = require 'fs'
fs.readFile process.argv[2], (e, d) ->
  start = 0
  for c, i in d
    if c == '\n'.charCodeAt(0)
      console.log d.slice(start, i)
      start = i + 1
  console.log d.slice(start)

