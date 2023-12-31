const express = require('express');
const app = express();
const http=require('http');
const appConfig=require('./config/appconfig.js');
const fs=require('fs');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');


// const logger=require('./app/lib/loggerLib');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())


app.use(globalErrorMiddleWare.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)


let routePath='./routes/route';

fs.readdirSync(routePath).forEach(function(file){
    if(file.indexOf('.js')){
        console.log('including the following files');
        console.log(routePath+'/'+file)
        let route=require(routePath+"/"+file);
        route.setRouter(app)
    }

})


app.use(globalErrorMiddleWare.globalNotFoundHandler)

//creating HTTP server

const server=http.createServer(app)
//start listening to http server

server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)
//end server listening code
// const socket=require('./app/lib/socketLib');
// socket.setServer(server);


//error listener for http server 'error' event.
function onError(error){
    if(error.syscall !== 'listen')  {
        // logger.captureError(error.code+'not equal Listen','serverOnErrorHandler',10)
        throw error;
    }
    switch(error.code) {
        case 'EACCES':
            // logger.captureError(error.code+':elavated privilages required','serverOnErrorHandler',10)
            process.exit(1)
            break;
         case 'EADDRINUSE':
            //  logger.captureError(error.code,':port is already in use Ashok','serverOnErrorHandler',10)
             process.exit(1)
             break;
         default:
            //  logger.captureError(error.code+':some unknown error occured','serverOnErrorHandler',10)       
    }
}

//event listener for Http server 'listening' event;
    function onListening(){
        var addr=server.address()
        var bind=typeof addr === 'string'?'pipe'+addr:'port'+addr.port;
        ('Listening on'+bind)
        console.log(bind)
        // logger.captureInfo('server listening on port'+addr.port,'serverListeningHandler',10)
    }


mongoose.connect('mongodb://127.0.0.1:27017/MeetingRoom', {useNewUrlParser: true,useUnifiedTopology:true});


mongoose.connection.on('error',function(err){
    console.log('database connection is error')
    console.log(err)
})

mongoose.connection.on('open',function(err){
   if(err){ 
       console.log('database error')
       console.log(err)
   } else {
       console.log('database connection is open success ')
   }
})