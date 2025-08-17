import axios from 'axios'; 

const API_BASE = import.meta.env.VITE_SERVER;

export const login = async (userData) => {
  try {
    const res = await axios.post(`${API_BASE}/auth/login`,userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const signup = async (userData)=>{
  try {
    const res = await axios.post(`${API_BASE}/auth/signup`,userData);
    return res.data;
  } catch (error) {
    alert('error in authService');
  }
}

