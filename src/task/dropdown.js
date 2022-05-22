import React, { useState } from 'react';

function Dropdown() {
    const [value,setValue]=useState('select');

    return (
        <div>
            <select onChange={(e)=>setValue(e.target.value)}>
                <option>javaScript</option>
                <option>React</option>
                <option>ReactNative</option>
                <option>Angular</option>
            </select>
            Your selected {value}
        </div>
    );
}

export default Dropdown;    