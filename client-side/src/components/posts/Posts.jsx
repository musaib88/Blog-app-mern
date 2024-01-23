import React, { useRef, useState } from 'react';
import './posts.css';
import Post from '../post/Post';

export default function Posts({ posts }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const postsContainerRef = useRef(null);

  const handleNextPosts = () => {
    if (endIndex + 6 <= posts.length) {
      setStartIndex(startIndex + 6);
      setEndIndex(endIndex + 6);
    } else if (startIndex + 6 < posts.length) {
      // If there are fewer than 6 posts remaining, adjust the indices to show the remaining posts
      setStartIndex(posts.length - 6);
      setEndIndex(posts.length);
      
    }
    postsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePreviousPosts = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
      setEndIndex(endIndex - 6);
    } else {
      // Adjust the logic to handle cases where startIndex is less than 6
      setStartIndex(0);
      setEndIndex(Math.min(6, posts.length));
    }
    postsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='posts-layout' ref={postsContainerRef}>
      {posts.length === 0 && (
        <div id='no-posts-warning'>
          <span>Oops, no results found</span>
        </div>
      )}

      {posts.slice(startIndex, endIndex).map((onepost) => (
        <Post post={onepost} key={onepost.id}></Post>
      ))}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <button className='manage-posts-view' onClick={handlePreviousPosts}>
          <i className="fa-solid fa-angles-left"></i> Previous
        </button>
        <button className='manage-posts-view' onClick={handleNextPosts}>
          More <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
