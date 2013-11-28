var fs = require('fs');

if (process.argv.length < 4) return;

var pattern = '.*\\.' + process.argv[3] + '$';
var re = new RegExp(pattern);

fs.readdir(process.argv[2], function(err, list) {
	if (err) return;
	list.forEach(function(e, i, array){
		if (re.test(e))
			console.log(e);
	});
});
