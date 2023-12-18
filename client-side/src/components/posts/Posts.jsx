import React from 'react'
import './posts.css'
import Post from '../post/Post'

export default function Posts({posts}) {
  return (
    <div id='posts-layout'>
       {posts.length===0 && <div id='no-posts-warning'>
        <span> oops no results found</span>
        </div>
        }

       { posts.map((p)=>(
        <Post post={p}></Post>
       ))}

        
      
    
    
    </div>
  )
}
