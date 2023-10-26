import React, { useState } from 'react'
import './Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

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
                                        <BsFillPencilFill onClick={() => editRow(idx)}/>
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
