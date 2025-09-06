import { useReducer } from "react"

export default function ReducerHookE2 (){

    const [state, dispatch] = useReducer(redu, 0) 
        function redu(state,action ) {
            if(action.type == 'Add' && state < 10){
                return state + action.payload;
            }
            if(action.type == 'Substract' && state > 0){
                return state - action.payload;
            }
            return state;
        }
    

    return (
        <div>
            <span>UseReduce E2: {state}</span>
            <div className="space-x-2">
            <button 
            onClick={() => dispatch({type:"Add", payload:1})}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300">Add</button>

            <button
            onClick={() => dispatch({type:"Substract", payload:1})}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300">Substract</button>
            </div>
            

        </div>
    )
}