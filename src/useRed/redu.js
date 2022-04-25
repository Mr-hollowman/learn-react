import React from 'react';

function Redu() {
    // var iValue=0;
    // const color=React.useRef();
    // const cgColor=()=>{
    //     color.current.style.background='blue';
    // }
    function reduce(a,b){
        // return state+value;
        if (b==='increment'){
            return a+1;
        } else if (b === 'decrement') {
             return a-1;
        } else if (b === 'reset') {
             return 0;
        } else {
             throw new Error(`This action type isn't supported.`)
        }
    }
    var [count,dispatch]=React.useReducer(reduce,10)
    // console.log(dispatch);
    return (
        <div>
            {count}
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    );
}

export default Redu;