import React, { useState } from 'react';
import Child from './child';

function Parent() {
    const [name,setName]=useState('selva')
    const update=(data)=>setName(data)
    return (
        <div>
            {name}
            <Child update={update}></Child>
        </div>
    );
}

export default Parent;