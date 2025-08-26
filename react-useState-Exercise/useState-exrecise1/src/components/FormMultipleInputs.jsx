import React, { useState } from 'react'

function FormMultipleInputs() {
    const [name, setName] = useState({firstName:"", lastName:""})

    function handleSubmit(e){
        e.preventDefault();
        console.log(name)
    }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form >
      <div className='mb-1'>
      <span>First Name </span> 
        <input className='bg-green-200' onChange={(e) => setName({...name, firstName:e.target.value})} type="text" value={name.firstName} />
    </div>

    <div>
    <span>Last Name </span>
        
        <input className='bg-orange-200' onChange={(e) => setName({...name, lastName:e.target.value})} type='text' value={name.lastName}/>

    </div>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        
      </form>

        

    </div>
  )
}

export default FormMultipleInputs
