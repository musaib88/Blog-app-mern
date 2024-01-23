import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./singlepost.css";
import Alert from "../alert/Alert";
import Select from "react-select";

export default function SinglePost() {
  const baseURL = "http://localhost:5000/api/";
  const token = localStorage.getItem("token");
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  console.log(`hello${user.userName}`);
  const location = useLocation();
  const [myPost, setMyPost] = useState({});
  const path = location.pathname.slice(6);
  const [updatePost, setUpdatePost] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedImg, setUpdatedImg] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");
  const [viewImg, setViewImg] = useState("");
  const [updatedCatagories, setUpdatedCatagories] = useState([]);

  const handleDeleteCheck = () => {
    setDeleteCheck(!deleteCheck);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const singlePost = await axios.get(`/post/get/${path}`, { baseURL });
        setMyPost(singlePost.data);
        setUpdatedTitle(singlePost.data.title);
        setUpdatedImg(singlePost.data.photo);
        setUpdatedDesc(singlePost.data.desc);
        setUpdatedCatagories(singlePost.data.catagories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [path, updatePost]);

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

  const handleCategoryChange = (selectedValues) => {
    let updatedcatss = [];
    selectedValues.map((cat) => {
      updatedcatss.push(cat.value);

      return null;
    });
    setUpdatedCatagories(updatedcatss)
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
      setDeleteCheck(!deleteCheck);
      setDeleteSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const updatemyPost = async (e) => {
    const checkToken = localStorage.getItem("token");
    e.preventDefault();
    const updatedForm = new FormData();
    updatedForm.append("title", updatedTitle);
    updatedForm.append("desc", updatedDesc);
    updatedForm.append("file", updatedImg);
    updatedForm.append("catagories",updatedCatagories)
    updatedForm.append("oldpicUrl", myPost.photo);

    try {
      const res = await axios.put(`/post/update/${myPost._id}`, updatedForm, {
        baseURL: baseURL,
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      });

      console.log("Response:", res.data);
      setUpdatePost(false);
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Post not updated");
    }
  };

  return (
    <div id='single-post'>
      {deleteSuccess && <Alert message={"Deleted successfully.."} />}

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
              <div style={{ marginTop: "20px" }}>
                {updatedCatagories.map((cat)=>{
                  return (
                    <span className="updated-cats-view-spans"
                    key={cat}
                    >

                      {cat}
                    </span>
                  )
                })}
              </div>
            </div>

            <div id='title-desc-container'>
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
              <Select
                id='catagory-options-write-select'
                isMulti
                options={categories_list.map((cat) => ({
                  value: cat,
                  label: cat,
                }))}
                placeholder='Select up to 3 categories...'
                onChange={handleCategoryChange}
              />

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
              <span id='single-post-date'>
                created on : {myPost.createdAt?.split("T")[0]}{" "}
              </span>
              {user.userName === myPost.userName ? (
                <div id='single-post-icons'>
                  <i
                    className='fa-solid fa-pen-to-square edit-blog'
                    onClick={() => setUpdatePost(true)}></i>
                  <i
                    className='fa-solid fa-trash delete-blog'
                    onClick={handleDeleteCheck}></i>
                </div>
              ) : (
                ""
              )}
            </div>
            {deleteCheck && (
              <div id='delete-check-permission'>
                <p>Are you sure you want to delete??</p>
                <span onClick={deletePost}>Yes</span>
                <span onClick={handleDeleteCheck}>No</span>
              </div>
            )}
          </div>

          <div id='single-post-desc-layout'>

            <div style={{textAlign:'center'}}> {updatedCatagories.map(cat=>{
              return(
                 <span className="updated-cats-view-spans">{cat}</span>)
            })} </div>
            <span id='single-post-desc-author'>
              Author:
              <Link
                to={`/?user=${myPost.userName}`}
                className='link'>
                {myPost.userName}
              </Link>
            </span>
            <p
              id='single-post-para-desc'
              style={{ whiteSpace: "pre-line" }}>
              {myPost.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
