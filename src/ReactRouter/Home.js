import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const navToPage = (url) =>{
        navigate(url);
    }
  return (
    <div>
        <button onClick={()=>navToPage('/about')}>Go to About Page</button>
    </div>
  )
}

export default Home