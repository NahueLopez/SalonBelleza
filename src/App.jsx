import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Estadisticas from "./components/Estadisticas"
import Servicios from "./components/Servicios"
import Trabajos from "./components/Trabajos"
import Testimonios from "./components/Testimonios"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <Estadisticas />
      <Servicios />
      <Trabajos />
      <Testimonios />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
