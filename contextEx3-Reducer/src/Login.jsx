import { useContext, useState } from "react"
import { UserContext } from "./context/Context"


export default function Login(){
    const {state, dispatch} = useContext(UserContext)

    const [value, setValue] = useState('');

    function handleClick(e){
        e.preventDefault()
        dispatch({type:'Login', payload: value})
        setValue('')
    }

    return <div>
        <form onSubmit={handleClick} >
        <input
        className="bg-amber-100 mt-1" 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} />

        <button type="Submit">Login</button>
        </form>
        {console.log(value)}
    </div>
}