import React from 'react'
import { Outlet } from 'react-router-dom'

function Channel() {
    return (
        <div>
            <h1>Youtube Channel Page</h1>
            <Outlet/>
        </div>
    )
}

export default Channel