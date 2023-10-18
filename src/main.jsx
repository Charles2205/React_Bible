import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import { Index } from './Index'


const ApiRequest =()=>{
  const [posts,setPost] = useState([])
  useEffect(()=>{
    async function req(){
  const res= await axios.get('https://dummyjson.com/posts')
    setPost(res.data.posts);
    }
    req()
  },[])







  return(<>

      {posts.map((post)=>(
        <div key={post.id}>
        <span>{post.id}-</span> 
        <span>{post.title}</span>
        <br />
        </div>
      ))}
  </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
//  <Index/>
  <ApiRequest/>
)
