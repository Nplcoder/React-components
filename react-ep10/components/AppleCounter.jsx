import Button from "./Button"

import LeftArrow from 'url:../assets/images/left-arrow.png'
import RightArrow from 'url:../assets/images/right-arrow.png'
import AppleBasket from "./AppleBasket"

// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.querySelector('#root'))

import './AppleCounter.css'

const totalAppleCount = 10;
let rightAppleCount = 0
let leftAppleCount = totalAppleCount - rightAppleCount

const AppleCounter = ({root}) => {

  const leftClickHandler = () => {
    // console.log('left Clicked')
    if (rightAppleCount > 0) {
      rightAppleCount --
      leftAppleCount ++
      root.render(<AppleCounter root={root} />)
    }
  }

  const rightClickHandler = () => {
    
    if (leftAppleCount > 0){
      rightAppleCount ++
      leftAppleCount --
      root.render(<AppleCounter root={root} />)
    }
  }


  return (
    <>
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
      <Button clickHandler ={leftClickHandler} imageUrl={LeftArrow} buttonName="Left"/>
      
      <Button clickHandler ={rightClickHandler} imageUrl={RightArrow} buttonName="Right"/>

      <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      
  </section>
      <p style={{textAlign:"center", marginTop: '32px',}}>
        <button onClick={() => {
         
        }}>Re-Render</button>
      </p>
    </>
    
  )
}

export default AppleCounter