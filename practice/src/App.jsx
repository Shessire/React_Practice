
import { useEffect, useState } from 'react'
import './App.css'

function App(props) {
  const [starWarsData, setStarWarsData] = useState(null)
  const [count, setCount] = useState(1)

  useEffect(function() {
    fetch(`https://akabab.github.io/starwars-api/api/id/${count}.json`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  function handleClick () {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </>
  )
}

export default App
