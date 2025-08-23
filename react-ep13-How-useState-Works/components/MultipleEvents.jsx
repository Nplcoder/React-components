import React, { useState } from 'react'

function MultipleEvents() {
    const [message, setMessage] = useState("Try interacting with the elements")
  return (
    <div style={{textAlign:"center", marginTop: "50px", background:'lightgray', width:'60%', margin:'Auto', padding:'2px', borderRadius:'16px'} }>
        <p>{message}</p>

        {/* Mouse event */}
        <button
        onClick={() => {
            setMessage("Button Clicked")
        }}
        onDoubleClick={() => {
            setMessage("Button Doubled clicked")
        }}
        style={{margin:'10px'}}
        >
            Click Me
        </button>
        <hr/>

        {/* Keyboard event */}
        <input style={{margin:'10px'}}
        type="text"
        placeholder='Type Something...'
        onChange={(e) => setMessage(`Input changed: ${e.target.value}`)}
        onKeyDown={(e) => setMessage('Key pressed: ${e.key}')}
        />
        <hr />

        {/* Focus event */}
        <input
        type='text'
        placeholder='Focus here'
        onFocus={() => setMessage('Input Focused')}
        onBlur={() => setMessage('Input Blurred')}
        style={{margin:'10px'}}
        />
        <hr />

        {/* Details element with inToggle */}
        <details onToggle={() => setMessage("Details toggled")} style={{margin:'10px'}}>
            <summary>Click to expand</summary>
            <p>Hidden content revealed</p>
        </details>
    </div>
  )
}

export default MultipleEvents


