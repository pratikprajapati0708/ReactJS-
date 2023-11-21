import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users/test">User1</Link>
            <Link to="/users/pratik">User2</Link>
        </div>
    )
}

export default Navbar