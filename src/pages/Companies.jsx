import { useEffect } from 'react'
import { getCompanies } from '../services/apiCompanies.js'
import { Button, Table } from 'react-bootstrap'
import { BsFillInfoCircleFill, BsFillPencilFill, BsFillTrash3Fill } from 'react-icons/bs'

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
                    <td><Button variant='primary'><BsFillInfoCircleFill /></Button>{' '}
                        <Button variant='warning'><BsFillPencilFill /></Button>{' '}
                        <Button variant='danger'><BsFillTrash3Fill /></Button>{' '}
                    </td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Companies