nums = [0, 15, 24, 3, 250, 83]

buf = new Buffer 6
buf.writeUInt8(nums[i], i) for i in [0..5]
console.log buf.toString('hex')
