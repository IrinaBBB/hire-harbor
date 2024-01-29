import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Companies from './pages/Companies.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import Home from './pages/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
})

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
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
        </QueryClientProvider>
    )
}

export default App
