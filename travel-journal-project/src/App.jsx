import Header from "./components/Header"
import "./index.css"
import Entry from "./components/Entry"
import data from "./data"

const dataProp = data

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <Entry data={dataProp} />
      </main>
    </>
  )
}

export default App
