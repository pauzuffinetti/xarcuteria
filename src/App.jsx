import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Equipo from './Components/Equipo/Equipo'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
  import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Equipo /> */}
      <Products />
      <Contact />

      <Footer />
    </div>
  )
}

export default App
