var express = require('express');
var path = require('path');
var http = require('http');

var header = require('./routes/header');

/* Express 서버 설정 */
const app = express();
const port = 3000;

app.set('port', port);

var server = http.createServer(app);

/* MODULE START *********************************/
app.use('/', express.static(path.join(__dirname, './../dist'))); // <--- http://localhost:3000 으로 붙으면 dist 하위의 view를 보여준다.
// app.use('/header', header);
app.get('/header', (req, res) => {
    // return res.send('pong');
    return res.send({data: process.pid});
});




app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'./../dist/index.html'));
});
/************************************************/

server.listen(port, () => {
    console.log("PROCESSPID:" + process.pid);
    console.log('Express is listening on port', port);
});


