import { useState } from 'react'
import './App.css'
import UseState from './components/UseState'
import ReducerHooks from './components/ReducerHook'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <UseState count={count} setCount= {setCount} />
  <hr className='m-2 border-gray-400' />
  <ReducerHooks />


  </>
  )
}

export default App
