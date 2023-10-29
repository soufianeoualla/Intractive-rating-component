import { useState } from 'react'
import './App.css'
import IntractiveCard from './Components/IntractiveCard'
import Thankyou from './Components/Thankyou/Thankyou'

function App() {
  const [isSubmitted,setisSubmitted]=useState(false)
  const [items,setitems]=useState('')
  return (
    <>
    {!isSubmitted && <IntractiveCard setisSubmitted={setisSubmitted} setitems={setitems}/>}
     
    {isSubmitted && <Thankyou items= {items} />}
     
    </>
  )
}

export default App
