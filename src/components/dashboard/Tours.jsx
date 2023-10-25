import { useEffect, useState } from 'react'
import './tours.css'
import Table from './Table'
import Modal from './Modal'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';

function Tours() {
  // const [openModal, setOpenModal] = useState(false);
  // const [rows, setRows] = useState([
  //   {
  //     destination: 'Rwanda',
  //     duration: '4 months',
  //     group: '100+ people',
  //     price: '$ 750',
  //   },{
  //     destination: 'Tanzania',
  //     duration: '2 weeks',
  //     group: '150+ people',
  //     price: '$ 750',
  //   },{
  //     destination: 'Nairobi',
  //     duration: '12 weeks',
  //     group: '90+ people',
  //     price: '$ 750',
  //   }
  // ]);
  
  const [openModal, setOpenModal] = useState(false);
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] =useState("");
  let token = localStorage.getItem("token");
  console.log(tours)
  useEffect(()=>{
    const fetchTour = () =>{
      axios({
        method:"GET",
        url:"https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
        headers:{
          "Content-Type": "application/jason",
        }
      })
      .then((response)=> {
        console.log(response);
        setTours(response.data);
        toast.success("well done")
      })
    
      .catch((error) =>{
        toast.error(error.response.data.message);
        console.log(error);
        alert("Error happenning");
        toast.error("error");
      })
    }
    
    fetchTour();
  }, []);

  

  const [rowToEdit, setRowToEdit] = useState(null)

  const handleDeleteRow = (targetIndex) =>{
    setTours(tours.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) =>{
    setRowToEdit(idx);
    setOpenModal(true);
  }
  const handleSubmit = (newRow) =>{
    rowToEdit === null ?
    setTours([...tours, newRow]) :
    setTours(tours.map((currRow, idx) =>{
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
          defaultValue={rowToEdit !== null && tours[rowToEdit]}
          />}

          <Table /*rows={rows}*/ tours={tours} deleteRow={handleDeleteRow} editRow={handleEditRow}/>

          
        </div>
        <ToastContainer className="toast"/>
      </div>
    </>
  )
}

export default Tours
