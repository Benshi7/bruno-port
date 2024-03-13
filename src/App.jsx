import React from 'react'
import './App.css'
import Header from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@fontsource-variable/nunito'
import '@fontsource/ubuntu'
import '../fonts.js'
import './utils/grained.js'

function App () {
  return (
    <div style={{
      fontFamily: 'Metropolis'
    }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
