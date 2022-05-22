import React, { useEffect, useState } from 'react';

function Increment() {
    const [count,setCount]=useState(0)
    useEffect(()=>{setInterval(()=>setCount(count+1),1000);return clearInterval},[count])
    return (
        <div>
            <h1>selva</h1>
            {count}
        </div>
    );
}

export default Increment;