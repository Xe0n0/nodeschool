request = require 'request'

req = request.post 'http://127.0.0.1:8000'
process.stdin.pipe(req).pipe process.stdout
