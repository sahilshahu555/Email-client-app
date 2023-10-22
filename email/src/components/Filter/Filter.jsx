import React from 'react'
import "./filter.css"
const Filter = () => {
  return (
    <div className='filterContainer'>
      <p >Filter By : </p>
      <button>Unread</button>
      <button>Read</button>
      <button>Favorites</button>
    </div>
  )
}

export default Filter