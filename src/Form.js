import React, { useState } from 'react'

function Form() {
    function getData(e){
        console.log(name,select,tnc);
        e.preventDefault();
    }
    const[name,getname] = useState("");
    const[select,getselect] = useState("");
    const[tnc,settnc] = useState(false);
    return (
        <div>
            <h1>Handling Form Submit in React</h1>
            <form onSubmit={getData}>
                <input type='text' placeholder='enter name' onChange={(e)=>getname(e.target.value)} />
                <select onChange={(e)=>settnc(e.target.value)}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <input type='checkbox' onChange={(e)=>getselect(e.target.checked)} /><span>Accept terms and conditions</span>
                <br></br>
                <input type='submit'/>
            </form>

        </div>
    )
}

export default Form