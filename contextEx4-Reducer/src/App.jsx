import './App.css'
import Title from './Title'
import { UserProvider } from './context/UserContext'
import Namaste from './Namaste'
import Login from './Login'
import Logout from './Logout'

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
