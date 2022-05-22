import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AddEmployee from './AddEmployee';
import ListEmployee from './ListEmployee';
import UpdateEmployee from './updateEmployee';

function CrudRouter() {
    return (
        <BrowserRouter>
        <div>
            <Link to='/view'><button>List Employees</button></Link>
            <Link to='/add'><button>Add Employees</button></Link>

        </div>
        <Routes>
            <Route path='/view' element={<ListEmployee />} />
            <Route path='/add' element={<AddEmployee />} />
            <Route path='/update' element={<UpdateEmployee />} />
        </Routes>
        </BrowserRouter>
    );
}

export default CrudRouter;