export default function ItemTodo({item, todos, setTodos}){
    function HandleDelete(item){
        // console.log("Delete button clicked:", item)
        const newTodos = todos.filter((todo) => todo !== item)
        setTodos(newTodos)
    }

    function handleClick(name){
        // console.log("Item Clicked", name)
        const newArray = todos.map((todo) => todo.name === name ? {...todo, done:!todo.done}: todo)
        setTodos(newArray)
        // console.log(setTodos)
    }
    
    return(
        
        <div className='w-[500px] text-[#353935] text-xl mx-auto'>
        <div className='flex items-center justify-between font-bold p-5'>
            <span onClick={() => handleClick(item.name)} className={item.done ?'line-through text-gray-400 cursor-pointer' :"cursor-pointer"}>{item.name}</span>
            <span><button onClick={() => HandleDelete(item)} className="bg-yellow-300 text-white px-3 py-1 rounded shadow hover:bg-yellow-400 font-normal mr-5 -mt-2">x</button></span>
        </div>
        <hr className='border border-gray-200 w-[92%] -mt-2'  />
        {/* {console.log(todos)} */}
        </div>
        
    )
}