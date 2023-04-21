import React from 'react'
import "./dashright.css";
import Pendingtasks from "./pendingtasks";
import Recenttasks from "./recenttasks";

const Dashright = () => {
  return (
    <div className="dash-right">
      <Pendingtasks/>
      <Recenttasks/>
      </div>
  )
}

export default Dashright