import { useEffect, useState } from 'react'
import { deleteCompany, getCompanies } from '../services/apiCompanies.js'
import { Button, Modal, Table } from 'react-bootstrap'
import { BsFillInfoCircleFill, BsFillPencilFill, BsFillTrash3Fill } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Loading from '../components/Loading.jsx'
import Spinner from 'react-bootstrap/Spinner'
import toast from 'react-hot-toast'

function Companies() {

    const {
        isLoading,
        data: companies,
        error,
    } = useQuery({ queryKey: ['Companies'], queryFn: getCompanies })

    const [show, setShow] = useState(false)
    const [companyInfo, setCompanyInfo] = useState({})

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        setCompanyInfo(() => companies.find(company => company.company_id === id))
        setShow(true)
    }

    const queryClient = useQueryClient()

    const { isLoading: isDeleting, mutate } = useMutation({
        mutationFn: deleteCompany,
        onSuccess: () => {
            toast.success('Company successfully deleted')
            queryClient
                .invalidateQueries({
                    queryKey: ['Companies'],
                })
                .then()
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })


    if (isLoading) return <Loading />


    return (
        <>
            <Table striped bordered hover className='mt-5'>
                <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Industry</th>
                    <th>Website</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {companies.map((company) => (
                    <tr key={company.company_id}>
                        <td>{company.name}</td>
                        <td>{company.industry}</td>
                        <td>{company.website}</td>
                        <td><Button variant='primary'
                                    onClick={() => handleShow(company.company_id)}><BsFillInfoCircleFill /></Button>{' '}
                            <Button variant='warning'><BsFillPencilFill /></Button>{' '}
                            {!isDeleting &&
                                <Button variant='danger' onClick={() => mutate(company.company_id)}><BsFillTrash3Fill /></Button>}
                            {isDeleting &&
                                <Button variant='danger' disabled>
                                    <Spinner
                                        as='span'
                                        animation='grow'
                                        size='sm'
                                        role='status'
                                        aria-hidden='true'
                                    />
                                </Button>
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary'>{companyInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <tbody>
                        <tr>
                            <td className='text-uppercase text-primary'>Industry</td>
                        </tr>
                        <tr>
                            <td>{companyInfo.industry}</td>
                        </tr>
                        <tr>
                            <td className='text-uppercase text-primary'>Website</td>
                        </tr>
                        <tr>
                            <td>{companyInfo.website}</td>
                        </tr>
                        <tr>
                            <td className='text-uppercase text-primary'>Description</td>
                        </tr>
                        <tr>
                            <td>{companyInfo.description}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Companies