import React from 'react'
import Header from './comp/header'
import Footer from './comp/footer'
import About from './comp/about'
import Contact from './comp/contact'
import Services from './comp/services'
import Team from './comp/team'
import Price from './comp/price'
import Map from './comp/map' 
const App = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Contact/>
        <Services/>
        <Team/>
        <Price/>
        <Map />
        <Footer/>
    </div>
  )
}

export default App
