import './button.css'
 
const Button = ({setisSubmitted}) => {
  return (
    <button type="submit" onClick={()=>setisSubmitted(true)}  className='btn'>Submit</button>
  )
}

export default Button