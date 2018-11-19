var cluster = require('cluster');
var numCPUs = require('os').cpus().length; // CPU 개수
var express = require('express');
var path = require('path');
var http = require('http');

var header = require('./routes/header');

/* master */
if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork(); // CPU 개수만큼 fork
    }

    // 워커 종료시 다잉 메시지 출력
    cluster.on('exit', function(worker, code, signal) {
        console.log('WORKER:DIE' + worker.process.pid);
    });
}
/* worker */
else {
    console.log( 'WORKER:' + process.pid );

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
        console.log('Express is listening on port', port);
    });


}






