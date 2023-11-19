//Handles through states
import React, { useState } from 'react'

function ControlledComponent() {
    const[value,setValue] = useState("");
    return (
        <div>
           <h1>ControlledComponent</h1> 
           <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}></input>
           <h2>{value}</h2>
        </div>
    )
}

export default ControlledComponent