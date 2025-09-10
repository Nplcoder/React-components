import { createContext, useState} from 'react'
import './App.css'
import Checkout from './Checkout'
import Login from './Login'
export const userContext = createContext()

function App() {

  const [user, setUser] = useState('Guest')

  return (
    <>
      <div className='text-center'>
        <h1 className='bg-black text-white font-extralight'>Context API</h1>
        <hr className='border-black-[50px] mt-0.5' />

        <userContext.Provider value={{user, setUser}}>

        <Login />
        <Checkout />

        </userContext.Provider>
        
        
        </div>
      
    </>
  )
}

export default App
