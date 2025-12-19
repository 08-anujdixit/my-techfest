import Registration from '../models/Registration.js';
import dotenv from 'dotenv';
dotenv.config();


export const register = async (req, res) => {
    const {formData, teamName, member} = req.body;
    const email=formData.email;
    try {
      
      //EMAIL VALIDATION FUNCTION
      function validateEmail(email) {
        let validEmail = 1;
        if (!email.includes('@') || !email.includes('.')) {
            validEmail = 0;
        } else {
            const at_index = email.indexOf('@');
            const dot_index = email.lastIndexOf('.');
    
            if (!/^[A-Za-z]/.test(email[0])) {
                validEmail = 0;
            } else if (at_index > dot_index) {
                validEmail = 0;
            } else if (at_index === 0 || dot_index === email.length - 1) {
                validEmail = 0;
            }
        }
        return (!validEmail);
      }
      
      //VALIDATIONS
      if ((formData.membercount>1 && member.length<(formData.membercount)-1)){
      return res.status(200).json({
        message:`Members list is empty! Please add them by pressing 'Add Members' Button.`,
        success:false,
      });
    }
      else if((formData.event !== 'CODE-A-THON' && formData.event !== 'Renaissance Expo' && formData.event !== 'Tech Treasure Hunt') && (member.length || formData.membercount || teamName)){
        return res.status(200).json({
          message:`This event does not require team details. Kindly remove the team information or refill the form to proceed.`,
          success:false,
        });
      }
      else if((formData.membercount!=null) && (formData.membercount) != member.length+1){
        return res.status(200).json({
          message:`You entered a team size of ${formData.membercount}, but entered ${Number(formData.membercount)+1} member names. Please update the member list by pressing 'Add Members' button to match the selected team size.`,
          success:false,
        });
      }
      //check if email is valid or not
      else if (validateEmail(formData.email)){
          return res.status(200).json({
          message:'Please enter a valid email address.\nEmail must start with a letter and contain “@” and “.”',
          success:false,
          });
        }
      
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
      
      const eventsFee=[
        {name:'Renaissance Expo', feeAmount:200},
        {name:'CODE-A-THON', feeAmount:800},
        {name:'Tech Treasure Hunt', feeAmount:200},
        {name:'Thumbnail Making', feeAmount:200},
        {name:'Character Desinging', feeAmount:200},
        {name:'Brain & Code', feeAmount:200},
        {name:'Logo Desinging', feeAmount:200},
      ]
      let amount=0;
      for (let i of eventsFee) {
        if(i.name === formData.event){
          amount=i.feeAmount;
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
        teamSize: (formData.membercount!=null?formData.membercount:1),
        members: member,
        feeIsPaid: true,
        fee: amount,
        enrolledEvent: formData.event,
        terms_and_conditions: formData.terms_and_conditions?'I accept':formData.terms_and_conditions,
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
