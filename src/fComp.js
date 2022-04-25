import React, { useState } from 'react';

function FComp(props) {
    const [name,setName]=useState('kavi');
    const [uName,setUname]=useState('');
    function updateName(e){
        setName(e);
    }
    return (
        <div>
            {name}
            <input onChange={(event)=>setUname(event.target.value)}></input>
            <button onClick={()=>updateName(uName)}>onClick</button>
        </div>
    );
}

export default FComp;