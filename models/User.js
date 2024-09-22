const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  dob: String,
  email: String,
  roll_number: String
});

module.exports = mongoose.model('User', UserSchema);