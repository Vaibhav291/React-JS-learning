import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br/>
            <button onClick={() => setCount(count > 0 ? count -1 : 0)}>Decrement</button>
        </div>
    );
}

export default Counter;