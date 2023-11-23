import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Home() {
    const location = useLocation();
    console.log(location);
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