
import React, { useState } from 'react'
import Newsboard from './Components/Newsboard'
import Navbar from './Components/Navbar'

const App = () => {
  const [link,setLink]=useState("technology");
  return (
    <div>
      <Navbar setLink ={setLink}/>
      <Newsboard link={link}/>
    </div>
  )
}

export default App
