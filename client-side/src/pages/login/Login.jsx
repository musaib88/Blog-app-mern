import "./login.css";
import { Link,useNavigate} from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import {setUser,clearUser} from '../../redux/slices/userSlice'
import Alert from "../../components/alert/Alert";

export default function Login() {
  const baseURL = "http://localhost:5000/api/";
  const dispatch=useDispatch()
  //  const user=useSelector((state)=>state.user.user);
  const [error,seterror]=useState(false)
  const [errMessage,setErrMessage]=useState(null)
   const navigate=useNavigate()
  const [toggle, setToggle] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(loginForm)
  const submitLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("auth/login", loginForm, { baseURL });
      const jwtToken=res.data.token;
      // console.log(jwtToken)
      localStorage.setItem("token",jwtToken)
      dispatch(setUser())
      navigate('/')
      
    } catch (error) { 

       if(error.response.status===401 || 500){

         setErrMessage(error.response.data)
         seterror(true)
          setTimeout(()=>{
            seterror(false)
            setErrMessage(null)
          },5000)
       }
      
      console.log("somthing went wrong",error);
      console.log(error.response.data)

    }
  };
    
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div id='login-page'>
      <Navbar></Navbar>
      <div id='login-layout'>
        { error && <Alert message={errMessage}></Alert>}
        <button id='login-button'>
          {" "}
          <Link
            to='/register'
            className='link'>
            Register
          </Link>
        </button>
        <div className='login-form-layout-div'>
          <form
            id='form-layout-form'
            
            onSubmit={submitLogin}
            

            >
            <div id='login-head-form'>
              <span>Login</span>
            </div>
            <label
              htmlFor='userName-login-input'
              className='inputs-form-login-label'>
              username
            </label>
            <input
              type='text'
              placeholder='enter your username '
              onChange={handleChange}
              id='userName-login-input'
              name='userName'
              className='inputs-form-login'
              required
            />
            <label
              htmlFor='password-login-input'
              className='inputs-form-login-label'>
              Password
            </label>
            <input
              type={toggle ? "text" : "password"}
              placeholder='enter your password'
              onChangeCapture={handleChange}
              id='password-login-input'
              name='password'
              className='inputs-form-login'
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
              id='login-button-form'>
              {" "}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
