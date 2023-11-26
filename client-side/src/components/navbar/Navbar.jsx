import { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'
export default function Navbar() {
  const [menu,setMenu]=useState(false)
  const showMobileMenu=()=>{
    setMenu(!menu)
    // console.log(menu)
  }
  const user=false;

  return (
    <>
    <div id='nav-bar-blog-top'>
      <div className="navleft">
      <i className="icon-media fa-brands fa-instagram"></i>
      <i className="icon-media fa-brands fa-x-twitter"></i>
      <i className=" icon-media fa-brands fa-facebook"></i>

          </div>
      <div className="navmid ">
        <ul className='nav-mid-list'>
         
        <li className="nav-mid-items">
          <Link to='/' className='link'>Home</Link>
        </li>
        <li className="nav-mid-items">
        <Link to='/write' className='link'>Write</Link>
        </li>
        <li className="nav-mid-items">
        <Link to='/contact' className='link'>Contact</Link>
        </li>
        <li className="nav-mid-items">
        <Link to='/about' className='link'>About</Link>
        </li>
        <li className="nav-mid-items">
        <Link to= {user?"/":"/login"} className='link'>{user?"Logout":"Login"}</Link>
        </li>
        </ul>
      </div>
      <div className="nav-right">
      <Link to='/settings' className="link">
         <div> <img src="https://picsum.photos/536/354" alt="" className='profile-logo' /></div> 
         </Link>

        <div><i className=" right-nav-icons fa-solid fa-magnifying-glass"></i></div>
        <div className='menu-mob'  >{menu?
        <i className="fa-solid fa-xmark right-nav-cross-icon" onClick={showMobileMenu}></i>:<i className="menu-bar-mobile right-nav-icons fa-solid fa-bars" onClick={showMobileMenu}></i>}
      </div>
      </div>

    </div>
      <div id={menu?"mobile-mid-nav":"mobile-mid-nav-hide"}>
       <ul className='nav-mid-list-mobile'>
         
         <li className="nav-mid-items-mobile">
         <Link to='/' className='link'>Home</Link>
          
         </li>
         <li className="nav-mid-items-mobile">
        <Link to='/write' className='link'>Write</Link>
           
         </li>
         <li className="nav-mid-items-mobile">
        <Link to='/contact' className='link'>Contact</Link>
           
         </li>
         <li className="nav-mid-items-mobile">
        <Link to='/about' className='link'>About</Link>
           
         </li>
         <li className="nav-mid-items-mobile">
        <Link to= {user?"/":"/login"} className='link'>{user?"Logout":"Login"}</Link>
           
         </li>
         </ul>
         
       </div>
    </>
  )
}
