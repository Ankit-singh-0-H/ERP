import { useState } from 'react'
import { FaSearch } from "react-icons/fa";

import './App.css'

function App() {


  return (
    <>

      <div class='navbar' >
        <div class='logo'>
          <div>logo</div>
        </div>
        <div class='mainbar' >
          <ul >
            <li>Home</li>
            <li>About</li>
            <li href='login.jsx'>login</li>
          </ul>
        </div>
        <div class='searchbar'>
          <FaSearch />
        </div>
      </div>



    </>
  )
}

export default App
