const express = require ('express');
const index = express();
const mongoose = require('mongoose');
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
const postRoutes = require('./routes/post');
const bodyParser = require('body-parser');
const users = [
    {uname:'Joseph', pwd:'pwd1'},
    {uname:'Jose', pwd:'pwd2'}
];

const authMiddleware = (req, res , next) => {
    const {uname, pwd} = req.query;
    const authMiddleware = users.find((user) => user.uname === uname && user.pwd === pwd )
    if (authMiddleware) {
        next();
    }
    else {
        res.status(401).send('No user Found')
    }
}


// const mongoURI = process.env.MONGO_URI;

// try {
//   if (!mongoURI) {
//     throw new Error('MONGO_URI environment variable is not set.');
//   }

//   mongoose.connect(mongoURI);
//   console.log('Database Connected');
// } catch (err) {
//   console.error(`Database connection error: ${err.message}`);
// }


// mongoose.connection.on('error', (err) => {
//   console.error(`Database connection error: ${err.message}`);
// });


// const loggerMiddleWare = (req, res , next) => {
//     console.log (`[$ {new Date()}] ${req.method} ${req.url}`);
//     next();
// };




// index.use(loggerMiddleWare);


index.get('/protected', authMiddleware, (req, res)=> {
    res.send('protected route: you are authenticated')
}
)

index.get ('/public', (req, res) => {
    res.send ('Public Routez: No auth required')
});



index.use(morgan("dev"));


index.use ('/', postRoutes );

const port =  8999;
index.listen (port, () =>{
    console.log(`Joseph listening on: ${port}`);
});