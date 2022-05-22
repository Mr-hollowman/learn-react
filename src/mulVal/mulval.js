import React, { useState } from 'react';

function Mulval() {
    const [inputs,setInputs]=useState({fname:'selva',mname:'guru',lname:'r'})
    const store=(evt)=>setInputs((prev)=>{...prev,[e.target.name]:e.target.value})
    return (
        <div>
            <input type='text' onChange={(evt)=>store(evt)} name='fname'></input>
            <input type='text' onChange={(evt)=>store(evt)} name='mname'></input>
            <input type='text' onChange={(evt)=>store(evt)} name='lname'></input>
        </div>
    );
}

export default Mulval;