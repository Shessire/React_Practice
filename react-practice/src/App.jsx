import './App.css'
import { useState } from 'react'
import pads from './pads'

function App() {

  const [pad, setPad] = useState(pads)

  const buttonElements = pad.map((p) => (
    <button key={p.id} ></button>
  ))

  return (
    <>
      <div className='pad-container'>
        {buttonElements}
      </div>
    </>
  )
}

export default App
