import "./settings.css";
import NavBar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
export default function Settings() {
  const dispatch=useDispatch()
  
  const [toogle,setToogle]=useState(false)
  const token=localStorage.getItem('token')

const baseURL = 'http://localhost:5000/api/';
const navigate=useNavigate()
const user=useSelector(state=>state.user.userData)
// console.log(user.userName)
const [profilePic,setProfilePic]=useState(user.profilePic)
const [email,setEmail]=useState(user.email)
const [userName,setUserName]=useState(user.userName)
const [imgFile,setImgFile]=useState()
const [newPassword,setNewPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const [oldPassword,setOldPassword]=useState('')
 const [error,setError]=useState('')

     
  const handleDeleteAcc=async()=>{

     const permit =prompt("do you want to delete account")
     if(permit==="yes"){
         console.log("in handle delete")
      try {
        const response=  await axios.delete("/user/delete",{
          baseURL:baseURL,
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        localStorage.setItem('token',"")
        dispatch(clearUser())
        navigate('/')
       
        
       } 
       catch (error) {
        console.log(error)
        
       }
     }


   
    


  }

  const handleUpdateSettings= async (e)=>{
    e.preventDefault()

    if(newPassword===confirmPassword){
      const settingData=new FormData();
      if(imgFile){
      settingData.append('file',imgFile)}
      settingData.append('oldPassword',oldPassword)
      settingData.append('newPassword',newPassword)
      settingData.append('email',email)
      console.log(settingData)

      try {

        const res= await axios.put('/user/update',settingData,{baseURL:baseURL,headers:{
          Authorization:`Bearer ${token}`
        }
         
        })
        localStorage.setItem('token',"")
        dispatch(clearUser())
        
        navigate('/')
       
        
      } catch (error) {
        setError("some error")
        console.log(error)
        
      }



    }
    else {
      setError("password did not match")

    }
    
       

  }
  const handleUploadImg=(e)=>{
     const file=e.target.files[0];
     setImgFile(file)
     const fileReader=new FileReader()
     if(file){
     fileReader.onloadend=()=>{
      setProfilePic(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }
    
    

  }

  const handelToggel=()=>{
    setToogle(!toogle)
  }
  return (
    <div>
      <NavBar></NavBar>
      <div id='settings-layout'>
        <form  onSubmit={handleUpdateSettings} >
          <div id='setting-name-update'>
            <h1>My Account</h1>
            <span  onClick={handleDeleteAcc} > Delete Account </span>
          </div>
          
          <div id='setting-profile-img'>
            <img
              src={  profilePic || "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png" } 
              alt=''
            />
            <label htmlFor="image-file-profile"><i class="fa-solid fa-pen pen-icon-profile"></i>
            <i class="fa-solid fa-user"></i></label>
            <input type="file" accept='image/*' id="image-file-profile" style={{display:'none'}} onChange={handleUploadImg} />

          </div>

          <div id='account-details'>
          <label
              htmlFor='username-settings'
              className='labels-settings'>
              UserName
            </label>
             <span id="username-settings">{userName}</span>
            
            <label
              htmlFor='email-settings'
              className='labels-settings'>
              Email
            </label>

            <input
              type='email'
              id='email-settings'
              placeholder='Enter your email'
              className="input-settings"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

            />
            
            <label
            htmlFor='password-settings'
            className='labels-settings'>
             Enter your old password
          </label>

          <input
            type={toogle?"text":"password"}
            id='password-settings'
            placeholder='Enter your old  password'
            className="input-settings"
            onChange={(e)=>setOldPassword(e.target.value)}
            

          />  
            
            <label
            htmlFor='password-settings'
            className='labels-settings'>
             Enter your  new password
          </label>

          <input
            type={toogle?"text":"password"}
            id='password-settings'
            placeholder='Enter your old  password'
            className="input-settings"
            onChange={(e)=>setNewPassword(e.target.value)}

            

          />  
            <label
              htmlFor='password-settings'
              className='labels-settings'>
              confirm your new password
            </label>
            <div style={{position:'relative'}}>
               <span className="toogle-pass" onClick={handelToggel}>{toogle?"hide":"show" }</span></div>

            <input
            type={toogle?"text":"password"}
              
              id='password-settings'
              placeholder='Enter your  new password'
              className="input-settings"
            onChange={(e)=>setConfirmPassword(e.target.value)}


            />
              

            <button type='submit' id="update-settings-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
