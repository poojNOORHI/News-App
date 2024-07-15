
import React from 'react'

const Navbar = ({setLink}) => {
  return (
    <div>
      {
     <nav class="navbar">
     <a href="#" class="logo">SmartNewz</a>
     <div class="links">
     <a href="#home" onClick={()=>setLink("sports")}>Sports</a>
     <a href="#about"  onClick={()=>setLink("general")}>General</a>
     <a href="#services" onClick={()=>setLink("technology")}>Technology</a>
    </div>
    </nav>
    }
   </div>
  )
}

export default Navbar
