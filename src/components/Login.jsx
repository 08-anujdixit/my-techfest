import React, { useState } from "react";
import "../Custom.css";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { Link} from "react-router-dom";
import Logo from "./Logo";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="login-page flex justify-center items-center h-[100vh]">

      <container className="bg-grad p-1 rounded-[20px]">
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
              custom_style='rounded-full '
              />
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="input-field">
              <input
                id="userId"
                name="username"
                type="text"
                placeholder="Username"
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
  
            {/* Submit */}
            <button id="logInBtn" className="btn bg-grad" type="submit">
              Login
            </button>
          </form>
        </div>
      </container>
    </div>
  );
}