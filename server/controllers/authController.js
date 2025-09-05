import Users from '../models/Users.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import bcryptjs from 'bcryptjs';
import nodemailer from "nodemailer";
import transporter from "../utilities/Utils.js";


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by username
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password',
        success:false
      });
    }

    // Compare plain password with hashed one using bcryptjs
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password',
        success:false,
      });
    }

    // Sign a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '21h',
    });

    // Send success response
    res.status(200).json({
      message: 'Login successful',
      token:token,
      user:user,
      success:true,
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const signup = async (req, res) => {
  const { username, college, email, phone, password } = req.body;
  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(200).json({
        message: 'User with this email already exists.',
        success:false,
      });
    }
    //hash password using bcryptjs
    const hashedPassword = await bcryptjs.hash(password, 10);
    
    
      //Simple Random OTP Generator
    function generateOTP(length = 6) {
      let otp = "";
      for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
      }
      return otp;
    }
    
    const verificationOTP = generateOTP();
    
    try{
      
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your Email",
      text: `Your verification OTP is ${verificationOTP}. It will expire in 2 minutes.`,
    });
    
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
    
    const newUser = new Users({
      username : username,
      college: college,
      email : email,
      phone:phone,
      password : hashedPassword,
      verificationOTP: verificationOTP,
      otpExpiredAt : new Date(Date.now() + 2 * 60 * 1000),
      createdAt: new Date(),
    });
      
    await newUser.save();
    
    res.status(201).json({
      message:'User created successfully.',
      user:newUser,
      success:true,
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};