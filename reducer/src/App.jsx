import { useState } from 'react'
import './App.css'
import UseState from './components/UseState'
import ReducerHooks from './components/ReducerHook'
import ReducerHookE1 from './components/ReducerHookE1'
import ReducerHookE2 from './components/ReducerHookE2'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <UseState count={count} setCount= {setCount} />

  <hr className='m-2 border-gray-400' />

  <ReducerHooks />

  <hr className='m-2 border-gray-400' />

  <ReducerHookE1 />
  
  <hr className='m-2 border-gray-400' />

  <ReducerHookE2 />


  </>
  )
}

export default App
