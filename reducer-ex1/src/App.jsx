import { useState } from 'react'
import './App.css'
import UseStateEx1 from './component/UseStateEx1'
import UseReducerEx1 from './component/UseReducerEx1'
import UseReducerEx2 from './component/UseReducerEx2'
import UseReducerEx3 from './component/UseReducerEx3'
import UseReducerEx4 from './component/UseReducerEx4'
import UseReducerBankAc from './component/UseReducerBankAc'

function App() {
  

  return (
    <>
    <div className='text-center'>
    <UseStateEx1/>
    <hr className='m-4 border-green-200' />

    <UseReducerEx1 />
    <hr className='m-4 border-green-200' />

    <UseReducerEx2 />
    <hr className='m-4 border-green-200' />

    <UseReducerEx3 />
    <hr className='m-4 border-green-200' />

    <UseReducerEx4 />
    <hr className='m-4 border-green-200' />

    <UseReducerBankAc />
    <hr className='m-4 border-green-200' />

    </div> 
    </>
  )
}

export default App
