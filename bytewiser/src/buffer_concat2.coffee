bl = require('bl') (e, d) -> 
  console.log d

process.stdin.pipe bl
