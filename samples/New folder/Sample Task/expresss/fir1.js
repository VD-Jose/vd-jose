var express = require ('express');
var app = express();
var router = express.router ();

const loggerMiddleWare = (req, res , next) => {
    console.log (`[$ {new Date()}] ${req.method} ${req.url}`);
    next();
};

router.use(loggerMiddleWare);

router.get('/', function(req, res){
    res.send('Hey Jose do some workout');
});
 

router.post('/', function(req, res){
    res.send('Jose todays workout');
});
 
module.exports = router();