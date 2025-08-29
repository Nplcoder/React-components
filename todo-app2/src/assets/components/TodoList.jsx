import React from 'react'
import ItemTodo from './ItemTodo'

function TodoList({todos, setTodos}) {
    
  return (
    <div className='bg-white rounded-2xl shadow-sm w-[500px] p-5 mt-12 mx-auto font-bold'>
      {todos.map((item) => (
        <ItemTodo key={item} item={item} todos={todos} setTodos={setTodos} />
     ))}
    </div>
  )
}

export default TodoList
