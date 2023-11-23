import React, { useEffect, useState } from 'react'

function FetchAPI() {
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((resp)=>{
                setData(resp);
            })
        })
    },[])
    console.log(data);
  return (
    <div>
<table>
    <tr>
        <td>ID</td>
        <td>Name</td>
    </tr>
    {
        data.map((item)=>
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
        </tr>
        )
    }
</table>
    </div>
  )
}

export default FetchAPI