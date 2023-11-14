import React from 'react'

function Functionasprops(props) {
    return (
        <div>
            <h1>Functionasprops</h1>
            <button onClick={()=>props.data()}>Call from button</button>
        </div>
    )
}

export default Functionasprops

