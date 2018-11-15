var express = require('express');
var path = require('path');
var webpack = require('webpack');
var http = require('http');

/* Express 서버 설정 */
const app = express();
const port = 3000;

// var index = require('./routes/index');
// var hello = require('./routes/hello');


/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);*/
app.use('/', express.static(path.join(__dirname, './../dist')));

// app.use(express.static(path.join(__dirname, './../dist')));
// app.use('/', index);
// app.use('/hello', hello);

app.set('port', port);

var server = http.createServer(app);

app.get('/list', (req, res) => {
    // return res.send('pong');
    return res.send({key:'soojin'});
    // res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

server.listen(port, () => {
    console.log('Express is listening on port', port);
});


