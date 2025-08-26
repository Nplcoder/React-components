import React from 'react'
import Wrestler from './Wrestler'
import WrestlerStatus from './WrestlerStatus'

function Wrestlers() {
    const Wrestlers = [
        { name: 'John cena', age: 42, emoji:"✊", status: true },
        { name: 'Undertaker', age: 62, emoji:"👑", status: false },
        { name: 'Kane', age: 52, emoji:"👹", status: true },
        { name: 'Hulk', age: 86, emoji:"💪", status: false },
        { name: 'Sheamus', age: 46, emoji:"🤼", status: true },
    ]
  return (
    <>
      <ul >
        {/* {Wrestlers.map((wrestler) => 
            // <li className='bg-violet-200 p-1 font-bold rounded-xl list-disc mb-0.5' key={wrestler.name}>{wrestler.emoji} {wrestler.name} {wrestler.age}</li>
            <Wrestler 
            key={wrestler.name} 
            emoji={wrestler.emoji} 
            name={wrestler.name} 
            age={wrestler.age} 
            status = {wrestler.status} />
            )} */}

          {Wrestlers.map((wrestler) => 
            <WrestlerStatus 
            key={wrestler.name} 
            emoji={wrestler.emoji} 
            name={wrestler.name} 
            age={wrestler.age} 
            status={wrestler.status}
            />
          )}
        
      </ul>
    </>
  )
}

export default Wrestlers
