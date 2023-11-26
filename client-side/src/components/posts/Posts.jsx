import React from 'react'
import './posts.css'
import Post from '../post/Post'

export default function Posts({posts}) {
  return (
    <div id='posts-layout'>
       { posts.map((p)=>(
        <Post post={p}></Post>
       ))}

        
      
    
    
    </div>
  )
}
