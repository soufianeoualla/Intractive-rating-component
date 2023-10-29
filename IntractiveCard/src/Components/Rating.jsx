import './Rating.css'

const Rating = ({Rate,setitems}) => {
  return (
    <div className="rating">
        <button onClick={()=>setitems(Rate)}>{Rate}</button>
    
    </div>
  )
}

export default Rating