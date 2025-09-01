import React, { useState } from 'react'
import TodoList from './TodoList'

function Form() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, todo])

        setTodo('')

        
    }


  return (
    <div>
      <form 
      className='bg-white rounded-2xl p-5 w-[500px] mx-auto mt-12 shadow-sm'
      onSubmit={handleSubmit}
      >
        <div className='flex'>
        <input 
        className='w-full border border-gray-200 focus:outline-none focus:border-transparent text-2xl' 
        type="text" 
        placeholder='Enter your task'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
         />
        <button 
        className='inline-block border-0 rounded bg-yellow-300 px-5 py-3 cursor-pointer'
        type='submit'
        >Add</button>
        </div>
        
      </form>

      {/* {console.log(todos)} */}
      {/* {todos} */}
      
      <TodoList todos={todos} />
    </div>
  )
}

export default Form
