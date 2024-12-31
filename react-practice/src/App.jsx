import './App.css'
import { useState } from 'react'

function App() {

  const [myFavoriteThings, setMyFavouriteThings] = useState([]);
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavouriteThings((prev) => (
      [...prev, allFavoriteThings[prev.length]]
    ))
  }

  return (
    <>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </>
  )
}

export default App
