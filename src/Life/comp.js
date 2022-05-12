import React, { useState } from 'react';
import Comc from './comc';

function Comp(){
    const [mount,setMount]=useState(true)
    const change=()=>setMount(!mount)
    return (
        <div>
            {mount?<Comc></Comc>:''}
            <button onClick={change}>click to mount/unmount</button>
        </div>
    );
}

export default Comp;