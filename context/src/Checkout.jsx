import { useContext } from "react"
import { userContext } from "./App"

export default function Checkout(){
    const {user, setUser} = useContext(userContext)
    return( <div>
        <h1>Checkout as <span className="text-blue-500">{user}</span></h1>
    </div>
)}