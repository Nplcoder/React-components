import React from 'react'
import Wrestler from './Wrestler'

function Wrestlers() {
    const Wrestlers = [
        { name: 'John cena', age: 42, emoji:"✊" },
        { name: 'Undertaker', age: 62, emoji:"👑" },
        { name: 'Kane', age: 52, emoji:"👹" },
        { name: 'Hulk', age: 86, emoji:"💪" },
        { name: 'Sheamus', age: 56, emoji:"🤼" },
    ]
  return (
    <>
      <ul >
        {Wrestlers.map((wrestler) => 
            // <li className='bg-violet-200 p-1 font-bold rounded-xl list-disc mb-0.5' key={wrestler.name}>{wrestler.emoji} {wrestler.name} {wrestler.age}</li>
            <Wrestler key={wrestler.name} emoji={wrestler.emoji} name={wrestler.name} age={wrestler.age} />
        )}
      </ul>
    </>
  )
}

export default Wrestlers
