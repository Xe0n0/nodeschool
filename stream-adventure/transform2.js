var map = require('through2-map');

process.stdin.pipe(map({'wantStrings': true}, function(str) {
      return str.toUpperCase();
    })).pipe(process.stdout);
