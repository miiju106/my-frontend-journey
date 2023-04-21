import React from 'react'
import data from "./constants/data";
import "./pendingtasks.css";

const icons = [
    <i className='bx bx-receipt'></i>,
    <i className='bx bx-user'></i>,
    <i className='bx bx-cube'></i>,
    <i className='bx bx-dollar'></i>
]


const Pendingtasks = () => {
  return (
    <ul className='pending-div'>
        <div>Pending Tasks</div>
        {
data.overall.map((item, index)=>(
    <li key={`overall-${index}`} className="sub-pending">
        <div className='icon-div'><i className='bx bx-receipt'></i></div>
        <div>
            <div className='pending-title'>{item.title}</div>
            <div className='pending-value'>{item.value}</div>
        </div>
    </li>
))
        }
        
        
        </ul>
  )
}

export default Pendingtasks