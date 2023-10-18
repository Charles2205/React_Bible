import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import { Index } from './Index'


const ApiRequest =()=>{
  const [post,setPost] = useState([])
  useEffect(()=>{
    async function req(){
  const res= await axios.get('https://dummyjson.com/posts')
    console.log(res.data.posts);
    }
    req()
  },[])







  return(<>
  
  
  </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
//  <Index/>
  <ApiRequest/>
)
