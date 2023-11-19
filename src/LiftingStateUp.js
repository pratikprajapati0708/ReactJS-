import React from 'react'

function LiftingStateUp(props) {
    const data = {name: 'Pratik',mail:'pratik@gmail.com'}
    return (
        <div>
            <h2>UserName: </h2>
            <button onClick={()=>props.alert(data)}>click me</button>
        </div>
    )
}

export default LiftingStateUp