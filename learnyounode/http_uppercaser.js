var map = require('through2-map');

var server = require('http').createServer(function(req, res){
    if (req.method != 'POST') return res.end();
    req.pipe(map(function(chunck){
	return chunck.toString().toUpperCase();
    })).pipe(res);
});
server.listen(8000);
