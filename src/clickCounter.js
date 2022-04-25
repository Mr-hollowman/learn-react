import React,{useState} from 'react';

function ClickCounter(props) {
    var [counter,setCounter]=useState(0);
    const increment=()=>setCounter(counter++)
    return (
        <div>
            <button onClick={increment}>you clicked {counter} times</button>
        </div>
    );
}

export default ClickCounter;