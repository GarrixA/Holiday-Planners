import { useState } from 'react'
import './Tours.css'
import Table from './Table'
import Modal from './Modal'

function Tours() {
  const [openModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState([
    {
      destination: 'Rwanda',
      duration: '4 months',
      group: '100+ people',
      price: '$ 750',
    },{
      destination: 'Tanzania',
      duration: '2 weeks',
      group: '150+ people',
      price: '$ 750',
    },{
      destination: 'Nairobi',
      duration: '12 weeks',
      group: '90+ people',
      price: '$ 750',
    }
  ]);

  const [rowToEdit, setRowToEdit] = useState(null)

  const handleDeleteRow = (targetIndex) =>{
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) =>{
    setRowToEdit(idx);
    setOpenModal(true);
  }
  const handleSubmit = (newRow) =>{
    rowToEdit === null ?
    setRows([...rows, newRow]) :
    setRows(rows.map((currRow, idx) =>{
      if (idx !== rowToEdit) return currRow;
      return newRow;

    }))
  }

  return (
    <>
      <div className='Tour'>
       
      <button id='btn' onClick={() => setOpenModal(true)}>Add a tour</button>
         {openModal && <Modal 
         closeModal ={() => 
         setOpenModal(false)} 
         onSubmit={handleSubmit}
         defaultValue={rowToEdit !== null && rows[rowToEdit]}
         />}

        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>

        
      </div>
    </>
  )
}

export default Tours
