untar = require('tar').Parse()
unzip = require('zlib').createGunzip()
crypto = require 'crypto'
tr = require 'through'

return if process.argv.length < 4

untar.on 'entry', (e) ->

    e.pipe(crypto.createHash('md5', { encoding: 'hex'})).pipe(tr(null, ->
      this.queue " #{ e.path }\n")
    ).pipe process.stdout if e.type == 'File'


uncrypto = crypto.createDecipher process.argv[2], process.argv[3]

process.stdin.pipe(uncrypto).pipe(unzip).pipe untar
