import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios"
import { Link } from "react-router-dom";
import ContacUs from "../contact/ContacUs";
const baseURL = "http://localhost:5000/api/";


export default function Sidebar() {
  const [cats,setCats]=useState([])
     useEffect(()=>{
          const fetchCats=async()=>{
            try {
            const response=await axios.get('/post/find/catagories',{baseURL})
            setCats(response.data)
             console.log(cats)
              
            } catch (error) {
              console.log(error)
              
            }
          }
          fetchCats()
     },[cats])
  return (
    <div id='sidebar'>
      <div className="side-bar-item">
        <span>About Us </span>
        <div>
        <img src="https://picsum.photos/536/354" alt="" /> 
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium quam consectet Lorem ipsum dolor sit..</p>
      </div>
      <div className="side-bar-item">
        <span> Catagories </span>
        
         <div id="catagory-list-sidebar">
          { cats.map((cat)=>(
         <div className="catagory-item-list" key={cat} ><Link to={`/?catagory=${cat}`} className="link"> {cat}</Link></div>
          
          ))}
          

         </div>
      </div>
      <div className="side-bar-item">
        <span> Follow Us</span>
         
         <div id="icon-list-sidebar">
         

      <i className="icon-media-sidebar fa-brands fa-instagram"></i>
      <i className="icon-media-sidebar fa-brands fa-x-twitter"></i>
      <i className=" icon-media-sidebar  fa-brands fa-facebook"></i>
      </div>

        <ContacUs></ContacUs>
      </div>

    </div>
  );
}
