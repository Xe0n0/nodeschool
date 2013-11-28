var count = process.argv.length;
var value = 0;
for (var i = 2; i < count; ++i) {
	value += +process.argv[i];
}
console.log(value);
