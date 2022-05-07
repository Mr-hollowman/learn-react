import React, { useState } from 'react';

function ArrInput() {
    const [output,setOutput]=useState(false)
    const [inp,setInp]=useState([{name:'selva'}]);
    const [inp2,setInp2]=useState('')
    return (
        <div>
            <input type='text'onChange={(e)=>setInp2([e.target.value])}></input>
            <button onClick={()=>setOutput(!output)}>display</button>
            <button onClick={()=>setInp(prev)=>({...prev,inp2})</div>}>change</button>
            {output?inp:''}
        </div>
    );
}

export default ArrInput;