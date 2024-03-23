import { useEffect, useState } from 'react'
import User from './User'
import { UserInterface } from '../../interface/UserInterface'
import { fetchUsers } from '../utils/api'

const Users = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUsersHandleError = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchUsers()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsersHandleError()
  }, [])

  return (
    <div>
      <h1>Users list</h1>
      {isLoading && <p>Loading ...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      { !isLoading && !error && users.length > 0 && 
        <ul>
          {users.map((user: UserInterface) => {
            return <User key={user.id} user={user} />
          })}
        </ul>
      }
    </div>
  )
}

export default Users