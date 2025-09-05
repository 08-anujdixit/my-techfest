import React, { useState,useEffect } from "react";
import "../Custom.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import {signup, verifyEmail} from "../services/authService.js";
import Button from "./Button";

const SignUp = () => {
  
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    college:"",
    email: "",
    phone:"",
    password: "",
    confirmPassword: "",
  });
  
  const [otp,setOtp] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  //VISIBILITY CHANGING FOR OTP AND SIGN UP
  const [visibility, setVisibility] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await signup(formData);
      if (res) {
        if(res.success){
          alert(res.message);
          setVisibility((prev)=>!prev);
        }
        else{
          alert(res.message);
        }
      }
    } catch (error) {
      console.error(`Error during signup :: ${error}`);
    }
  };

  const verify = async () => {
    try {
      const res = await verifyEmail({otp:otp});
      if(res.success){
        navigate('/login');
      }
      else{
        console.log(`unsuccessful-${res.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=>{
    if(otp.length>5) verify();
  },[(otp),setOtp]);
  
  
  return (
    <div className="signup-page flex justify-center items-center h-[100vh]">
      <container className="bg-grad p-[1px] rounded-[20px]">
        <div className="login-container">
          <div className="w-auto h-auto flex items-end justify-between p-2">
            <h1 className="text-grad font-bold ">Sign Up</h1>
            <Link to="/">
              <Logo
                h="h-[4rem]"
                w="w-[4rem]"
                custom_style="rounded-full animate-[spin_7s_linear_infinite]"
              />
            </Link>
          </div>
          {
          visibility?
          (
            <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="input-field">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </div>
            {/* Email */}
            <div className="input-field">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Contact Number */}
            <div className="input-field">
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            {/* College */}
            <div className="input-field">
              <input
                id="college"
                name="college"
                type="text"
                placeholder="College/Institute Name"
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
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {/* Confirm Password */}
            <div className="input-field">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {/* Redirect to Login */}
            <div>
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-grad">
                  Login
                </Link>
              </p>
            </div>

            {/* Submit */}
            <Button 
            css='my-4'
            type="submit">
              Sign Up
            </Button>
          </form>):
          (
            <form>
            {/* Username */}
            <div className="input-field">
              <input
                id="otp"
                name="otp"
                type="text"
                placeholder="Enter Your OTP"
                value={otp}
                onChange={(e)=>{
                  setOtp(e.target.value)
                }}
                required
              />
            </div>
          </form>
          )
          }
        </div>
      </container>
    </div>
  );
}

export default SignUp;