import { useState } from 'react'

import './App.css'
import ItemsTodo from './assets/components/ItemsTodo'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setTodos ([...todos, todo])
    setTodo('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} type="text" value={todo} placeholder='Please add you Todo'/>
        <button type='submit'>Add</button>
      </form>
     {todos.map((item) => (
        <ItemsTodo key={item} item={item} />
      ))}
    </>
  )
}

export default App
