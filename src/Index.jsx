


export const Index =()=>{
   const res=  axios.get('https://dummyjson.com/posts')
    console.log(res.data.posts);













    return (<>

        {res}



    </>)
}