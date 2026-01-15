import axios from 'axios'; 

const API_BASE = import.meta.env.VITE_SERVER;

export const register = async (registrationData) => {
  try {
    const res = await axios.post(`${API_BASE}/api/registration/register`,registrationData);
    return res.data;
  } catch (error){
    console.log(error);
    const res ={
      message: "The server is currently busy due to high traffic. Please try again in a few moments.",
      success:false,
    }
    return res;
  }
}