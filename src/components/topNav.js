import React from 'react'
import "./topNav.css";
import TableRowsIcon from '@mui/icons-material/TableRows';


const TopNav = ({viewBar, setViewBar}) => {
  return (
    <div className="nav-up">
    <div className="nav-leftDiv">
    <TableRowsIcon onClick={()=>setViewBar(!viewBar)} className="menu"/>    
    <h4>My Frontend Journey</h4>
    </div>
    
      <div className="user-img">
       <div className="img-div"> <img
          src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        </div>
        <span>John Doe</span>
      </div>
    </div>
  )
}

export default TopNav;