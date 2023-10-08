const express = require ('express');
const index = express();
const morgan = require('morgan')

const postRoutes = require('./routes/post');



index.use(morgan("dev"));


index.get ('/', postRoutes );

const port = 8080;
index.listen (port, () =>{
    console.log(`Joseph wasting his time: ${port}`);
});