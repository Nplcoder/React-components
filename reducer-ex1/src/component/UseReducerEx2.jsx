import { useReducer } from "react"

export default function UseReducerEx2 (){

    const [state, dispatch] = useReducer(reducer, {count:0})
    function reducer(state, action){
        if(action.type == 'add'){
            return {...state, count:state.count + action.payload}
        }if(action.type == 'substract'){
            return {...state, count:state.count-action.payload }
        }

    }

    return(
        <div>
            <h1>{state.count}</h1>

            <button 
            onClick={() => dispatch({type:'add', payload:1 })}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 mr-2"
            >Add</button>

            <button
            onClick={() => dispatch({type:'substract', payload:1})}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
            >Substract</button>

        </div>
    )
}