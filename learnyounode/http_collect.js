var http = require('http');

if (process.argv.lenght < 3) return;

http.get(process.argv[2], function(response){
    response.pipe(require('bl')(function(err, buf){
	console.log(buf.length);
	console.log(buf.toString());
    }));
});
