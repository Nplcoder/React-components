import { useState } from "react";

export default function UseStateEx1(){

    const [count, setCount] = useState(0)
    
    return(
    <>
    <h1>UseState Example</h1>
    <h1>{count}</h1>
    <button 
    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 mr-2"
    onClick={() => setCount((prev) => (prev >= 10 ? prev : prev + 1))}>Increment</button>

    <button 
    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
    onClick={() => setCount((prev) => (prev <= 0 ? prev : prev - 1))}>Increment</button>
    </>
    )

}