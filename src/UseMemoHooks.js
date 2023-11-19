import React, { useState } from 'react'

function UseMemoHooks() {
    const[count,setcount]=useState(0);
    const[mcount,setmcount]=useState(10);
  return (
    <div>
        <h1>{count}</h1>
        <h1>{mcount}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increase count</button>
        <button onClick={()=>setmcount(mcount*10)}>Multiply Count</button>
    </div>
  )
}

export default UseMemoHooks

//Used to stip the rerender of the page