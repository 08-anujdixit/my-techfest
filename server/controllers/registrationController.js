import Registration from '../models/Registration.js';
import dotenv from 'dotenv';
dotenv.config();


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