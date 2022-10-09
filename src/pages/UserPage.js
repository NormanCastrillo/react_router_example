import {useParams} from 'react-router-dom'

function UserPage() {

    const {id}  = useParams();

  return (
    <div>{`el id de usario es: ${id}`}</div>
  )
}

export default UserPage