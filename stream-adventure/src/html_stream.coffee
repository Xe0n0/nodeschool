map = require 'through2-map'
tr = require('trumpet')()

process.stdin.pipe(tr)
stream = tr.select('.loud').createStream()
stream.pipe(map((chunck) -> chunck.toString().toUpperCase())).pipe(stream)
tr.pipe process.stdout
