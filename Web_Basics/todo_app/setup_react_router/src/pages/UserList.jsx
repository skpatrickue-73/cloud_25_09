import { useEffect, useState } from "react"

export default function UserList() {

  const [ users, setUsers ] = useState([])


  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data)
    }

    loadUsers()
  }, [])

  return (
    <div>
        <h1>UserList</h1>
        <ul>
          { users.map(u => <li key={u.id}>{u.name}<br/>{u.email}</li>) }
        </ul>
    </div>
  )
}
