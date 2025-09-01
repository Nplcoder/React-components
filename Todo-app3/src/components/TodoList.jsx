import ItemTodo from "./ItemTodo";

export default function TodoList({todos}){
    return(
        <div className='bg-white rounded-2xl shadow-sm w-[500px] p-5 mt-12 mx-auto font-bold'>
            {todos.map((item) => ( <ItemTodo key={item} item={item} todos={todos}/>
            ))}
        </div>
    )
}