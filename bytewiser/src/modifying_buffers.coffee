process.stdin.on 'data', (buf)->
  len = buf.length - 1
  for i in [0..len]
    if buf[i] == 46 
      buf.write('!', i) 
  console.log buf

