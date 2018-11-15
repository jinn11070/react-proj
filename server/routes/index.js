var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    console.log("wefwef")
    res.send({
        info: "soojin!!!"
    });
    // res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;
