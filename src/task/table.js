import React from 'react';

function Table() {
    const arr=[10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div>
            <table>
                <thead>
                    <tr><th>Numbers</th></tr>
                </thead>
                <tbody>
                    {arr.map((item,index)=><tr key={index}><td>{item}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;