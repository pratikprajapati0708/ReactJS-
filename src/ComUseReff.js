import React, { useRef } from 'react'

function ComUseReff() {
    let myInputRef = useRef(null);
    function handleInput(){
        myInputRef.current.style.color = "red";
    }
    return (
        <div>
            <h1>UseRef in React</h1>
            <input type='text' ref={myInputRef}/>
            <button onClick={handleInput}>Click</button>
        </div>
    )
}

export default ComUseReff


//UseRef is similar to usestate. Sometimes we dont use usestate everywhere so we can use useRef in place of that