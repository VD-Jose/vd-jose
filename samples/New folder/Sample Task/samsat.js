// const [first, sec, third] = [1, 2, 3];

// console.log(first);
// console.log(sec);
// console.log(third);

// const [one, ,three ] = [1, 2, 3];
// console.log(one)
// console.log(three)

// const [a, ...balance ] = [1, 2, 3, 4, 5]
// console.log(a);
// console.log(balance)


// function printUser ({fname, address: {city}}){
//     console.log(`${fname} ${city}`);
// }

    
// const user = {
//     fname: 'Jose',
//     address : {
//         city: 'Coimbatore',
//         state: 'tamilnadu'
//     },
//     education: {
//         school: 'pudukkottai',
//         college: 'copimbatore'
//     }
    
// };
// printUser(user);

// const {fname, address: {state}, education : {college}} = user;
// console.log(fname);
// console.log(state);
// console.log(college);


// function getStrings() {
//     return ["Jose", "CBE", "TN"];
// }

// const [x, y, z] = getStrings();
// console.log(x);
// console.log(y);
// console.log(z);


// function getUser() {
//     return user;
// }
// const {fname, address, education} = getUser();
// console.log(fname);
// console.log(address);
// console.log(education);



var express = require('express');
var app = express();

var jose = require ('./xyz.js');

app.use ('/Jose', jose);

app.listen(3002)

