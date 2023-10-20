import React, { useState } from 'react';
import Table from './Table';


function TableArray() {
  const [tableData, setTableData] = useState([
    {
      destination: 'United State',
      amount: '$1200',
      people: 5,
    },{
      destination: 'Rwanda',
      amount: "$5000",
      people: 3409576,
    },{
        destination: 'Kenya',
        amount: "$1000",
        people: 7383,
      },{
        destination: 'Tanzania',
        amount: "$1800",
        people: 1500,
      },{
        destination: 'Zimbabue',
        amount: "$2900",
        people: 400,
      },{
        destination: 'DRC',
        amount: "$15000",
        people: 19,
      },{
        destination: 'Ukrane',
        amount: "$0",
        people: 200000,
      },
    
  ]);

  const handleEdit = (rowData) => {
    console.log('Edit', rowData);
  };

  const handleDelete = (rowData) => {
    console.log('Delete', rowData);
  };

  return (
    <div style={{
      margin: '30px'
    }}>
      <h1>Destination Table</h1>
      <Table data={tableData} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default TableArray;
