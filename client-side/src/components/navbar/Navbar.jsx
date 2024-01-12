import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../../redux/slices/userSlice";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [searchQuery,setSearchQuery]=useState("");
  const navigate=useNavigate();
  const [scrollY,setScrollY]=useState(0)

  const user = useSelector((state) => state.user.user);
  const userObj = useSelector((state) => state.user.userData);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
    const handleBlur=()=>{
      setScrollY(window.scrollY)


    }

    window.addEventListener("scroll",handleBlur)


  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      const baseURL = "http://localhost:5000/api/";

      try {
        const res = await axios.get("/user/get", {
          headers: {
            Authorization: "bearer " + token,
          },
          baseURL,
        });
        console.log(res.data)
        dispatch(setUser(res.data));
      } catch (error) {
        console.log("Something went wrong with the token verification");
      }
    };
    verifyToken();
  }, [dispatch, token]);

 const  handleSearch=(e)=>{
     e.preventDefault()
    navigate(`/?search=${searchQuery}`)
    
  }

  const [menu, setMenu] = useState(false);

  const showMobileMenu = () => {
    setMenu(!menu);
  };

  const userLogout = () => {
    dispatch(clearUser());
    localStorage.setItem("token", "");
  };

  return (
    <>
      <div id='nav-bar-blog-top' onScroll={()=>console.log('blur')}>
        <div className='navleft'>
          <i className='icon-media fa-brands fa-instagram'></i>
          <i className='icon-media fa-brands fa-x-twitter'></i>
          <i className='icon-media fa-brands fa-facebook'></i>
        </div>
        <div className='navmid '>
          <ul className='nav-mid-list'>
            <li className='nav-mid-items'>
              <Link to='/' className='link'>
                Home
              </Link>
            </li>
            <li className='nav-mid-items'>
              <Link to='/write' className='link'>
                Write
              </Link>
            </li>
            <li className='nav-mid-items'>
              <Link to='/contact' className='link'>
                Contact
              </Link>
            </li>
            <li className='nav-mid-items'>
              <Link to='/about' className='link'>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav-right'>
          <div>
            <form action=''>
              <input
                type='text'
                id='search-posts-input'
                placeholder='Search'
                className='search-input-nav'
                onChange={(e)=>setSearchQuery(e.target.value)}
              />
              <button type='submit' id='button-search-nav' onClick={handleSearch} >
                <i className='right-nav-icons fa-solid fa-magnifying-glass'></i>
              </button>
            </form>
          </div>
          <div id='login-logout-nav'>
            <Link to='/login' className='link'>
              {!user && <span>Login</span>}
            </Link>
            <Link to='/' className='link'>
              {user && <span onClick={userLogout}>Logout</span>}
            </Link>
          </div>
           {user &&
          <Link to='/settings' className='link'>
            <div>
              <img src={userObj?.profilePic || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"} alt='' className='profile-logo' />
            </div>
          </Link>}

          <div className='menu-mob'>
            {menu ? (
              <i
                className='fa-solid fa-xmark right-nav-cross-icon'
                onClick={showMobileMenu}
              ></i>
            ) : (
              <i
                className='menu-bar-mobile right-nav-icons fa-solid fa-bars'
                onClick={showMobileMenu}
              ></i>
            )}
          </div>
        </div>
      </div>
      <div id={menu ? "mobile-mid-nav" : "mobile-mid-nav-hide"}>
        <ul className='nav-mid-list-mobile'>
          <li className='nav-mid-items-mobile'>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li className='nav-mid-items-mobile'>
            <Link to='/write' className='link'>
              Write
            </Link>
          </li>
          <li className='nav-mid-items-mobile'>
            <Link to='/contact' className='link'>
              Contact
            </Link>
          </li>
          <li className='nav-mid-items-mobile'>
            <Link to='/about' className='link'>
              About
            </Link>
          </li>
          <li className='nav-mid-items-mobile'>
            <div>
            <Link to='/login' className='link'>
              {!user && <span>Login</span>}
            </Link>
            <Link to='/' className='link'>
              {user && <span onClick={userLogout}>Logout</span>}
            </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
