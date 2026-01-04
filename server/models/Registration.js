import mongoose from 'mongoose';

const registrationSchema= new mongoose.Schema({
  regID: {
    type: String,
    default: "",
  },
  transactionId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    type: String,
    match: /^[0-9]{10}$/,
    default: "",
  },
  college: {
    type: String,
    trim: true,
    default: "",
  },
  studentID: {
    type: String,
    trim: true,
    default: "",
  },
  enrolledEvent: {
    type: String,
    default: '',
  },
  isTeam: {
    type:Boolean,
    default:false
  },
  teamName:{
    type: String,
    default:""
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
  fee: {
    type: Number,
    default: 0,
    min:0,
  },
  feeIsPaid: {
    type: Boolean,
    default: false,
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