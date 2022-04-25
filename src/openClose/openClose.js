import React, { useState } from 'react';
import "./openClose.css";

function OpenClose(props) {
    const [display,setDisplay]=useState(false);
    const show=()=>setDisplay(!display)
    return (
        <div>

        <div className={display?"open":"close"}>
            jdskl;afjlk;dsjalkfjdl;snavnk;dasnvn;lknasfdlvnknk;as
        </div>
        <button onClick={show}>click</button>
        </div>
        
    );
}

export default OpenClose;