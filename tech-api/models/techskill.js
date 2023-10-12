const mongoose = require('mongoose');

const technicalSkillSchema = new mongoose.Schema({
  Techname: String,
  
});

const Technologies = mongoose.model('technicalskills', technicalSkillSchema);

module.exports = Technologies;
