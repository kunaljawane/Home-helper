const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  work: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  experience: {
    type: Number,
    required: true
  }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
