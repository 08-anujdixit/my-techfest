import axios from 'axios'; 
const API_BASE = import.meta.env.VITE_SERVER;

export const getUserInfo = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    
    return (res.data);
  } catch (error) {
    console.error(error);
  }
}