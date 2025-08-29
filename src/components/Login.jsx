import React, { useState } from "react";
import "../Custom.css";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import Logo from "./Logo";
import { login } from '../services/authService.js'
import { useDispatch } from "react-redux"
import { storeUser } from '../store/userStore/userSlice';
import Button from './Button'

export default function Login() {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //WILL CALL LOGIN SERVICE
    try {
      const res = await login(formData);
      if(res.success){
        alert(res.message);
        dispatch(storeUser(res.user));
        navigate("/");
      }
      else{
        alert(res.message);
      }
    } catch (error) {
      console.error(`ERROR :: ${error}`);
    }
  
  };

  return (
    <div className="login-page flex justify-center items-center h-[100vh]">
      <container className="bg-grad p-[1px] rounded-[20px]">
        <div className="login-container">
          <div 
          className=' w-auto h-auto flex items-end justify-between p-2'
          >
            <h1
            className='text-grad font-bold'
            >Login</h1>
            <Link
            to='/'
            >
              <Logo
              h="h-[4rem]"
              w="w-[4rem]"
              custom_style='rounded-full animate-[spin_7s_linear_infinite] '
              />
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="input-field">
              <input
                id="userId"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
  
            {/* Password */}
            <div className="input-field">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
              {
                showPassword ? <FaEye /> : <FaEyeSlash/>
              }
              </button>
            </div>
  
            {/* Remember me */}
            <div className="options">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />{" "}
                Remember me
              </label>
            </div>
            <div>
              <p className='text-gray-400'>
                Don't have account? <Link 
                to='/signup'
                className='text-grad'
                >Sign Up</Link>
              </p>
            </div>
            {/* Submit */}
            <Button 
            css='my-4'
            type="submit">
              Login
            </Button>
          </form>
        </div>
      </container>
    </div>
  );
}