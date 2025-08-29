import React, { useState } from 'react'
import ItemTodo from './ItemTodo';
import TodoList from './TodoList'; 

function Form() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo('');
    }

  return (
    <div>
        <form className='bg-white rounded-2xl p-5 w-[500px] mx-auto mt-12 shadow-sm' onSubmit={handleSubmit}>
        <div className='flex'>
        <input className='w-full border border-gray-200 focus:outline-none focus:border-transparent text-2xl ' onChange={(e) => setTodo(e.target.value)} type="text" value={todo} placeholder='Enter your task'/>

        <button className='inline-block border-0 rounded bg-yellow-300 px-5 py-3 cursor-pointer' type='submit'>Add</button>
        </div>
      
     </form>
     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Form
