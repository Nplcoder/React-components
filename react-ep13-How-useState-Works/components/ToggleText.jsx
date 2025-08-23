import React, { useState } from 'react'

const ToggleText = () => {
    const [text, setText] = useState('Hello')
    const handleClick = () => {
        setText(prev => prev === "Hello" ? "Goodbye":"Hello")
    }
  return (
    <div style={{textAlign:"center"}}>
      <p>{text}</p>
      <button 
      onClick={handleClick} >Click me</button>
    </div>
  )
}

export default ToggleText
