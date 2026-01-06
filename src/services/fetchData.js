import axios from 'axios'; 

const API_BASE = import.meta.env.VITE_SERVER;

export const fetchRoles = async ()=>{
  try {
    const res = await axios.get(`${API_BASE}/api/fetchdata/fetchroles`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}