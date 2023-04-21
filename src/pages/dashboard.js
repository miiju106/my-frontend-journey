import React from 'react'
import Dashleft from "../components/dashleft"
import Dashright from "../components/dashright"
import "./dashboard.css"


const Dashboard = () => {
  return (
    <div className='main-dash'>
      <Dashleft/>
      <Dashright/>
      </div>
  )
}

export default Dashboard