import React from 'react'
import "./filter.css"
import { useSelector } from 'react-redux';
const Filter = ({setData}) => {
  let favData=useSelector((store)=>store.favItems);

  return (
    <div className='filterContainer'>
      <p >Filter By : </p>
      <button>Unread</button>
      <button>Read</button>
      <button  onClick={()=>{setData(favData) }} >Favorites</button>
    </div>
  )
}

export default Filter