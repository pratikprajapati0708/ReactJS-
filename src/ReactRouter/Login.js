import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginUser() {
    const login = ()=>{
        localStorage.setItem('login',true);
        navigate('/');
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/');
        }
    })
  return (
    <div>
        <input type='text' placeholder='input name'/>
        <br/>
        <input type='password' placeholder='password'/>
        <br/> 
        <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginUser