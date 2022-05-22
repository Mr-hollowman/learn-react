import React from 'react';

function RefDemo() {
    const inputText=React.useRef();
    const cgColor=()=>{
        inputText.current.style.background='red';
    }
    return (
        <div>
            <input ref={inputText}></input>
          <button onClick={cgColor}>click</button>  
        </div>
    );
}

<input></input>
export default RefDemo;<button></button>