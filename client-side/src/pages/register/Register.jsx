import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div id='register-page'>
    <Navbar></Navbar>
    <div id='register-layout'>
      
      <button id='Register-button'><Link to='/login' className='link'>Login</Link></button>
         <div className='register-form-layout-div'>
           <form action="" id='form-layout-form'>
            <div id='register-head-form'>
            <span>Register</span>
            </div>
            <label htmlFor="username-register-input" className='inputs-form-register-label'> Username</label>
            <input type="text" placeholder='enter your username' id='username-register-input' className='inputs-form-register' />

            <label htmlFor="email-register-input" className='inputs-form-register-label'> Email</label>
            <input type="email" placeholder='enter your email' id='email-register-input' className='inputs-form-register' />
            <label htmlFor="password-register-input" className='inputs-form-register-label'>Password</label>
            <input type="password"  placeholder='enter your password' id='password-register-input' className='inputs-form-register'/>
             <button  type='submit' id='Register-button-form' >Register</button>

           </form>

         </div>

    </div>

  </div>
  )
}
