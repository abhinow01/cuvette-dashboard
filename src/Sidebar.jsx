import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu-item active"><img src='/assets/award.svg'/>  Skill Test</div>
      <div className="menu-item"><img src='/assets/icon 2.svg'/>  Dashboard</div>
      <div className="menu-item"><img src='/assets/icon.svg'/>  Internships</div>
      <div className="separation-line"></div>
    </div>
  );
}

export default Sidebar;
