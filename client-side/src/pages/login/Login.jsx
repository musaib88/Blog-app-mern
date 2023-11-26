import './login.css'
import { Link } from 'react-router-dom'


import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react';
export default function Login() {
  const [toggle, setToggle] = useState(false)
  const [loginForm,setLoginForm]=useState({})

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div id='login-page'>
      <Navbar></Navbar>
      <div id='login-layout'>
        
        <button id='login-button'> <Link to='/register' className='link'>Register</Link></button>
           <div className='login-form-layout-div'>
             <form action="" id='form-layout-form'>
              <div id='login-head-form'>
              <span>Login</span>
              </div>
              <label htmlFor="userName-login-input" className='inputs-form-login-label'>username</label>
              <input type="text" placeholder='enter your username ' id='userName-login-input' name='UserName'  className='inputs-form-login' />
              <label htmlFor="password-login-input" className='inputs-form-login-label'>Password</label>
              <input type={toggle ? "text" : "password"} placeholder='enter your password' id='password-login-input' name='password' className='inputs-form-login'/>
              <div style={{ position: "relative" }}>
              <span id='show-pass'>
                {" "}
                <i
                  class='fa-solid fa-eye pass-eye'
                  style={toggle ? { color: "blue" } : { color: "black" }}
                  onClick={onToggle}></i>{" "}
              </span>
            </div>
               <button  type='submit' id='login-button-form'>  Login</button>

             </form>

           </div>

      </div>

    </div>
  )
}
