import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
// const jtoken=require('jsonwebtoken')
const baseURL = 'http://localhost:5000/api/';
const token = localStorage.getItem("token");
if(token){
  console.log("logged in ", token)
}

export default function Home() {
 
  





  const location=useLocation()
  // console.log(location.search.split("=")[0])
  const usr=location.search?.split("=")[0].slice(1)

  const qr=location.search?.split("=")[1]

   const [posts,setPosts]=useState([])
     useEffect(()=>{
      const fetchPosts= async ()=>{
        let response;
        try{
          if(usr==="user"){
            
            
           response=await axios.get("/post/find?user="+qr,{baseURL})

          }
          else if(usr==="catagory"){
            console.log(usr)
            console.log(qr)


           response=await axios.get("/post/find?catagory="+ qr,{baseURL})

          }
          
          else{
          response=await axios.get("/post/find",{baseURL})}
           
          setPosts(response.data)
        }
          catch(err){
            console.log(err)

          }
      }
      fetchPosts();
     },[location,qr,usr,])
     
  return (
    <>
    <Navbar ></Navbar>
    <Header></Header>
    <div id='feed'>
      <Posts posts={posts}></Posts >
      <Sidebar></Sidebar>
    
    </div>
    </>
  )
}
