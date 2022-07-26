import React from 'react'
import { Link} from 'react-router-dom'

function HotelCard({hotel}) {
  return (
    <div>
        <p>{hotel.name}</p>
     
        {hotel.location}
      
    </div>
  )
}

export default HotelCard