import Header from "./components/Header"
import "./index.css"
import Entry from "./components/Entry"
import data from "./data"

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <Entry data={data} />
      </main>
    </>
  )
}

export default App
