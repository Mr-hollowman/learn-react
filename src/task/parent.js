import React, { useState } from 'react';
import Conditional from './conditional';

function Parent() {
    const [ren,setRen]=useState(true);

    return (
        <div>
            <button onClick={()=>setRen(!ren)}>click</button>
            {ren?<Conditional></Conditional>:''}
        </div>
    );
}
export default Parent;