import { useEffect } from 'react'
import { getCompanies } from '../services/apiCompanies.js'
import { Button, Table } from 'react-bootstrap'

function Companies() {
    useEffect(() => {
        getCompanies().then((data) => console.log(data))
    }, [])
    return (
        <>
            <Table striped bordered hover className='mt-5'>
                <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Industry</th>
                    <th>Description</th>
                    <th>Website</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><Button variant='primary'>Info</Button>{' '}
                        <Button variant='warning'>Edit</Button>{' '}
                        <Button variant='danger'>Delete</Button>{' '}
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Companies