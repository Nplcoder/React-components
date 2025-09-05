export default function UseState({count, setCount}){
    return(
<>
<h1>useState</h1>

UseState = {count}

<div className="space-x-2">
<button
  onClick={() => setCount((prev) => (prev >= 10 ? prev : prev + 1))}
  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
>
  Increment
</button>

<button
  onClick={() => setCount(count - 1)}
  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
>
  Decrement
</button>
</div>
        </>
    )
}