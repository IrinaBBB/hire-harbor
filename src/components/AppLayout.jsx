import MainNav from './MainNav.jsx'
import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'

function AppLayout(props) {
    return (
        <>
            <MainNav />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout