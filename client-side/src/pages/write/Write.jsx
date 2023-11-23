import './write.css';
import Navbar from "../../components/navbar/Navbar";
import { useState } from 'react';



export default function Write() {
const [image,setImage]=useState(null);
 const handImgChange=(e)=>{
  const file=e.target.files[0]
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
       <form  className='write-form'>
        <div className='write-form-items'>
            <label htmlFor="write-image" className='image-label'> Upload image </label>
         <input type="file"  id='write-image' accept='image/*'  className='file-blog-input' onChange={handImgChange}/>
         <input type="text"  placeholder='Your title '  className='title-place-write'/>
         
        </div>
        <div className='write-form-items'>
            <textarea  className='write-desc-text'  type='text' placeholder='write your thoughts' ></textarea>
        </div>
         <button id='publish-blog' type='submit' className='publish-button'>Publish</button>
       </form>
       </div>
      

    </div>
  )
}
