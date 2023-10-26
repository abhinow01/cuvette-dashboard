import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu-item active">Skill Test</div>
      <div className="menu-item">Dashboard</div>
      <div className="menu-item">Internships</div>
      <div className="separation-line"></div>
    </div>
  );
}

export default Sidebar;
