// const fs = require('fs');
// const fileName = "textf.txt";

// fs.watch(fileName, () => console.log('File Changed'))


const fs = require('fs');
const fileName = 'textf.txt';

const errorHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());
fs.readFile(fileName, (err, data) => {
    if (err) errorHandler (err);
    dataHandler(data);
});

console.log("Study and work Hard")