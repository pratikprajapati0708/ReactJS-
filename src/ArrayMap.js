import React from 'react'
import { Table } from 'react-bootstrap'
export default function ArrayMap() {
    const students = [
        { name: "Pratik", email: "kpratik23@gmail.com", contact: 888 },
        { name: "test", email: "test@gmail.com", contact: 777 },
    ]
    return (
        <div>
            <h1>Handle array with ArrayList</h1>
            <Table striped variant='black' border="1">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                {
                    students.map((data,i) => 
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}
