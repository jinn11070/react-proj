var express = require('express');
var path = require('path');
var http = require('http');

// var index = require('./routes/index');
// var hello = require('./routes/hello');

/* Express 서버 설정 */
const app = express();
const port = 3000;

app.set('port', port);
app.use('/', express.static(path.join(__dirname, './../dist'))); // <--- http://localhost:3000 으로 붙으면 dist 하위의 view를 보여준다.

var server = http.createServer(app);

/* MODULE START *********************************/
app.get('/list', (req, res) => {
    // return res.send('pong');
    return res.send({key:'weoifsdfjwsdfef'});
});
/************************************************/

server.listen(port, () => {
    console.log('Express is listening on port', port);
});


