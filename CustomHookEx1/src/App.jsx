
import './App.css'
import useDisplay from './Hooks/useDisplay'
import useStateDisplay from './Hooks/useStateDisplay'

function App() {
  const [DisplayMessage] = useDisplay()
  const message1 = DisplayMessage()

  const [message] = useStateDisplay()

  return (
    <>
    <div>
    <h1> This is a <span className='text-blue-400'>{message1}</span></h1>
    <h1> This is a <span className='text-blue-400'>{message}</span></h1>
    </div>
     
    </>
  )
}

export default App
