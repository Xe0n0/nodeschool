var server = require('net').createServer(function(socket){
    socket.end(require('moment')().format('YYYY-MM-DD HH:mm'));
});
server.listen(8000);
