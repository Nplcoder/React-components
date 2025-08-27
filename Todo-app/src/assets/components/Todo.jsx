import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem';

function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={(e) => setTodo(e.target.value)} type="text" 
        value={todo} 
        className="border border-gray-400 rounded px-2 py-1" />
        <button type='submit'>Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item}/>
      ))}
    </div>
  )
}

export default Todo
