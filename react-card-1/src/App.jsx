import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='slide-container'>
        <div className="slide-content">
          <div className="card-wrapper">
            <div className="card">
              <div className="image-content">
                <span className='overlay'></span>

                <div className="card-image relative h-[150px] w-[150px] rounded-full">
                  <img className='card-img h-full w-full object-cover rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// https://www.youtube.com/watch?v=qOO6lVMhmGc&list=PLImJ3umGjxdBZuqZBHG5EYr4SWOjwjn3C
