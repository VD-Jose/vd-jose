// var fs = require("fs");
// const {Transform} = require ('stream');

// const readStream = fs.createReadStream('C:/Users/Joseph/Documents/New folder/welcome.txt', 'utf8'); 
// const writeStream = fs.createWriteStream ('C:/Users/Joseph/Documents/New folder/newwelcome.txt', 'utf8');
// const capitaliz
// readStream.pipe(writeStream);

//  readStream.on('data', (chunk) =>{
//     console.log('Data chunk received:', chunk);
//  });

//  readStream.on('end', () =>{
//     console.log('read stream ended');
//  });

//  readStream.on('error', (err) => {
//     console.error('read stream error:', err);
//  });


// const http = require('http');
// const fs = require ('fs');

// const server = http.createServer((req, res) =>{
//      if (req.method === 'GET') {
//         if (req.url === '/') {
//             fs.readFile(`C:/Users/Joseph/Documents/New folder/welcome.txt', 'utf8`, (err, data) =>{
//                 if (err) {
//                     res.writeHead(500, {'content-Type' : 'text/plain'});
//                     res.end ('Internal server error');
//                 } else {
//                     res.writeHead(200, {'content-Type' : 'text/plain'});
//                     res.end(data);
//                 }
//             });

//         }else if (req.url === '/api/data') {
//              const responseData = {message: 'Hey, Jose'};
//              res.writeHead(200, {'content-Type': 'application/json'});
//              res.end(JSON.stringify(responseData));
//         } else {
//             res.writeHead (404, {'content-Type' : 'text/plain'});
//             res.end('Not Found');
//         }
//      }
// }

// );

// const port = 3000;
// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`);
// });

















// const EventEmitter = require('events');
//  class ChatRoom extends EventEmitter {
//     sendMessage (user, message){
//         console.log(`${user}: ${message}`);
//         this.emit('newMessage', {user, message})
//     }
//  }
//  const chatRoom = new ChatRoom();
//  chatRoom.on('newMessage', ({user, message}) =>{
//     console.log(`Received messaage from ${user}: ${message}`);
//  });

//  chatRoom.sendMessage('UserA','Jose, Welcome');