import './write.css';
import Navbar from "../../components/navbar/Navbar";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Write() {
const baseURL = 'http://localhost:5000/api/';
const navigate=useNavigate()
const [upFile,setUpFile]=useState()
const [formPost,setFormPost]=useState({})
 
const [post,setPost]=useState({
  title:"",
  desc:"",
  photo:""
})

  const uploadpost=async (e)=>{
    e.preventDefault(e)
    console.log('hello')
    if(upFile){
      const data= new FormData();
      data.append('file',upFile)
    try {
      const  imgPromise= await axios.post('/upload',data,{baseURL})
       console.log(imgPromise.data)
       

      
    } catch (error) {
      console.log("somthing wrong in image")
      
    }
  }


  }





const handleFormChange=(e)=>{
    setFormPost({...formPost,[e.target.name]:e.target.value})


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
       <form  className='write-form' onSubmit={uploadpost}   >
        <div className='write-form-items'>
            <label htmlFor="write-image" className='image-label'> Upload image </label>
         <input type="file"  id='write-image' name='file' accept='image/*'  className='file-blog-input' onChange={handImgChange } />
         <input type="text"  placeholder='Your title ' name='title' className='title-place-write' onChange={handleFormChange}/>
         
        </div>
        <div className='write-form-items'>
            <textarea  className='write-desc-text'  name='desc' type='text' placeholder='write your thoughts' onChange={handleFormChange}  ></textarea>
        </div>
          <button id='publish-blog' type='submit' className='publish-button'>Publish</button>
       </form>
       </div>
      

    </div>
  )
}
