import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [logged, Guest] = useState(false);
    return (
        <div>
            {logged ? <h1>Hey User</h1> : <h1>Welcome Guest</h1>}
        </div>
    )
}
