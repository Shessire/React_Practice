import './App.css'
import { useState } from 'react'
import padsData from './pads'
import Pad from './components/Pad'

function App() {

  const [pads, setPads] = useState(padsData)

  function toggle (id) {
    setPads((prev) => (
      prev.map((p) => (
        p.id === id 
        ? {...p, on: !p.on}
        : p
      ))
    ))
  }

  function turnOff () {
    setPads((prev) => (
      prev.map((p) => ({
        ...p,
        on: false
      }))
    ))
  }
  
  const buttonElements = pads.map((p) => (
    <Pad key={p.id} on={p.on} id={p.id} color={p.color} click={toggle}/>
  ))

  return (
    <>
      <div className='pad-container'>
        {buttonElements}
      </div>
      <button style={{ backgroundColor: "red", marginTop: 10}} onClick={turnOff}>Turn all off</button>
    </>
  )
}

export default App
