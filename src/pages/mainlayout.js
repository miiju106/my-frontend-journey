import React from 'react'
import Sidebar from "../components/sidebar"
import TopNav from "../components/topNav";
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react";


const Mainlayout = () => {
  const [viewBar, setViewBar] = useState(true);
  
  

  return (
    <>
    <TopNav viewBar={viewBar} setViewBar ={setViewBar}  />    
    <div className="side-main">
         {viewBar && <Sidebar viewBar={viewBar} setViewBar ={setViewBar}/>}
         <Outlet/>
        </div>
        </>
  )
}

export default Mainlayout;