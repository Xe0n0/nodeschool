//could also listen to process.stdin end event and use getBody() from concat
//but concat's finish event not work, have to use concat's end event! WTF!
var concat = require('concat-stream');
cc = concat(function(body) {
    var rs = body.toString().split('').reverse().join('');
      console.log(rs);
});
cc.on('end', function() {
  //console.log('event');
});
process.stdin.pipe(cc);
