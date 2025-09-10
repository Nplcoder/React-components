import { useContext } from "react"
import { UserContext } from "./context/Context"



export default function Welcome(){
    const {state} = useContext(UserContext)
    return <div>
        welcome {state} 🙏🏻
    </div>
}