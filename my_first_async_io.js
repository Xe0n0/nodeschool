var fs = require('fs');

if (process.argv.length < 3) return;

fs.readFile(process.argv[2], 'utf8', function(err, str){
    if (err) return;
    console.log(str.split('\n').length - 1);
});
