var express = require('express');
var path = require('path');
var webpack = require('webpack');

/* Express 서버 설정 */
const app = express();
const port = 3000;

var index = require('./routes/index');
var hello = require('./routes/hello');

// app.use('/', express.static(path.join(__dirname, './../dist')));
app.use(express.static(path.join(__dirname, './../dist')));
app.use('/', index);
// app.use('/hello', hello);

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
