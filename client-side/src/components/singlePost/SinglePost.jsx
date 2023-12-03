import { useLocation } from "react-router-dom";
import "./singlepost.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux"; 
const baseURL = "http://localhost:5000/api/";


export default function SinglePost() {
  const user=useSelector((state)=>state.user.user)
  const location = useLocation("");
  const [myPost, setMyPost] = useState({});
  // console.log(location.pathname.slice(6))
  const path = location.pathname.slice(6);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const singlePost = await axios.get(`/post/get/${path}`, { baseURL });
        console.log(singlePost);
         setMyPost(singlePost.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [path]);
  console.log(myPost)
  return (
    <div id='single-post'>
      <div id='single-post-title-layout'>
        {" "}
        <span id='single-post-title'>{myPost.title}</span>
      </div>

      <div id='single-post-img-layout'>
        { myPost.photo && <img
          src={myPost.photo}
          alt=''
          id='single-post-img'
        />}
        <div id='single-post-img-details'>
          {console.log(myPost.catagories)}

          {myPost.catagories &&
            myPost.catagories.map((cat) => (
              <span
                key={cat}
                id='single-post-category'>
                {cat}
              </span>
            ))}
          <span id='single-post-date'>created on : {  myPost.createdAt?.split("T")[0]} </span>
          {user ? (
            <div id='single-post-icons'>
              {" "}
              <i className='fa-solid fa-pen-to-square edit-blog'></i>
              <i className='fa-solid fa-trash delete-blog'></i>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div id='single-post-desc-layout'>
        <span id='single-post-desc-author'>
          Author: <Link  to={`/?user=${myPost.userName}`} user={myPost.userName}><span>{myPost.userName} </span></Link>
        </span>
        <p id='single-post-para-desc'>{myPost.desc}</p>
      </div>
    </div>
  );
}
