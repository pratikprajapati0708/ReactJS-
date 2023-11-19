import React from 'react'
import { Button } from 'react-bootstrap';
export default function ReactBootstrap
    () {
    return (
        <div>
            <Button onClick={() => alert("The button is clicked")}>Click Me!</Button>
        </div>
    )
}
