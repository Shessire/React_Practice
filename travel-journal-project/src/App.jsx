import Header from "./components/Header"
import "./index.css"
import Entry from "./components/Entry"

const data = [
  {
    id: 1, 
    img: "https://scrimba.com/links/travel-journal-japan-image-url",
    country: "Japan",
    map: "https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    name: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
  }
]

function App() {

  return (
    <>
      <Header />
      <Entry data={data} />
    </>
  )
}

export default App
