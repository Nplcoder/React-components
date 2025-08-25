import React from 'react'

function Fruits() {

    const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"]
    
  return (
    <div>
      <ul>
        {
            fruits.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Fruits
