import React from 'react'
import "./list.css"
import { useDispatch } from 'react-redux';
import { addToBody } from '../../Redux/action';
const List = ({elm}) => {
  const Dispatch=useDispatch()
  const Name=`${elm.from.name} < ${elm.from.email} >`;
  
  return (
    <div className='list' key={elm.from.name} onClick={()=>{ Dispatch(addToBody(elm))}}>
      <div><h2  className="logo">{elm.from.email.charAt(0).toUpperCase()}</h2></div>
      <div className="content">
         <p>From : <span>{Name}</span></p>
         <p>Subject: <span>{elm.subject}</span></p>
         <p>{elm.short_description}</p>
         <p>26/02/2020 10.30 am</p>
      </div>
    </div>
  )
}

export default List