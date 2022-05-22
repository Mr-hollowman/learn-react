import React, { useEffect } from 'react';

function Conditional() {
    useEffect(()=>{return()=>console.log("component unmounted")});
    return (
        <div>
            Conditional Rendering
        </div>
    );
}

export default Conditional;