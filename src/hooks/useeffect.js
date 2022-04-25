import React, { useEffect, useState } from 'react';

function Useeffect(props) {
    const [count,setCount]=useState(0);
    useEffect(()=>{console.log('count updated')},5000)
    return (
        <div>
            my count :{count}
            <button onClick={()=>setCount(10)}>click</button>
        </div>
    );
}

export default Useeffect;