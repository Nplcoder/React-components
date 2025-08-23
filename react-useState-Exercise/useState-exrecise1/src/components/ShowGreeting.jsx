import React, { useState } from 'react'

function ShowGreeting() {
    const [name, setName] = useState('')
    const [greeting, setGreeting] = useState('')
    const minLength = 2
    const maxLength = 10

    const handleChange = (e) => {
        const value = e.target.value
        if(value.length <= maxLength){
            setName(value)
        }
    }

  return (
    <div className=''>
    <div > 
        <section className='flex gap-1'>
        <input 
        className='bg-gray-100 rounded-sm' 
        type="text" 
        placeholder='Please type you name' 
        value={name} 
        onChange={e => setName(e.target.value)} />
        <button onClick={() => setGreeting(`Hello, ${name}!`)}>Show Greeting</button>
        </section>
        
      
        <p className='bg-orange-100 mt-2'>{greeting}</p>
        <p className='bg-amber-200 mt-2'>{name ? `Hello, ${name}!` : ''}</p>
    </div>

    <div className='mt-4'>
    <section className='flex gap-1'>
    <input
    className='bg-gray-100 rounded-sm'
    type="text"
    placeholder='Type your name 2'
    value={name}
    onChange={handleChange}
    />
    </section>

    <p>
        {name.length >= minLength
        ? `Hello, ${name}!`
        : `Name must be at least ${minLength} characters`}
    </p>
    </div>
    
    </div>
    
  )
}

export default ShowGreeting
