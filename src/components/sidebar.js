import React from "react";
import { Link } from "react-router-dom";
import sidebarNav from "./constants/sidebarNav";
import "./sidebar.css";

const Sidebar = ({viewBar, setViewBar}) => {
  return (
    <div className="sidebar-cont">
      <div className="sidebar-close" onClick={()=>setViewBar(!viewBar)}>
        <i className="bx bx-x"></i>
      </div>
      {sidebarNav.map((nav, index) => (
        <Link to={nav.link} key={`nav-${index}`} className="sidebar-subdiv">
          <div className="nav-icon">{nav.icon}</div>
          <div className="nav-text">{nav.text}</div>
        </Link>
      ))}
      <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt">
                        Logout
                    </div>
                </div>
    </div>
  );
};

export default Sidebar;
