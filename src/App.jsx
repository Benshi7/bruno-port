import React from 'react'
import './App.css'
import Header from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home'
import ContactPage from './components/ContactPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/contact" exact Component={ContactPage}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
