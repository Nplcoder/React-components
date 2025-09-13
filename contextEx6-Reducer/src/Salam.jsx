import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export default function Salam(){

    const {user, dispatch} = useContext(UserContext)

    return <div>
        Salam {user} 👋🏻
    </div>
}