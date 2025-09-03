import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Navbar from './components/Navbar'

function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
     
    </>
  )
}

export default App
