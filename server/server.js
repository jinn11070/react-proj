/**
 * Created by Jung Soo-jin on 2018-11-14.
 */
var express = require('express');
var http = require('http');
// var io = require('socket.io');
var async = require('async');

var app = express();
var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);
// app.set('socketio', app.io);
app.use(express.logger('dev'));
app.use(express.bodyParser());

var server = http.createServer(app);

/* socket io 코드*/
// var server_io = io()


server.listen(port);
console.log('Express Listening on port 3000...');

//
// app.post('/reservation', function (req, res) {
//
//     var reservationInfo = req.body;
//     // var socketId = req.body.socketId
//
//     console.log(JSON.stringify(reservationInfo))
//
//     // server_io.to(socketId).emit('pay', payLogInfo)
//     res.send('success');
// });


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
