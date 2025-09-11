import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"

export default function Login(){
const {state, dispatch} = useContext(UserContext)

const [value, setValue] = useState('')

function handleSubmit(e){
    e.preventDefault()
    dispatch({type:'Login', payload:value})
    // console.log(value)
}

    return <div>
        <form onSubmit={handleSubmit} >
            <input 
            className="bg-amber-200 mt-1"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)} />
            <button type="Submit">Login</button>
        </form>
    </div>
}