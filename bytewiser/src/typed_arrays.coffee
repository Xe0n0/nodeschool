process.stdin.once 'data', (buf) ->
  len = buf.length
  array = Uint8Array ArrayBuffer len
  for i in [0..len - 1]
    array[i] = buf[i]
  console.log JSON.stringify array
