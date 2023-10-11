const express = require('express');
const mongoose = require('mongoose');
const User = require('./Model/user'); // Import the User schema
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a route to insert a new user
app.get('/insert', async (req, res) => {
  const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    name: 'Joh Dos',
    email: 'joh@example.com',
    name: 'John Do',
    email: 'john@exaple.com',

  });

  try {
    await newUser.save();
    res.send('User inserted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error inserting user');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
