import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
  role: {
    type: String,
    enum: ['user', 'admin', 'superAdmin'], // restrict to known roles
    default: 'user',
  },
  pfp: {
    type: Buffer, // stores binary data
    default: null,
  },
  username: {
    type: String,
    required: true, // ensure it's always provided
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // better as string to preserve leading zeros
    match: /^[0-9]{10}$/, // basic validation for 10-digit phone
    default: '',
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true, // prevent duplicates
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email validation
  },
  college: {
    type: String,
    trim: true,
    default: '',
  },
  enrolledEvents: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


export default mongoose.model('Users', userSchema);