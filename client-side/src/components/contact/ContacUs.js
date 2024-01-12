import React from 'react'
import './contactus.css'

export default function ContacUs() {
  return (
    <div id='contact-us-sidebar'>

       <span id='contact-us-heading'>Contact Us</span>
        <form id='form-contact-us'>
            <label htmlFor='username-contact' className='label-contact'> Your Name</label>
          <input type='text'  id='username-contact' placeholder='enter your fullname' required/>
          <label htmlFor='contact-us-email' className='label-contact' >Email</label>
          <input type='email' id='contact-us-email' placeholder='enter your email' required/>
          <span id='message-head-contact'>Your message</span>
          <textarea  id='message-contact-us' required/>
          <button type='submit' id='form-submit-btn-contact'>send</button>

        </form>
    </div>
  )
}
