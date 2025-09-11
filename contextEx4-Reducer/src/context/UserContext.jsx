import { createContext, useReducer } from "react"

const UserContext = createContext()

function UserProvider ({children}){
    function reducer(state, action){
        if(action.type =='Login'){
            return action.payload
        }if(action.type =='Logout'){
            return 'Guest'
        }
    }

    const [state, dispatch] = useReducer(reducer, '')

    return <div>
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    </div>
}

export {UserContext, UserProvider}