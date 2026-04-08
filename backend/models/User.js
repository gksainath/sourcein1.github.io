const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\.edu$/, 'Please use a valid college (.edu) email address']
  },
  college: {
    type: String,
    default: 'Campus'
  },
  phone: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
