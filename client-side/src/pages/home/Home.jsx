import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <div id='feed'>
      <Posts></Posts>
      <Sidebar></Sidebar>
    
    </div>
    </>
  )
}
