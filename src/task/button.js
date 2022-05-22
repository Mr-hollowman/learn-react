import React from 'react';

function Button() {
    const [change,setChange]=React.useState(true);
    return (
        <div>
            <button onClick={()=>setChange(!change)}>{change?"ON":"OFF"}</button>
        </div>
    );
}

export default Button;