import React from 'react'

function Cardd({card,index,clickHandler}) {
  return (
    <div className={`card ${card.status}`} onClick={()=>clickHandler(index)}> 
    <img className='cimg' src={card.img} alt={card.name} />
      
     </div>
  )
}

export default Cardd