import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function UpdateEmployee(props) {
    const [empName,setEmpname]=useState();
    const [empSalary,setSalary]=useState();
    const [empAge,setAge]=useState();
    const [id,setId]=useState();

useEffect(()=>{
    setEmpname(localStorage.getItem("empName"))
    setSalary(localStorage.getItem("empSalary"))
    setAge(localStorage.getItem("empAge"))
    setId(localStorage.getItem("id"))
},[]);
const updateEmployee=()=>{
    axios.put(`http://localhost:3000/employees/${id}`,{empName,empSalary,empAge})
}
    return (
        <div>
            <input value={empName} onChange={(e)=>setEmpname(e.target.value)}></input>
            <input type="number" value={empSalary} onChange={(e)=>setSalary(e.target.value)}></input>
            <input type={"number" }value={empAge} onChange={(e)=>setAge(e.target.value)}></input>
            <button onClick={updateEmployee}>Update</button>
            <Link to='/view'><button>View Employees</button></Link>
        </div>
    );
}

export default UpdateEmployee;