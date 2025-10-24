import Registration from '../models/Registration.js';
import dotenv from 'dotenv';
dotenv.config();
import nodemailer from "nodemailer";
import transporter from "../middlewares/mailMiddleware.js";


export const register = async (req, res) => {
  const {formData, teamName, member} = req.body;
  const email=formData.email;
  try {
    // Find user by email, and event
     const registration = await Registration.findOne({email, enrolledEvent: formData.event});
     if (registration) {
       return res.status(200).json({
         message: `${formData.name?formData.name:'Participant'} with email ${formData.email} is alredy registered in the event ${formData.event?formData.event:''}.`,
         success:false,
       });
     }
    
   
      //Simple Random OTP Generator
    function generateOTP(length = 6) {
      let otp = "TF";
      for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
      }
      return otp;
    }
    var regID = generateOTP();
    while (true){
      regID = generateOTP();
      const flag = await Registration.findOne({regID});
      if (!flag){
        break;
      }
    }
    
    const newRegistration = new Registration({
      regID: regID,
      isRegistered: true,
      name : formData.name,
      college: formData.college,
      email : email,
      phone: formData.phone,
      isTeam: (formData.membercount?true:false),
      teamSize: formData.membercount,
      members: member,
      feeIsPaid: true,
      fee: 200,
      enrolledEvent: formData.event,
      createdAt: new Date(),
    });
      
    await newRegistration.save();
    
    try{
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Registration Confirmed for Tech Fest 5.0 – Your ID: ${regID}`,
        text: `Hello ${formData.name},
Congratulations! 🎊
Your registration for Tech Fest 5.0 has been successfully completed.
        
Registration Details:-
Event: ${formData.event} in Tech Fest 5.0
Registration ID: ${regID}
        
Please keep this ID safe — you’ll need it for event entry, participation, and certificate verification.
        
We’re excited to have you join us for an unforgettable tech experience filled with innovation, learning, and fun! 🚀
        
Stay tuned for further updates and schedules via email or our official channels.
        
Best regards,
Team Tech Fest 5.0
Department of Computer Science
National P.G. College, Lucknow`,
      });
    } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to send OTP",
      success: false,
    });
  }
    
    res.status(201).json({
      message:'Participant Registered successfully.',
      registration: {
        reg_id: newRegistration.regID,
        name: newRegistration.name,
        email: newRegistration.email,
        phone: newRegistration.phone,
        date: newRegistration.createdAt,
        event: newRegistration.enrolledEvent,
      },
      success:true,
    });

  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({
      message: 'Internal server error.',
      success: false,
    });
  }
};