import React from 'react'

function WrestlerStatus({name, emoji, age, status}) {
  return (
    <div> 
    {/* {status === false  ?  <h3>{emoji} {name} {age} </h3> : null} */}
    <h3>{emoji} {name} {age} {status ? "Still Playing" : "Retired"} </h3>
    </div>
  )
}

export default WrestlerStatus
