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
    type: String,
    match: /^[0-9]{10}$/,
    default: "",
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  verificationOTP:{
    type: String,
    default: "",
  },
  otpExpiredAt:{
    type: Date,
  },
  isVarified:{
    type:Boolean,
    default:false
  },
  college: {
    type: String,
    trim: true,
    default: "",
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