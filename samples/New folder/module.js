// const helloworld = () => (console.log("Hey Google, This is Joseph"))

// module.exports = {
//     helloworld
// }

// const http = require ('http');

// const options ={
//     hostname:'localhost',
//     port:3000,
//     path:'/api/data',
//     method: 'GET',
// };
//  const req = http.request(options, (res) =>
//  {
//     let data = '';
//     res.on ('data', (chunk)=>{
//         data += chunk;
//     });
//     res.on('end', ()=>{
//         const responseData = JSON.parse(data);
//         console.log(`Recieved data from server: ${JSON.stringify(responseData)}`);
//     });
    
//  });
//   req.on('error', (error) =>{
//     console.error(`Request error: ${error.message}`);
//   });

//   req.end();


const express = require('express');
const app = express();

app.get("/", (req, res)=>
{
    res.send("Hey Jose");
});

app.listen(3001);