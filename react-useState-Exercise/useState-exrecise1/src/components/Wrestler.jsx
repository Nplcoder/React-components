import React from 'react'

function Wrestler({name, emoji, age}) {
  return (
    <li>
      {/* {emoji} {name} {age} */}
      {age > 50 ? <h3>{emoji} {name} {age}</h3> : "" }
    </li>
  )
}

export default Wrestler
