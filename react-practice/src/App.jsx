import './App.css'
import { useState } from 'react'
import padsData from './pads'
import Pad from './components/Pad'

function App() {

  const [pads, setPads] = useState(padsData)
  
  const buttonElements = pads.map((p) => (
    <Pad key={p.id} color={p.color} on={p.on}/>
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
