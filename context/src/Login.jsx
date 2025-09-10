import { useContext, useState } from "react"
import { userContext } from "./App"

export default function Login(){
   const {setUser, user} = useContext(userContext)
    const [value, setValue] = useState('')
    function HandleSubmit(e){
        e.preventDefault()
        setUser(value)
        setValue('') // clear input after submit
    }

    return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input 
            className="bg-amber-100 mt-1"
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} />
            
            <button type='submit'>Login</button>
        </form>
    </div>
)}