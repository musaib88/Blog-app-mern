import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  return ( <Link  to={`/post/${post._id}`} className="link">
    <div id='post-layout'>
      {post.photo &&
      <div id='post-img-layout'>
        <img
          src={post.photo}
          alt=''
          id='post-img'
        />
      </div>}
      <div id='post-details'>
         { post.catagories.map((cat)=>(
          <span id='post-catagory'>{cat}</span>
         ))
        }
        <span id='post-date'> Posted on : {post. createdAt.slice(0,10)  }</span>
      </div>

       <span id='post-title'>  {post.title} </span>
      <p id='post-desc'>
        {post.desc}
      </p>
    </div>
    </Link>
  );
}
