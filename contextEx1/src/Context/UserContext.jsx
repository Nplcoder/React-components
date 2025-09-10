import { createContext, useState } from "react"
const UserContext = createContext()

function ProviderContext({children}){
    
    const [user, setUser] = useState('guest')
    return (
    <UserContext.Provider value={{user, setUser}} >
        {children}
    </UserContext.Provider>
)}

export {ProviderContext, UserContext}