import React, { useState } from 'react'

function TaskOneSubmitForm() {
    const [name, setName] = useState({firstName:"", lastName:""})

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name)
    }


  return (
    <div>
        <form >
            <input className='bg-amber-100' onChange={(e) => setName({...name, firstName:e.target.value})} type="text" value={name.firstName}/>
            

            <input className='bg-green-200' onChange={(e) => setName({...name, lastName:e.target.value})} type="text" value={name.lastName} />

            <button onClick={(e) => handleSubmit(e)}>Submit</button>

        </form>
      
    </div>
  )
}

export default TaskOneSubmitForm
