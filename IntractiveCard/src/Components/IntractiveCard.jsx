
import { useState } from 'react'
import Button from './Button/button'
import './IntractiveCard.css'
import Rating from './Rating'
import star from './assets/icon-star.svg'


const IntractiveCard = ({setisSubmitted, setitems}) => {



  return (
    <div className="container">
        <img src={star} alt="" className='star'/>
        <h1>How did we do?</h1>
        <p> Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        <div className="rates">
        <Rating Rate='1' setitems={setitems}/>
        <Rating Rate='2'setitems={setitems}/>
        <Rating Rate='3'setitems={setitems}/>
        <Rating Rate='4'setitems={setitems}/>
        <Rating Rate='5'setitems={setitems}/>
    </div>
    <Button setisSubmitted={setisSubmitted} />
    </div>
  )
}

export default IntractiveCard