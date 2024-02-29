import Spinner from 'react-bootstrap/Spinner'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading
