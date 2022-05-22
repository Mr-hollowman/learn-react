import React from 'react';
import Hoc from './hoc';

function Myc(props) {
    return (
        <div>
            <button onClick={props.incre}>click</button>
            <h1 onMouseOver={props.incre}>selva</h1>
            {props.count}<br></br>
            <button onClick={props.reset}>reset</button>
        </div>
    );
}

export default Hoc(Myc);