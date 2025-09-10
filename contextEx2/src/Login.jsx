import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"

export default function Login(){
    const [value, setValue] = useState('')
    const {user, setUser} = useContext(UserContext)

    function handleSubmit(e){
    e.preventDefault()
        setUser(value)
        setValue('')
    }

    return <div>
        <form onSubmit={handleSubmit} >
            <input 
            className="bg-amber-50 mt-1"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value) } />
            <button
            type="Submit">Login</button>
            
        </form>
        
    </div>
}