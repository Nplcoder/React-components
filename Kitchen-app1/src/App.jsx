import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Navbar from './components/Navbar'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'

function App() {
  const [foodData, setFoodData] = useState([])
  const [FoodId, setFoodId] = useState('656329')

  return (
    <>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      
      <Container >
        <InnerContainer>
        <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails FoodId={FoodId} />
        </InnerContainer>
        
      </Container>
     
    </>
  )
}

export default App
