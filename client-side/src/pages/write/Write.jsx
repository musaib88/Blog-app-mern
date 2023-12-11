import './write.css';
import Navbar from "../../components/navbar/Navbar";
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom';



export default function Write() {
const baseURL = 'http://localhost:5000/api/';
const navigate=useNavigate()
const [upFile,setUpFile]=useState({})
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")
const [postData,setPostData]=useState({})


 


  
  const fetchPost= async(e)=>{
    e.preventDefault()
    const formData=new FormData();
    formData.append("title",title)
    formData.append("desc",desc)
    formData.append("file",upFile)
    console.log(formData)
    try {
      const token=localStorage.getItem("token")
      
      const newPost= await axios.post("/post/write",formData,{
        baseURL:baseURL,
        headers:{
        "Authorization":`Bearer ${token}`
        
        
        
      } })
      if(newPost.status===200){
      setPostData(newPost)
      console.log(newPost)
      console.log(newPost?.data._id)
      navigate('/post/'+newPost?.data._id)
      
    }
      
      
    } catch (error) {
      console.log("somthing got wrong",error)
      
    }





  }








const [image,setImage]=useState(null);
 const handImgChange=(e)=>{
  const file=e.target.files[0]
   setUpFile(file)

  if(file){
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  else {
    setImage(null);
  }
};
    
  return (
    
    <div id='writePage'>
      <Navbar></Navbar>
      <div id='wite-form-layout'>
      <div id='write-image-container'> <img src={image} alt="" id='write-blog-img' /></div>
       <form  className='write-form' onSubmit={fetchPost}   >
        <div className='write-form-items'>
            <label htmlFor="write-image" className='image-label'> Upload image </label>
         <input type="file"  id='write-image' name='file' accept='image/*'  className='file-blog-input' onChange={handImgChange } />
         <input type="text"  placeholder='Your title ' name='title' className='title-place-write' onChange={(e)=>setTitle(e.target.value)}/>
         
        </div>
        <div className='write-form-items'>
            <textarea  className='write-desc-text'  name='desc' type='text' placeholder='write your thoughts' onChange={(e)=>setDesc(e.target.value)} ></textarea>
        </div>
         <button id='publish-blog' type='submit' className='publish-button'> Publish</button>
       </form>
       </div>
      

    </div>
  )
}
