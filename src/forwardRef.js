import React, { useRef } from 'react'
import Users from './Users';

function forwardRef() {
    let currentvalue = useRef(null);
    function UpdateRef(){
        currentvalue.current.value = "100";
        currentvalue.current.style.color ="blue";
        currentvalue.current.style.focus();
    }
    return (
        <div>
            <h1>forwardRef</h1>
            <Users ref={inputRef}/>
            <button onClick={UpdateRef}>Update component</button>
        </div>
    )
}

export default forwardRef