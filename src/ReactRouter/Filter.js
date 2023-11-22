import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
    const[searchParams,setSearchParams]= useSearchParams();
    const age = searchParams.get('age');
    const city = searchParams.get('city');
  return (
    <div>
        <h1>Filter Page</h1>
        <h3>Age is:{age}</h3>
        <h3>City is:{city}</h3>
        <input type='text' onChange={(e)=>setSearchParams({text:e.target.value})} SET TEXT IN QUERY PARAMS/>
    </div>
  )
}

export default Filter