import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SolidBlocks from './pages/SolidBlocks'
import HollowBlocks from './pages/HollowBlocks'
import Architecture from './pages/Architecture'
import LandSales from './pages/LandSales'
import PropertyRentals from './pages/PropertyRentals'
import About from './pages/About'
import Contact from './pages/Contact'
import { initScrollAnimations } from './utils/scrollAnimations'

function App() {
  useEffect(() => {
    // Initialize scroll animations when component mounts
    const observer = initScrollAnimations()

    // Cleanup on unmount
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/solid-blocks" element={<SolidBlocks />} />
            <Route path="/products/hollow-blocks" element={<HollowBlocks />} />
            <Route path="/services/architecture" element={<Architecture />} />
            <Route path="/real-estate/land-sales" element={<LandSales />} />
            <Route path="/real-estate/rentals" element={<PropertyRentals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
