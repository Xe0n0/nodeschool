ws = require 'websocket-stream'
stream = ws 'ws://127.0.0.1:8000'
stream.end 'hello\n'
