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

const AppleCounter = () => {

  console.log("LeftArrow import:", LeftArrow);

  const leftClickHandler = () => {
    // console.log('left Clicked')
    if (rightAppleCount > 0) {
      rightAppleCount --
      leftAppleCount ++
      // root.render(<AppleCounter />)
    }
  }

  const RightClickHandler = () => {
    // console.log('Right Clicked')
    if (leftAppleCount > 0){
      rightAppleCount ++
      leftAppleCount --
      // root.render(<AppleCounter />)
    }
  }


  return (
    <>
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
      <Button clickHandler ={leftClickHandler} imageUrl={LeftArrow} buttonName="Left"/>
      
      <Button clickHandler ={RightClickHandler} imageUrl={RightArrow} buttonName="Right"/>

      <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      
  </section>
      <p style={{textAlign:"center", marginTop: '32px',}}>
        <button onClick={() => {
          root.render(<AppleCounter />)
        }}>Re-Render</button>
      </p>
    </>
    
  )
}

export default AppleCounter