import React from 'react'
import "./body.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToFav } from '../../Redux/action'
const Body = () => {
  let email=useSelector((store)=>store.body);
  const Dispatch=useDispatch()

  

  return (
    <>
    {email<=0?
    "":<div className='body'>
    <div className="logo1">{email?.from.email.charAt(0).toUpperCase()}</div>
    <div className="bodyContent">
      <div className='name-btn'>
        <h2>{email?.from.name}</h2>
        <button onClick={()=>{ Dispatch(addToFav(email))}}> Mark as Favorite</button>
      </div>
      <p>26/02/2020 10.30 am</p>
      <p>{email?.short_description}</p>
    </div>
  </div>}
    </>
  )
}

export default Body