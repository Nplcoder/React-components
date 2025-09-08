import { useReducer, useState } from "react";

export default function UseReducerBankAc() {
  const [amt, setAmt] = useState("0");
  
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  function reducer(state, action) {
    if(action.type == 'deposit'){
        return {...state, balance: state.balance + Number(amt)}
    }if(action.type == 'withdraw'){
        return{...state, balance: state.balance - Number(amt)}
    }
  }
    
  return (
    <div>
        <div>
      <div>{state.balance}</div>
      
      <div>
        <input className="bg-amber-200" type="text" value={amt} onChange={(e) => setAmt(e.target.value)}/>
      </div>

      <button
      onClick={() => dispatch({type:'deposit', payload:Number(amt)})}
      className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 mr-2"
      >Deposit</button>

      <button
      onClick={() => dispatch({type:'withdraw', payload:Number(amt)})}
      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
      >Withdraw</button>
    </div>
    {console.log(amt)}
    </div>
  );
}
