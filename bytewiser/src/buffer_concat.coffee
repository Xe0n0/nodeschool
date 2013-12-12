bl = []

process.stdin.resume()

process.stdin.on 'data', (buf) -> 
  bl.push buf

process.stdin.on 'end', ->
  console.log Buffer.concat bl
