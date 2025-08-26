import React, { useState }  from 'react'

function FormOne() {
    const [name, setName] = useState(''); 

  return (
    <div className="bg-violet-50 p-1.5 rounded-b-lg">
      <form>
        <input onChange={(e) => setName(e.target.value)} type="text" value={name} />s
      </form>
    </div>
  )
}

export default FormOne
