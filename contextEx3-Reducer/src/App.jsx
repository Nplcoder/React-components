import './App.css'
import { UserProvider } from './context/Context'
import Login from './Login'
import Logout from './Logout'
import Title from './Title'
import Welcome from './Welcome'

function App() {


  return (
    <> 
    <div className='text-center'>
    <Title />

    <UserProvider>

    <Login />
    <Welcome />
    <Logout />

    </UserProvider>

    </div>
   
    </>
  )
}

export default App
