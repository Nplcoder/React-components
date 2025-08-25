import React from 'react'

function Wrestler({name, emoji, age}) {
  return (
    <li>
      {emoji} {name} {age}
    </li>
  )
}

export default Wrestler
