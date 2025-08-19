import Button from "./Button"

import LeftArrow from 'url:../assets/images/left-arrow.png'
import RightArrow from 'url:../assets/images/right-arrow.png'
import AppleBasket from "./AppleBasket"

import './AppleCounter.css'

const AppleCounter = () => {
  console.log("LeftArrow import:", LeftArrow);
  return (
    <section>
      
        <AppleBasket appleCount={10} basketName="Basket 1" />
        <Button imageUrl={LeftArrow}/>
        
        <Button imageUrl={RightArrow}/>
        <AppleBasket appleCount={0} basketName="Basket 2" />
    </section>
  )
}

export default AppleCounter