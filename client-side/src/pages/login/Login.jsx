import './login.css'
import { Link } from 'react-router-dom'


import Navbar from '../../components/navbar/Navbar'
export default function Login() {
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
              <label htmlFor="email-login-input" className='inputs-form-login-label'> Email</label>
              <input type="email" placeholder='enter your email' id='email-login-input' className='inputs-form-login' />
              <label htmlFor="password-login-input" className='inputs-form-login-label'>Password</label>
              <input type="password"  placeholder='enter your password' id='password-login-input' className='inputs-form-login'/>
               <button  type='submit' id='login-button-form'>  Login</button>

             </form>

           </div>

      </div>

    </div>
  )
}
