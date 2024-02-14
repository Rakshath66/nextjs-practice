"use client";

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="test-4xl font-bold">HomePage</h1>
            <h3>Counter {count}</h3>
            <button className="bg-slate-600 text-white p-4 rounded-lg" onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Counter;