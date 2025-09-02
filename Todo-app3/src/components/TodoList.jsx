import ItemTodo from "./ItemTodo";

export default function TodoList({todos, setTodos, sortedTodos}){
    return(
        <div className='bg-white rounded-2xl shadow-sm w-[500px] p-5 mt-12 mx-auto font-bold'>
            {
            sortedTodos.map((item) => ( 
                <ItemTodo 
                key={item.name} 
                item={item} 
                todos={todos} 
                setTodos={setTodos}/>
            ))}
        </div>
    )
}