import React from 'react'
import "./list.css"
const List = ({elm}) => {
  const Name=`${elm.from.name} < ${elm.from.email} >`;
  
  
  
  return (
    <div className='list' key={elm.from.name}>
      <div><h2  className="logo">{elm.from.email.charAt(0).toUpperCase()}</h2></div>
      <div className="content">
         <p>From : <span>{Name}</span></p>
         <p>Subject: <span>{elm.subject}</span></p>
         <p>{elm.short_description}</p>
         <p>{elm.date}</p>
      </div>
    </div>
  )
}

export default List