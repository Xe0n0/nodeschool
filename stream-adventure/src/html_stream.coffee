map = require 'through2-map'
tr = require('trumpet')()

stream = tr.select('.loud').createStream()
stream.pipe(map((chunck) -> chunck.toString().toUpperCase())).pipe(stream)
process.stdin.pipe(tr).pipe process.stdout
