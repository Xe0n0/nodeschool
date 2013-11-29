var fs = require('fs');

if (process.argv.length < 3) return;

fs.createReadStream(process.argv[2]).pipe(process.stdout);
