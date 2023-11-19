//controlled either through JS or ref (DOM)
import React, { useRef } from 'react'

function UncontrolledComponent() {
    let inputval1 = useRef(null);
    let inputval2 = useRef(null);
    function SubmitForm(e){
        e.preventDefault();
        console.warn("value is",inputval1.current.value);
    }
    return (
        <div>
            <h1>UncontrolledComponent</h1>
            <form onSubmit={SubmitForm}>
                <input ref={inputval1} type='text' placeholder='FirstName'></input><br></br>
                <input ref={inputval2} type='text' placeholder='LastName'></input><br></br>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent