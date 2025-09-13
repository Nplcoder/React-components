
import './App.css'
import { UserProvider } from './context/UserContext'
import Login from './Login'
import Logout from './Logout'
import Salam from './Salam'
import Title from './Title'

function App() {


  return (
    <><div className='text-center'>
      <Title />

      <UserProvider>
      
      <Login />
      <Salam />
      <Logout />

      </UserProvider>

    </div>
     
    </>
  )
}

export default App
