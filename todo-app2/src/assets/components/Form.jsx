import React, { useState } from 'react'
import ItemTodo from './ItemTodo';
import TodoList from './TodoList'; 
import Footer from './Footer';

function Form() {
    const [todo, setTodo] = useState({name:"" , done:false});
    const [todos, setTodos] = useState([]);

    const completedTodos = todos.filter((todo) => todo.done).length
    const totalTodos = todos.length

    const sortedTodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done))

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"" , done:false});
    }

  return (
    <div>
        <form className='bg-white rounded-2xl p-5 w-[500px] mx-auto mt-12 shadow-sm' onSubmit={handleSubmit}>
        <div className='flex'>
        <input className='w-full border border-gray-200 focus:outline-none focus:border-transparent text-2xl ' 
        onChange={(e) => setTodo({name:e.target.value, done: false})} 
        type="text" 
        value={todo.name} 
        placeholder='Enter your task'/>

        <button className='inline-block border-0 rounded bg-yellow-300 px-5 py-3 cursor-pointer' 
        type='submit'>Add</button>
        </div>
      
     </form>
     <TodoList todos={todos} setTodos={setTodos} sortedTodos={sortedTodos} />

     {/* {console.log(todos)} */}
     
     < Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  )
}

export default Form
