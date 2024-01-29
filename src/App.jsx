import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Companies from './pages/Companies.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Home from './pages/Home.jsx'


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='companies' element={<Companies />} />
                        <Route path='home' element={<Home />} />
                    </Route>
                    <Route
                        index
                        element={<Navigate replace to='home' />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
