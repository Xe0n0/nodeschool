var http = require('http');
var moment = require('moment');

var server = http.createServer(function(req, res){
    url = require('url').parse(req.url, true);
    date = new Date(url.query['iso']);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (url.pathname == '/api/parsetime') {
	res.write(JSON.stringify({
	    'hour': date.getHours(),
	    'minute': date.getMinutes(),
	    'second': date.getSeconds(),
	}));
    }
    else if (url.pathname == '/api/unixtime') {
	res.write(JSON.stringify({
	    'unixtime': date.getTime(),
	}));	
    }
    res.end();
});

server.listen(8000);
