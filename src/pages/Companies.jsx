import { useEffect } from 'react'
import { getCompanies } from '../services/apiCompanies.js'

function Companies() {
    useEffect(() => {
        getCompanies().then((data) => console.log(data))
    }, [])
    return (
        <></>
    )
}

export default Companies