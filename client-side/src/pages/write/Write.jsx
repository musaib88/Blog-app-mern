import './write.css';
import Navbar from "../../components/navbar/Navbar";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Select from 'react-select'



export default function Write() {
const baseURL = 'http://localhost:5000/api/';
const navigate=useNavigate()
const [upFile,setUpFile]=useState({})
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")
const [selectedCatagories,setSelectedCatagories]=useState([])
// const [postData,setPostData]=useState({})


 


  
  const fetchPost= async(e)=>{
    e.preventDefault()
    const formData=new FormData();
    formData.append("title",title)
    formData.append("desc",desc)
    formData.append("file",upFile)
    let selectedcat=[]
    selectedCatagories.map(cat=>{
      selectedcat.push(cat.value)
    })
    formData.append("catagories",selectedcat)
    console.log(selectedcat)

    console.log(formData)
    try {
      const token=localStorage.getItem("token")
      
      const newPost= await axios.post("/post/write",formData,{
        baseURL:baseURL,
        headers:{
        "Authorization":`Bearer ${token}`
        
        
        
      } })
      if(newPost.status===200){
      // setPostData(newPost)
      // console.log(newPost)
      // console.log(newPost?.data._id)
      navigate('/post/'+newPost?.data._id)
      
    }
      
      
    } catch (error) {
      console.log("somthing got wrong",error)
      
    }





  }




  const handleCategoryChange = (selectedValues) => {
    setSelectedCatagories(selectedValues)

   
  };



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


const categories = [
  'Technology',
  'Travel',
  'Food',
  'Health',
  'Fitness',
  'Lifestyle',
  'Science',
  'Business ',' Finance',
  'Education',
  'Arts ',' Culture',
  'Sports',
  'Parenting',
  'Science ',' Fantasy',
  'Social-Media',
  'Crafts',
  'Photography'
];

    
  return (
    
    <div id='writePage'>
      <Navbar></Navbar>
      <div id='wite-form-layout'>
      <div id='write-image-container'> <img src={image} alt="" id='write-blog-img' /></div>
       <form  className='write-form' onSubmit={fetchPost}   >
        <div className='write-form-items'>
            <label htmlFor="write-image" className='image-label'> Upload image </label>
         <input type="file"  id='write-image' name='file' accept='image/*'  className='file-blog-input' required onChange={handImgChange } />
         <input type="text"  placeholder='Your title ' name='title' className='title-place-write'  required onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div id='catagory-options-write'>
           <Select
           id='catagory-options-write-select'
           isMulti
           options={categories.map((cat)=>({value:cat,label:cat}))}
           placeholder="Select up to 3 categories..."
           onChange={handleCategoryChange}
           
           />

           
        </div>
        <div className='write-form-items'>
            <textarea  className='write-desc-text'  name='desc' type='text' placeholder='write your thoughts' required onChange={(e)=>setDesc(e.target.value)} ></textarea>
        </div>
         
        
         <button id='publish-blog' type='submit' className='publish-button'> Publish</button>
       </form>
       </div>
      

    </div>
  )
}
