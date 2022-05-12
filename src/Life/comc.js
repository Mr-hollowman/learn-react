import React, { useEffect } from 'react';

function Comc(){
    useEffect(()=>{console.log('component mounted'); return ()=>{console.log('component unmounted')}},[])
    return (
        <div>
            hello world
        </div>
    );
}

export default Comc;