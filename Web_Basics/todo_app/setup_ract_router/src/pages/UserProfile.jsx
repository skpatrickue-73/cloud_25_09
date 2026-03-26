import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function UserProfile() {
    
    const { userId } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function loadUser() {
            // hier könnte man die Daten von einem Server laden
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await res.json()
        setUser(data)
        }
        loadUser()
    }, [userId])

 return (
    <div>UserProfile: {userId}
    <br />
    {user && (
        <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </>
    )}
    wechsle zu <Link to={`/users/${parseInt(userId) + 1}`}>User {parseInt(userId) + 1}</Link>
    </div>
  )
}