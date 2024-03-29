import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../assets/hiring.svg'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

function MainNav(props) {
    return (
        <>
            <Navbar sticky='top' expand='lg' bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand as={NavLink} to='/home' href='#home'>
                        <img
                            src={logo}
                            width='30'
                            height='30'
                            className='d-inline-block align-top'
                            alt='Hire Harbor logo'
                        />{' '}
                        Hire Harbor
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={NavLink} to='/companies'>Companies</Nav.Link>
                            {/*<Nav.Link href='#link'>Link</Nav.Link>*/}
                            {/*<NavDropdown title='Dropdown' id='basic-nav-dropdown'>*/}
                            {/*    <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href='#action/3.2'>*/}
                            {/*        Another action*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href='#action/3.4'>*/}
                            {/*        Separated link*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNav