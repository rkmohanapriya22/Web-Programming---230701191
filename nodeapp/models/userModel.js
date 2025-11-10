const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
 firstName: {
  type: String,
  required: [true, 'Name is required'],
  trim: true,
 },
 lastName: {
  type: String,
  required: [true, 'Name is required'],
  trim: true,
 },
 mobileNumber: { 
  type: String, 
  required: true,
  validate: {
   validator: function(v) {
    return /^\d{10}$/.test(v);
   },
   message: props => `${props.value} is not a valid mobile number!`
  }
 },
 email: {
  type: String,
  required: [true, 'Email is required'],
  unique: true,
  lowercase: true,
  match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email'],
 },
 role: {
  type: String,
  enum: ['user', 'admin'],
  default: 'user',
 },
 password: {
  type: String,
  required: [true, 'Password is required'],
  minlength: [6, 'Password must be at least 6 characters long'],
  maxlength: [255, 'Password must be at most 255 characters long'],
 },
 
}, { timestamps: true });

// Export
module.exports = mongoose.model('User', userSchema);

