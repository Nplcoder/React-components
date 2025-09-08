import { useReducer } from "react";

export default function UseReducerEx3() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy};
    }
    if(action.type == 'decrement'){
        return{...state, count:state.count - state.incrementBy}
    }
  }
  return (
    <div>
        <div><h1>UseReducer Tried 1</h1></div>
      <div>{state.count}</div>

      <div>
        <input
          onChange={(e) =>
            dispatch({ type: "setIncrement", payload: Number(e.target.value) })
          }
          className="bg-amber-100"
          type="text"
          value={state.incrementBy}
          name=""
          id=""
        />
      </div>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 mr-2"
      >
        Increment
      </button>

      <button 
      onClick={() => dispatch({type:'decrement' })}
      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300">
        Decrement
      </button>
    </div>
  );
}
