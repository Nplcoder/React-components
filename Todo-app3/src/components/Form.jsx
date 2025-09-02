import React, { useState } from 'react'
import TodoList from './TodoList'
import Footer from './Footer'

function Form() {
    const [todo, setTodo] = useState({name:'', done:false})
    const [todos, setTodos] = useState([])
    const [error, setError] = useState('')

    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done))

    

    const completedTodos = todos.filter((todo) => todo.done).length
    console.log(completedTodos)

    const totalTodos = todos.length
    console.log(totalTodos)

    function handleSubmit(e){
      e.preventDefault()
      
      const isDuplicate = todos.some((t) => t.name.trim().toLowerCase() === todo.name.trim().toLowerCase()) 
      if (isDuplicate){
        setError('Task already Exists')
        return
      }
      setTodos([...todos, todo])
      setTodo({name:'', done:false})
      setError('')
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
        onChange={(e) => setTodo({name:e.target.value, done:false})}
        value={todo.name}
         />
        <button 
        className='inline-block border-0 rounded bg-yellow-300 px-5 py-3 cursor-pointer'
        type='submit'
        >Add</button>
        </div>

        {/* popup error */}
        {error && (
          <p className='text-red-500 mt-2 text-center font-semibold'>{error}</p>
        )}
        
      </form>

      
      {/* {todos} */}
      
      <TodoList todos={todos} setTodos={setTodos} sortedTodos={sortedTodos}/>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />

      {/* {console.log(todos)} */}
    </div>
  )
}

export default Form
