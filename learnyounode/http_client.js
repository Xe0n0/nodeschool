http = require('http');

if (process.argv.length < 3) return;

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
   
    response.on('data', function(str) {
	console.log(str);
    });
});
