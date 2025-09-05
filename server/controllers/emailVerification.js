import Users from '../models/Users.js';
import dotenv from 'dotenv';
dotenv.config()

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = await Users.findOne({ verificationOTP: otp });

    if (!user){
      return res.status(400).json({
      message: "Invalid or expired OTP",
      success:false,
      });
    }
    
    if (user.otpExpiredAt < new Date()){
      return res.status(400).json({
      message: "OTP expired",
      success:false,
    }); 
    }

    user.isVarified = true;
    user.verificationOTP = null;
    user.otpExpiredAt = null;
    await user.save();
    
    return res.status(200).json({
      message: "Email verified successfully",
      user:user,
      success:true,
    });
  }  catch (error) {
    res.status(500).json({ message : error.message });
  }
};