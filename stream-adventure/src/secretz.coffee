untar = require('tar').Parse()
unzip = require('zlib').createGunzip()
crypto = require 'crypto'

return if process.argv.length < 4

untar.on 'entry', (e) ->
    return if e.type != 'File'

    hash = crypto.createHash('md5', { encoding: 'hex'})
    hash.on 'end', ->
      console.log " #{ e.path }"

    e.pipe(hash).pipe process.stdout


uncrypto = crypto.createDecipher process.argv[2], process.argv[3]

process.stdin.pipe(uncrypto).pipe(unzip).pipe untar
