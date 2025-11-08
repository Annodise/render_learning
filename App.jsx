import { useState, useRef } from 'react'
import './App.css'

function App() {


  return (
    <div className='box'>
      <h1>Phakkawee Katkaew</h1>  
      <button className='bt' onClick={()=>{window.location.href = '/src/page01/index.html'}}>Enter</button>
    </div>
  )
}

export default App
