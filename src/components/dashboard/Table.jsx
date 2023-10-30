import React, { useState } from 'react'
import './Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import axios from 'axios';
import { toast } from 'react-toastify';

// const [tours, setTours] = useState([]);

    // useEffect(()=> {
    //     const handleEdit = ()=>{
    //     axios({
    //         method: "PUT",
    //         url:"https://holiday-planner-4lnj.onrender.com/api/tour/update",
    //         headers: {
    //         "Content-Type": "application/jason",
    //         }
    //     }).then((response)=> {
    //         console.log(response);
    //         setTours(response.data);
    //         toast.success("well done")
    //     })
    //     .catch((error) =>{
    //         toast.error(error.response.data.message);
    //         console.log(error);
    //         alert("error")
    //         console.log("error")
    //     })
        
    //     }
    //     handleEdit();
    // }, []);

    const [price, setPrice] = useState("");
    const [destination, setDestination] = useState("");
    const [Duration, setDuration] = useState("");
    const [image, setImage] = useState("");
    const [GroupSize, setGroupsize] = useState("");
    const [update, setUpdate] = useState("");

    const formData = new FormData();
    formData.append("backdropImage", image);
    formData.append("Duration", Duration);
    formData.append("destination", destination);
    formData.append("GroupSize", GroupSize);
    formData.append("Price", price);

    useEffect(()=>{
        axios({
            method: "PUT",
            url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/update",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
        .then((response)=>{
            e.preventDefault();
            console.log(response.data);
          })
    
          .catch((error)=>{
            console.log(error)
            toast.error(error.message)
          })
          const handleEdit = ((e)=>{
            setUpdate({
                ...update, [e.target.formData]: e.target.value
            })
          })
    
    }, []);
      
const Table = ({/*rows,*/ tours, deleteRow, editRow}) => {
    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tour image</th>
                        <th>Destination</th>
                        <th>Duration</th>
                        <th>Group size</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tours.map((row, idx) =>{
                            return <tr key={idx}>
                                <td>
                                    <img src={row.backdropImage} alt="img" />
                                </td>
                                <td>{row.destination}</td>
                                <td>{row.Duration}</td>
                                <td>{row.GroupSize}</td>
                                <td>{row.Price}</td>
                                <td >
                                    <span className='actions'>
                                        <BsFillTrashFill className='delete-btn' onClick={() => deleteRow(idx)}/>
                                        <BsFillPencilFill onClick={() => /*editRow(idx)*/ handleEdit}/>
                                    </span>
                                </td>
                            </tr>
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default Table
