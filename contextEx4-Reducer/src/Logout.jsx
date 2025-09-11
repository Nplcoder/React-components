import { useContext } from "react"
import { UserContext } from "./context/UserContext"



export default function Logout(){
    const {state, dispatch} = useContext(UserContext)
    return <div>
        <button onClick={() => dispatch({type:'Logout', payload : 'Guest'})}>Logout</button>
    </div>
}