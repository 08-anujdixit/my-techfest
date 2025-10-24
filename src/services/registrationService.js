import axios from 'axios'; 

const API_BASE = import.meta.env.VITE_SERVER;

export const register = async (registrationData) => {
  try {
    const res = await axios.post(`${API_BASE}/api/registration/register`,registrationData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}