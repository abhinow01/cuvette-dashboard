import React from "react";
import './App.css'
function Topbar(){
    return (
<div className="top-bar">
      <img src="./public/assets/logo.png" alt="Logo" className="logo" />
      <div className="id"> <button className="button-id">Your ID </button></div>
      <div className="separation-line-topbar"></div>
    </div>
    )
}
export default Topbar;