import React from 'react'
import './Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

const Table = ({/*rows,*/ tours, deleteRow, editRow}) => {
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
                        tours.map((row, idx) =>{
                            return <tr key={idx}>
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
