import React from 'react'
import './Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

const Table = ({rows, deleteRow, editRow}) => {
    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Duration</th>
                        <th>Group size</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) =>{
                            return <tr key={idx}>
                                <td>{row.destination}</td>
                                <td>{row.duration}</td>
                                <td>{row.group}</td>
                                <td>{row.price}</td>
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
