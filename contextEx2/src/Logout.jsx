import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import Login from "./Login"

export default function Logout(){
    const {user, setUser} = useContext(UserContext)
    return <div>
        <button onClick={() => setUser("Guest")}>Logout</button>
    </div>
}