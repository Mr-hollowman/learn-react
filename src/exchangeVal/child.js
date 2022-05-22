import React, { useState } from 'react';

function Child(props) {
    const [state,setState]=useState()
    return (
        <div>
            <input type='text' onChange={(e)=>setState(e.target.value)}></input>
            {state}
            <button onClick={()=>props.update(state)}>click</button>
        </div>
    );
}

export default Child;