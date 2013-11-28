var fs = require('fs');

if (process.argv.length < 3) {
	console.log(0);
	return;
}

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();

console.log(str.split('\n').length - 1);
