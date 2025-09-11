
import './App.css'
import { UserProvider } from './context/UserContext'
import Login from './Login'
import Logout from './Logout'
import Namaste from './Namaste'
import Title from './Title'

function App() {
 

  return (
    <>
      <div className='text-center'>
      <Title />
      
      <UserProvider>

        <Login />
        <Namaste />
        <Logout />

      </UserProvider>
      </div>
    </>
  )
}

export default App
