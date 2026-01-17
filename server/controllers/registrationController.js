import Registration from '../models/Registration.js';
import dotenv from 'dotenv';
dotenv.config();


export const register = async (req, res) => {
    
    const {formData, teamName, member} = req.body;
    const email=formData.email;
    try {
      
      //check if email is valid or not
      if (!(email).includes("@")){
          return res.status(200).json({
          message:'Please enter a valid email address.\nEmail must start with a letter and contain “@” and “.”',
          success:false,
          });
        }
      
      // Find user by email, and event to check if they are not registering twice in same event
      const registration = await Registration.findOne({email, enrolledEvent: formData.event});
      if (registration) {
         return res.status(200).json({
           message: `${formData.name?formData.name:'Participant'} with email ${formData.email} is alredy registered in the event ${formData.event?formData.event:''}.`,
           success:false,
         });
       }
       
       //LAST PROTOCOL ROLE AVAILIBILITY CHECK
      if(formData.event === 'Last Protocol'){
         const isRole = await Registration.findOne({enrolledEvent:'Last Protocol', raftDebateRole: formData.raftDebateRole});
         if(isRole){
           return res.status(200).json({
             message: "The selected role has already been assigned to another participant. Please choose a different role to proceed.",
             success:false,
           });
         }
       }
      
      //REGISTRATION ID GENERATION
      var regID = `TF5-${Date.now()}-${Math.floor(Math.random()*1000)}`;
      
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
          break;
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
        message:'Registration submitted successfully. Your details are under verification. You will be contacted via email within 1–2 business days.',
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
