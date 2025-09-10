import { useContext } from "react"
import { UserContext } from "./Context/UserContext"
import Login from "./Login"



export default function Checkout(){
    const {user} = useContext(UserContext)
    return <div>
        Welcome {user}
    </div>
}