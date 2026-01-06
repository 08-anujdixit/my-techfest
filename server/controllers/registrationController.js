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
            }else if(at_index === dot_index - 1){
              validEmail = 0;
            }
        }
        return (!validEmail);
      }
      
      //VALIDATIONS
      if((formData.event !== 'CODE-A-THON' && formData.event !== 'Expo Renaissance' && formData.event !== 'IT Quiz') && (member.length || formData.membercount || teamName)){
        return res.status(200).json({
          message:`Team details are applicable only for team-based events. Please remove the team information or select an appropriate event to continue.`,
          success:false,
        });
      }
      else if (!formData.event || formData.event === "Select Event") {
        return res.status(200).json({
          message: "Please select an event to proceed.",
          success: false,
        });
      }
      else if(formData.event!=='Last Protocol' && formData.raftDebateRole){
        return res.status(200).json({
          message:`Raft Debate role selection is applicable only for the Raft Debate event. Please remove the role information or reselect the appropriate event to continue.`,
          success:false,
        });
      }
      else if ((formData.membercount>1 && member.length<(formData.membercount)-1)){
      return res.status(200).json({
        message:`Members list is empty! Please add them by pressing 'Add Members' Button.`,
        success:false,
      });
    }
      else if((formData.membercount!=null) && (formData.membercount) != member.length+1){
        return res.status(200).json({
          message:`You entered a team size of ${formData.membercount}, but entered ${Number(formData.membercount)+1} member names. Please update the member list by pressing 'Add Members' button to match the selected team size.`,
          success:false,
        });
      }
      else if (!/^\d{10}$/.test(formData.phone.trim())) {
        return res.status(200).json({
          message:'Please enter a valid 10 digit phone number.',
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
       
       const isRole = await Registration.findOne({enrolledEvent:'Last Protocol', raftDebateRole: formData.raftDebateRole});
       if(isRole){
         return res.status(200).json({
           message: "The selected role has already been assigned to another participant. Please choose a different role to proceed.",
           success:false,
         });
       }
       
      //Simple Random OTP Generator
      function generateOTP(length = 6) {
        let otp = "@TF5.0-";
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
        {name:'Expo Renaissance', feeAmount:200},
        {name:'CODE-A-THON', feeAmount:600},
        {name:'Last Protocol', feeAmount:100},
        {name:'Pixel Perfect', feeAmount:50},
        {name:'Future Forge', feeAmount:50},
        {name:'IT Quiz', feeAmount:100},
        {name:'Brand Blitz', feeAmount:50},
      ]
      let amount=0;
      for (let i of eventsFee) {
        if(i.name === formData.event){
          amount=i.feeAmount;
        }
      }
      
      const newRegistration = new Registration({
        regID: regID,
        transactionId: formData.transactionId,
        name : formData.name,
        email : email,
        phone: formData.phone,
        college: formData.college,
        studentID: formData.studentID,
        enrolledEvent: formData.event,
        raftDebateRole: formData.raftDebateRole,
        isTeam: (formData.membercount?true:false),
        teamName: (teamName??""),
        teamSize: (formData.membercount!=null?formData.membercount:1),
        members: member,
        fee: amount,
        terms_and_conditions: formData.terms_and_conditions?'I accept':formData.terms_and_conditions,
        createdAt: new Date(),
      });
      
      await newRegistration.save();
      
      res.status(201).json({
        message:'Participant Registered successfully.',
        registration: {
          name: newRegistration.name,
          email: newRegistration.email,
          phone: newRegistration.phone,
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
