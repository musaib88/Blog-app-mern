import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
const baseURL = 'http://localhost:5000/api/';

export default function Register() {
  const [toggle, setToggle] = useState(false);
  const [isRegistraionsSucessful,setIsRegistrationSuccessful]=useState(false)

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleformChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit= async(e)=>{
  console.log(formData)

    e.preventDefault()
    try {
    const res= await axios.post( "auth/register",formData,{baseURL})
    // console.log("uploaded successfully",res.data)
     setIsRegistrationSuccessful(true)

      
    } catch (error) {
      console.log("unsuccessful")
      
    }

    
  }
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id='register-page'>
      <Navbar></Navbar>
      <div id='register-layout'>
        {isRegistraionsSucessful &&
      <div style={{position:'absolute',top:'10%',left:'37%'}}> 
        <span id="reg-pop">your registration was sucessful  </span>
         </div>}
        <button id='Register-button'>
          <Link
            to='/login'
            className='link'>
            Login
          </Link>
        </button>
        <div className='register-form-layout-div'>
          <form
          
            action=''
            id='form-layout-form'
             onSubmit={handleSubmit}
            >

            <div id='register-head-form'>

              <span>Register</span>
            </div>
            
            <label
              htmlFor='username-register-input'
              className='inputs-form-register-label'>
              {" "}
              Username
            </label>
            <input
              type='text'
              placeholder='enter your username'
              value={formData.userName}
              name='userName'
              id='username-register-input'
              onChange={handleformChange}
              className='inputs-form-register'
              required

            />

            <label
              htmlFor='email-register-input'
              className='inputs-form-register-label'>
              {" "}
              Email
            </label>
            <input
              type='email'
              

              placeholder='enter your email'
              name='email'
              value={formData.email}
              id='email-register-input'
              onChange={handleformChange}
              className='inputs-form-register'
              required

            />
            <label
              htmlFor='password-register-input'
              className='inputs-form-register-label'>
              Password
            </label>
            <input
              

              type={toggle ? "text" : "password"}
              placeholder='enter your password'
              {...formData.password}
              name='password'
              id='password-register-input'
              onChange={handleformChange}
              className='inputs-form-register'
              required

            />
            <div style={{ position: "relative" }}>
              <span id='show-pass'>
                {" "}
                <i
                  class='fa-solid fa-eye pass-eye'
                  style={toggle ? { color: "blue" } : { color: "black" }}
                  onClick={onToggle}></i>{" "}
              </span>
            </div>
            <button
              type='submit'
              id='Register-button-form' 
              
              >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
