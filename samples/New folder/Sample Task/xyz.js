var express = require ('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Hey Jose do some workout');
});
 

router.post('/', function(req, res){
    res.send('Jose todays workout');
});
 
module.exports = router;