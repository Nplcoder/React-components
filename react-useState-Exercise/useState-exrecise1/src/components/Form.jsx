import { useState } from "react"

export default function Form(){

    const [name, setName] = useState("")
    function handleChange(e) {
        setName(e.target.value)
        console.log(e.target.value)
    }

    return(
        <>
        
        <form className="bg-amber-100 p-1.5 rounded-b-lg">
            <input 
            // onChange={function demo(e) {
            //     return handleChange(e);
            // }}
            onChange={(e) => handleChange(e)}
            type="text"
            value={name}
            />Type Here
        </form>
        </>
    )
}