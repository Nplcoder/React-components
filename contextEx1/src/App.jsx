import './App.css'
import Title from './Title'
import { ProviderContext } from './Context/UserContext'
import Checkout from './Checkout'
import Login from './Login'

function App() {


  return (
    <>
      <div className='text-center'>
        
        <Title />

      <ProviderContext>
      <Login />
      <Checkout/>
      </ProviderContext>

      </div>
    </>
  )
}

export default App
