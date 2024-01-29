import Spinner from 'react-bootstrap/Spinner'

function Loading() {
    return (
        <Spinner style={{ marginLeft: '45%', marginTop: '150px', width: '80px', height: '80px' }} variant='secondary' animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
    )
}

export default Loading