const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug'); // Set Pug as the view engine

// Define a route to serve an HTML form
app.get('/form', (req, res) => {
    res.render('form');
  });

// Define a route to handle the form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Form submitted with Name: ${name}, Email: ${email}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
