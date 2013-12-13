return if process.argv.length < 3

array32 = new Uint32Array 1
array32[0] = process.argv[2]
array16 = new Uint16Array array32.buffer

console.log JSON.stringify array16
