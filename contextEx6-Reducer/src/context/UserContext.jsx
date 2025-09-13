import { createContext, useReducer } from "react"

const UserContext = createContext()

function UserProvider({children}){

    function reducer(state, action){
        if(action.type == 'Login'){
            return {user:action.payload}

        }if(action.type == 'Logout'){
            return {user: action.payload}
        }
        return state;
    }
 
    const [state, dispatch] = useReducer(reducer, {user:null})
    
    return <div>
        <UserContext.Provider value={{...state, dispatch}}>
        {children}
        </UserContext.Provider>

        {console.log(state)}

    </div>
}

export {UserContext, UserProvider}