import { useState } from "react"
import WindowTracker from "./assets/components/WindowTracker"

function App() {
  const [show, setShow] = useState(true)

  function toggleShow () {
    setShow((prev) => !prev)
  }

  return (
    <>
      <button onClick={toggleShow}>
        Toggle WindowTracker
      </button>
      {show 
        ? <WindowTracker />
        : null
      }
    </>
  )
}

export default App
