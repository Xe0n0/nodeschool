var http = require('http');
var strs = [];
var completed = 0;

if (process.argv.length < 5) return;

for (var i = 2; i < 5; ++i) {
    (function(i){
    http.get(process.argv[i], function(response){
	response.pipe(require('bl')(function(err, buf){
	    if (!err) 
	    	strs[i - 2] = buf.toString();
	    completed++;
	    if (completed == 3)
		for (var x = 0; x < 3; ++x)
		    console.log(strs[x]);
	}));	
    });
    })(i);
}
