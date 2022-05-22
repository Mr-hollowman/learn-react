import React,{useState} from 'react';
import axios from 'axios';


function AddEmployee() {
    const [empName,setEmpname]=useState();
    const [empSalary,setEmpsalary]=useState();
    const [empAge,setEmpage]=useState();
    const addEmp=()=>{
        axios.post('http://localhost:3000/employees',{empName,empSalary,empAge});
    }
    return (
        <div>
            <input type='text' placeholder='Enter Employee Name' onChange={(e)=>setEmpname(e.target.value)}></input>
            <input type='number' placeholder='Enter Employee Salary' onChange={(e)=>setEmpsalary(e.target.value)}></input>
            <input type='number' placeholder='Enter Employee Age' onChange={(e)=>setEmpage(e.target.value)}></input>
            <button onClick={addEmp}>addEmp</button>
        </div>
    );
}

export default AddEmployee;