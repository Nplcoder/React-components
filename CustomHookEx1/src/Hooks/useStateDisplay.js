import { useState } from "react"

export default function useStateDisplay(){
    const [message, setMessage] = useState('This is custom Hook2')
    return[message]
}