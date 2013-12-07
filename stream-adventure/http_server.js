var http = require('http');

if (process.argv.length < 3) return;

var server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    req.pipe(require('through')(function(buf) {
      this.queue(buf.toString().toUpperCase());
    })).pipe(res);
  }
  else res.end();
});
server.listen(process.argv[2]);
