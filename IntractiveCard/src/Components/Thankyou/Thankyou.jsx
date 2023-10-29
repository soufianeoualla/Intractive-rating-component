import ullistration from '../assets/illustration-thank-you.svg'
import './Thankyou.css'
const Thankyou = ({items}) => {
  return (
    <div className="container thankyou hidden">
        <img src={ullistration} alt="" className='ullistration'/>
        <div className="selected-rating">
            
            <p>You selected {items} out of 5</p>
        </div>
        <h3>  Thank you!</h3>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
         don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Thankyou