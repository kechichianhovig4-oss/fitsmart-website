import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import LoadingSpinner from './components/LoadingSpinner' // You'll create this

const App = () => {
  const [loading, setLoading] = useState(false)

  // Handler for navigation with delay
  const handleNavigation = (navigateFn) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigateFn()
    }, 10000) // 300ms delay
  }

  return (
    <Router>
      {loading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App