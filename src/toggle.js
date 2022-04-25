import React, { useState } from 'react';

export const Toggle=()=>{
    const [toggle,setToggle]=useState(false);
    return (
        <div>
            <button onClick={()=>setToggle(!toggle)}>{toggle?'true':'false'}</button>
        </div>
    );
}