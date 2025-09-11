import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"


export default function Login(){
    const {dispatch} = useContext(UserContext)

    const [value, setValue] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:'Login', payload:value})
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input 
            className="bg-amber-100 mt-1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" />

            <button type='submit'>Login</button>
        </form>

        {console.log(value)}

    </div>
}