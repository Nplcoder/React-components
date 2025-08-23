import React, { useState }  from 'react'


function Counter() {
    const [count, setCount] = useState(0)
    
  return (
    <div>
      <div>
        <p className='bg-amber-100 mb-1'>Number Counts: {count}</p>
        <div  >
        <button className='mr-1' onClick={() => setCount(count + 1)}>Add Counter</button>
        <button onClick={() => setCount(prev => Math.max(prev - 1, 0))}>Subtract Counter</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
