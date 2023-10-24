import { useState } from 'react'
import './tours.css'
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

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTour = () =>{
    
  }

  

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
      <div className="container">
        <div className="top">
          <h1>Toour</h1>
        </div>
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
      </div>
    </>
  )
}

export default Tours
