var isOdd = true;
process.stdin.pipe(require('split')()).pipe(require('through')(function(line){
    if (isOdd) this.queue(line.toString().toLowerCase() + '\n');
    else this.queue(line.toString().toUpperCase() + '\n');
    isOdd = !isOdd;
  })).pipe(process.stdout);
