import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div id='sidebar'>
      <div className="side-bar-item">
        <span>About me </span>
        <div>
        <img src="https://picsum.photos/536/354" alt="" /> 
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium quam consectet Lorem ipsum dolor sit..</p>
      </div>
      <div className="side-bar-item">
        <span> Catagories </span>
        
         <ul id="catagory-list-sidebar">
          <li className="catagory-item-list">Fashion</li>
          <li className="catagory-item-list" >Travel</li>
          <li className="catagory-item-list">Food</li>
          <li className="catagory-item-list" >Tech</li>
          <li  className="catagory-item-list">Stocks</li>
          <li className="catagory-item-list">Crypto</li>

         </ul>
      </div>
      <div className="side-bar-item">
        <span> Follow Us</span>
         
         <div id="icon-list-sidebar">
         

      <i className="icon-media-sidebar fa-brands fa-instagram"></i>
      <i className="icon-media-sidebar fa-brands fa-x-twitter"></i>
      <i className=" icon-media-sidebar  fa-brands fa-facebook"></i>
      </div>

        
      </div>

    </div>
  );
}
