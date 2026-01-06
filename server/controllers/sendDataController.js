import Registration from '../models/Registration.js';
import dotenv from 'dotenv';
dotenv.config();

export const sendRoles= async (req, res)=>{
  try {
    const roles = await Registration.find({enrolledEvent:'Last Protocol'});
    
    const rolesData = [];
    for(let i=0; i<roles.length; i++)
      rolesData.push((roles[i]).raftDebateRole);
    
    res.status(201).json({
        message:'successfull',
        success:true,
        rolesData
      });
    
  } catch (error) {
    console.error(error);
  }
}