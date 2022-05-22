import React, { useState } from 'react';

function FunFilter() {
    const[inp,setInp]=useState(21)
    const [display,setDisplay]=useState(false)
    const emp=[{empName:'selva',age:23},{empName:'yuhan',age:23},{empName:'mohan',age:21},{empName:'siva',age:21},{empName:'yogesh',age:23}]
    return (
        <div>
            <ul>
             {emp.map((ele)=><li>{ele.age}</li>)}

            </ul>
            {display?<ul>{emp.filter((ele)=>ele.age>=inp).map((ele)=><li>{ele.empName}</li>)}</ul>:''}
            search by age :<input type='number' onChange={(e)=>setInp(e.target.value)}></input>
            <button onClick={()=>setDisplay(!display)}>click</button>
            {inp}
        </div>
    );
}

export default FunFilter;