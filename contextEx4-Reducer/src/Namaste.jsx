import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export default function Namaste(){
    const {state} = useContext(UserContext)
    return <div>
        Namaste {state} 🙏🏻
    </div>
}