var express = require ('express');
var router = express.Router();

// const loggerMiddleWare = (req, res , next) => {
//     console.log (`[$ {new Date()}] ${req.method} ${req.url}`);
//     next();
// };

// app.use(loggerMiddleWare);
router.set ('view engine', 'pug')
router.set()

router.get('/', function(req, res){
    res.send('Hey Jose do some workout');
});
 

router.post('/', function(req, res){
    res.send('Jose todays workout');
});
 
module.exports = router;