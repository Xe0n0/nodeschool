if (process.argv.length < 3) return;
var server = require('http').createServer(function(req, res){
    require('fs').createReadStream(process.argv[2]).pipe(res); 
});
server.listen(8000);
