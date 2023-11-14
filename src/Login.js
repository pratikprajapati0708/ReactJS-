import React, { useState } from 'react'

export default function Login() {

    const[user,setuser]= useState("");
    const[password,setpassword] = useState("");
    const[userErr,setUserErr] = useState(false);
    const[psswrdErr,setpssrdErr] = useState(false);
    function checkforvalidation(e){
        if(user.length<3||password.length<3){
            alert("Please enter correct credentials");
        }
        else{
            alert("Form Submitted successfully");
        }
        e.preventDefault();
    }
    function userhandler(e){
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true);
        }else{
            setUserErr(false);
        }
        setuser(item);
    }
    function passwordHandler(e){
        let psswd = e.target.value;
        if(psswd.length<3){
            setpssrdErr(true);
        }
        else{
            setpssrdErr(false);
        }
        setpassword(psswd);
    }
  return (
    <div>
        <form onSubmit={checkforvalidation}>
        <input type='text' placeholder='Enter a name' autoComplete='off' onChange={userhandler}/>{userErr?<span>User Not valid</span>:""}
        <br></br>
        <input type='password' placeholder='please enter password' onChange={passwordHandler} />{psswrdErr?<span>Password not valid</span>:""}
        <br></br>
        <button type='submit'>Submit</button>
        </form> 
    </div>
  )
}
