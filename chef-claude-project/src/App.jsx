import Header from "./components/Header"
import Main from "./components/Main"
import TestConditional from "./components/TestConditional"
import JokesData from "./JokesData"
import "./App.css"

function App() {
  
  return (
    <>
      {/* <Header />
      <Main /> */}
      {
        JokesData.map((j) => (
          <TestConditional props={j} />
        ))
      }
    </>
  )
}

export default App
