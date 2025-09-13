import './App.css'
import useDisplayMessage from './hooks/useDisplaymessage'

function App() {

  const [DisplayMessage] = useDisplayMessage()


  return (
    <>
     <div className='text-center'>
     <h1> Custom Hooks</h1>

     </div>

    </>
  )
}

export default App
