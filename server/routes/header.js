/**
 * Created by Jung Soo-jin on 2018-11-19.
 */
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send({title:'DeltaStream'});
});

module.exports = router;