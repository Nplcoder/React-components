import { useReducer } from "react"

export default function ReducerHooks(){

const [state, dispatch] = useReducer(reducer, 0 ); 
    function reducer(state, action){
        if (action.type == "increment" && state < 10){
            return state +  action.payload;
        }
        if(action.type == 'decrement' && state > 0){
            return state - action.payload;
        }
        return state;
    }

return(
<div>
    <div>UseReduce Number = {state}</div>
    <button 
    onClick={() => {
        dispatch({type:"increment", payload: 1})
    }} 
    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 mr-2">Increment</button>
    
    <button 
    onClick={() => {
        dispatch({type:"decrement", payload: 1})
    }}
    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300">Decrement</button>
</div>

)}