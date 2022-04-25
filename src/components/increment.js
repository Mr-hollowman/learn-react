import React,{useState, useEffect} from 'react';

function Increment() {
    const [value, setValue]=useState(10);
    const increment=()=>setValue(value+1);
    const decrement=()=>setValue(value-1);
    useEffect(()=>alert('value updated'),[value]);
    return (
        <div>
            {value}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Increment;