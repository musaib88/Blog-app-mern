import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ContacUs from "../contact/ContacUs";
const baseURL = "http://localhost:5000/api/";

console.log("calling side bar");
export default function Sidebar() {
  // const [cats,setCats]=useState([])
  // const [fetchingCat,setFetchingCat]=useState(true)
  //  useEffect(()=>{
  //       const fetchCats=async()=>{
  //         try {
  //         const response=await axios.get('/post/find/catagories',{baseURL})
  //         setCats(response.data)
  //          setFetchingCat(false)

  //         } catch (error) {
  //           console.log(error)

  //         }
  //       }
  //       if(fetchingCat){
  //       fetchCats()}
  //  },)
  const categories_list = [
    "Technology",
    "Travel",
    "Food",
    "Health",
    "Fitness",
    "Lifestyle",
    "Science",
    "Business ",
    " Finance",
    "Education",
    "Arts ",
    " Culture",
    "Sports",
    "Entertainment",
    "Science ",
    "Social-Media",
    "Photography",
    "Politics",
  ];
  return (
    <div id='sidebar'>
      <div className='side-bar-item'>
        <span>About Us </span>
        <div>
          <img
            src='https://picsum.photos/536/354'
            alt=''
          />
        </div>
        <p>
          Hello, dear readers! We are thrilled to have you here on World Blogs,
          your go-to destination for insightful, inspiring, and engaging
          content. Whether you're a seasoned enthusiast or a curious newcomer,
          we invite you to join us on a journey of discovery, learning, and
          exploration.
        </p>
      </div>
      <div className='side-bar-item'>
        <span> Catagories </span>

        <div id='catagory-list-sidebar'>
          {categories_list.map((cat) => (
            <div
              className='catagory-item-list'
              key={cat}>
              <Link
                to={`/?catagory=${cat}`}
                className='link'>
                {" "}
                {cat}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='side-bar-item'>
        <span> Follow Us</span>

        <div id='icon-list-sidebar'>
          <i className='icon-media-sidebar fa-brands fa-instagram'></i>
          <i className='icon-media-sidebar fa-brands fa-x-twitter'></i>
          <i className=' icon-media-sidebar  fa-brands fa-facebook'></i>
        </div>

        <ContacUs></ContacUs>
      </div>
    </div>
  );
}
