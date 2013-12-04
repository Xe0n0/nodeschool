var through = require('through');

write = function(buf) {
  this.queue(buf.toString().toUpperCase());
};

end = function() {
  this.queue(null);
};

tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);
