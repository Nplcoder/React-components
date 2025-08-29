import React from 'react'

function ItemTodo({item, todos, setTodos}) {
  function handleDelete(item) {
    console.log("Clicked Deleted", item)
    setTodos(todos.filter((todo) => todo !== item))
  }

  return (
    <div className='w-[500px] text-[#353935] text-xl mx-auto'>
      <div className='flex items-center justify-between font-bold p-5'>
        <span>{item}</span>
      <span>
        <button onClick={() => handleDelete(item)} className="bg-yellow-300 text-white px-3 py-1 rounded shadow hover:bg-yellow-400 font-normal mr-5 -mt-2">x</button>
        </span>
        </div>
        
      <hr className='border border-gray-200 w-[92%] -mt-2' />
    </div>
  )
}

export default ItemTodo
