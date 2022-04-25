import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListEmployee(props) {
    const [emp,setEmp]=useState([]);
    const url='http://localhost:3000/employees';
    useEffect(()=>{getData()},[]);
    const getData=()=>{axios.get(url).then(response => response.data).then((data) =>setEmp(data))}

    const giveData=(data)=>{
        const {id,empName,empSalary,empAge}=data
        localStorage.setItem("id",id);
        localStorage.setItem("empName",empName);
        localStorage.setItem("empSalary",empSalary);
        localStorage.setItem("empAge",empAge);
    }
    const deleteEmployee=(id)=>{
        axios.delete(`http://localhost:3000/employees/${id}`).then(()=>getData());
    }
    return (
        <div>
           <table>
<thead>
    <tr>
        <th>Employee Name</th>
        <th>Employee Age</th>
        <th>Employee Salary</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    {emp.map((employee)=><tr key={employee.id}>
        <td>{employee.empName}</td>
        <td>{employee.empAge}</td>
        <td>{employee.empSalary}</td>
        <td><Link to="/update"><button onClick={()=>giveData(employee)}>Update</button></Link></td>
        <td><button onClick={()=>deleteEmployee(employee.id)}>Delete</button></td>

    </tr>)}
</tbody>
</table>
        </div>
    );
}

export default ListEmployee;
