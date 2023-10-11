const express = require('express');
const pug = require('pug')
const app = express();
const port = 3000;

app.set('view engine', 'pug'); // Set Pug as the view engine
app.set('views', 'C:/Users/Joseph/Downloads/samples/PugSample/views'); 

app.use(express.static('C:/Users/Joseph/Downloads/samples/PugSample/public/styles'));


// Define a route that renders a Pug template
app.get('/example', (req, res) => {
  res.render('example', { title: 'Employee Profile',title1: 'Employee Profile', FirstName: 'Jose',LastName:"Jey", DOB: "1998-06-10"  });
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
