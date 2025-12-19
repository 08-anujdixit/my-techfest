import mongoose from 'mongoose';

const registrationSchema= new mongoose.Schema({
  regID: {
    type: String,
    default: "",
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
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
    // unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  college: {
    type: String,
    trim: true,
    default: "",
  },
  isTeam: {
    type:Boolean,
    default:false
  },
  teamSize: {
    type: Number,
    default: 1,
    min: 1,
  },
  members: {
    type: [String],
    default: [],
  },
  feeIsPaid: {
    type: Boolean,
    default: false,
  },
  fee: {
    type: Number,
    default: 0,
    min:0,
  },
  enrolledEvent: {
    type: String,
    default: '',
  },
  terms_and_conditions:{
    type:String,
    default:'I accept.'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Registration', registrationSchema);