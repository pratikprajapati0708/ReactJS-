import React, { useState } from 'react'

function PostAPI() {
    const[title,setTitle]=useState("");
    function saveUser(){
        console.log({title});
        let data = {title};
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log("result",result);
        })
    }
  return (
    <div>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} name='title'/>
        <button onClick={saveUser}>Save New User</button>
    </div>
  )
}

export default PostAPI