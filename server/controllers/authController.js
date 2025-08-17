import Users from '../models/Users.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';

dotenv.config();

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
      token,
      user:user,
      success:true,
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(200).json({
        message: 'User with this email already exists.',
        flag:false,
      });
    }
    //hash password using bcryptjs
    const hashedPassword = await bcryptjs.hash(password, 10);
    
    const newUser = new Users({
      username : username, 
      email : email,
      password : hashedPassword, 
      createdAt: new Date(),
    });
      
    await newUser.save();
    
    res.status(201).json({
      message:'User created successfully.',
      user:newUser,
      flag:true,
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};