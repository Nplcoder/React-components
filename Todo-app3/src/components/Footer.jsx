export default function Footer({completedTodos, totalTodos}){
    return(
        <div className='fixed bottom-0 left-0 w-full bg-yellow-300 text-center font-bold h-[60px] p-[10px] text-[22px] flex items-center justify-center shadow-xl'>
        <span className='mr-8'>Completed Task:  {completedTodos}</span>
        <span>Total Task:  {totalTodos}</span>
        </div>
    )
}