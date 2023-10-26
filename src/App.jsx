import React from "react"
import Topbar from "./Topbar"
import './App.css'
import Sidebar from "./Sidebar"
import Content from "./Content"
function App() {
  

  return (
    <>
    <div className="App">
      <Topbar/>
      <Sidebar/>
      <Content/>
      </div>
    </>
  )
}

export default App
