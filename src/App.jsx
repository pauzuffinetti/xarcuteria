import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Equipo from './Components/Equipo/Equipo'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Equipo /> */}
      <Products />
      <Footer />

    </div>
  )
}

export default App
