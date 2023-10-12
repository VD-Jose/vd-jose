
const express = require('express');
const mongoose = require('mongoose')
const technologies = require('./models/techskill');


const app = express();

// retrieve technicalskills
app.get('/tech-api', async (req, res) => {
  try {
    const skills = await technologies.find();
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//connect with DB

mongoose.connect('mongodb://127.0.0.1:27017/Tech-api', {useNewUrlParser: true,useUnifiedTopology:true});

  
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });


const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
