import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import Navbar from '../../components/navbar/Navbar'

export default function Single() {
  return (
    <> <Navbar></Navbar>
    
    <div id='single-post-page'>
        
         <SinglePost></SinglePost>

        <Sidebar></Sidebar>
    </div>
    </>
  )
}
