import React, { useState, useEffect } from "react";
import { useNavigate, useLocation,  } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./singlepost.css";


const baseURL = "http://localhost:5000/api/";
const token = localStorage.getItem("token");
export default function SinglePost() {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
     console.log(`hello${user.userName}`)
  const location = useLocation();
  const [myPost, setMyPost] = useState({});
  const path = location.pathname.slice(6);
  const [updatePost, setUpdatePost] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedImg, setUpdatedImg] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");
  const [newCat, setNewCat] = useState("");
  const [viewImg, setViewImg] = useState("");
  const [updatedCat, setUpdatedCat] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const singlePost = await axios.get(`/post/get/${path}`, { baseURL });
        setMyPost(singlePost.data);
        setUpdatedTitle(singlePost.data.title);
        setUpdatedImg(singlePost.data.photo);
        setUpdatedDesc(singlePost.data.desc);
        setUpdatedCat(singlePost.data.catagories)
        console.log(singlePost.data.catagories)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [path,updatePost]);

  

  const handleCatvalue = (e) => {
    setNewCat(e.target.value);
  };

  const handleAddCat = () => {
    console.log(updatedCat)
   
     
    setUpdatedCat([...updatedCat,newCat]);
    console.log(updatedCat)
  };

  const handleRemoveCat = () => {
    
     const flitertedCat=updatedCat.slice(0,-1)

     setUpdatedCat(flitertedCat)
    
  };

  const handleUpdateImg = (e) => {
    const file = e.target.files[0];
    setUpdatedImg(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setViewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete(`/post/delete/${myPost._id}`, {
        baseURL: baseURL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Post deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
 
  const updatemyPost = async (e) => {

    const checkToken=localStorage.getItem('token')
    e.preventDefault();
    const updatedForm = new FormData();
    updatedForm.append("title", updatedTitle);
    updatedForm.append("desc", updatedDesc);
    updatedForm.append("file", updatedImg);
    updatedForm.append("catagories", updatedCat);
    console.log(updatedCat)
    updatedForm.append("oldpicUrl", myPost.photo);

    console.log("FormData:", updatedForm);

    try {
        const res = await axios.put(`/post/update/${myPost._id}`, updatedForm, {
            baseURL: baseURL,
            headers: {
                Authorization: `Bearer ${checkToken}`
            }
        });

        // console.log("Response:", res.data);
        
        setUpdatePost(false)
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Post not updated");
    }
};

  return (
    <div id='single-post'>
      {updatePost ? (
        <div id='update-form-layout'>
          <form
            id='updated-form'
            onSubmit={updatemyPost}>
            <div id='update-new-img-div'>
              <img
                id='updated-img-post'
                src={viewImg ? viewImg : updatedImg}
                alt=''
              />
              <input
                type='file'
                accept='image/*'
                onChange={handleUpdateImg}
                
              />
              
              <div>
              <div id='catagories-updated'>
                
                { updatedCat.map((category) =>
                 (
                  <span
                    className='category-post-up12'
                    key={category}
                   >
                    {category}
                  </span>
                ))}
              </div>
              <span id="btn-remove-cat" onClick={handleRemoveCat} >remove</span>

              <input type="text"  placeholder="add or remove Catagory" onChange={handleCatvalue}/>
              <span id="btn-add-cat" onClick={handleAddCat}>add</span>

              </div>
              

            </div>
             <div id="title-desc-container" >
            <label
              htmlFor='updated-title-input-id'
              className='label-updated'>
              Your Title
            </label>
            <div id='update-title'>
              <input
                type='text'
                value={updatedTitle}
                id='updated-title-input-id'
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className='update-input-title'
              />
            </div>

            <label
              htmlFor='updated-post-input'
              className='label-updated'>
              Your Post
            </label>
            <div>
              <textarea
                name='updated-post-desc'
                id='updated-post-input'
                value={updatedDesc}
                onChange={(e) => {
                  setUpdatedDesc(e.target.value);
                }}></textarea>
            </div>
            </div>

            <button
              id='update-post-button'
              type='submit'>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div id='single-post-title-layout'>
            <span id='single-post-title'>{myPost.title}</span>
          </div>

          <div id='single-post-img-layout'>
            {myPost.photo && (
              <img
                src={myPost.photo}
                alt=''
                id='single-post-img'
              />
            )}
            <div id='single-post-img-details'>
              {myPost.catagories &&
                myPost.catagories.map((cat) => (
                  <span
                    key={cat}
                    id='single-post-category'>
                    {cat}
                  </span>
                ))}
              <span id='single-post-date'>
                created on : {myPost.createdAt?.split("T")[0]}{" "}
              </span>
              {user.userName=== myPost.userName ? (
                <div id='single-post-icons'>
                  <i
                    className='fa-solid fa-pen-to-square edit-blog'
                    onClick={() => setUpdatePost(true)}></i>
                  <i
                    className='fa-solid fa-trash delete-blog'
                    onClick={deletePost}></i>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div id='single-post-desc-layout'>
            <span id='single-post-desc-author'>
              Author:{" "}
              <Link to={`/?user=${myPost.userName}`} className="link">{myPost.userName} </Link>
            </span>
            <p id='single-post-para-desc' style={{whiteSpace:'pre-line'}}>{myPost.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
