import { useState } from "react"

export default function CounterOne(){
    const [count, setCount] = useState(0);
    const [incrementby, setIncrementby] = useState(1);

    function increment(){
        setCount(count + incrementby)
    }

    function decrement(){
        setCount(count - incrementby/2)
    }

    function increase(){
        setIncrementby(incrementby + 1)
    }

    function decrease(){
        setIncrementby(incrementby - 1)
    }

    return(
    <>
    <h1>Count value is: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>


    <h1>Increment value is: {incrementby}</h1>
    <button onClick={increase}>Incrementby</button>
    <button onClick={decrease}>decrementby</button>
    </>

)}