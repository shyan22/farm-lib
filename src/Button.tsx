import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => { setCount(a => a + 1) }}>Count: {count}</button>
    )
}

export default Counter