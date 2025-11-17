import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index)
  }

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'Products',
      dropdown: [
        { title: 'Solid Blocks', path: '/products/solid-blocks' },
        { title: 'Hollow Blocks', path: '/products/hollow-blocks' }
      ]
    },
    { title: 'Architecture', path: '/services/architecture' },
    {
      title: 'Real Estate',
      dropdown: [
        { title: 'Land Sales', path: '/real-estate/land-sales' },
        { title: 'Property Rentals', path: '/real-estate/rentals' }
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ]

  // Check if current path matches menu item
  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+233 557869504" className="contact-link">
                <Phone size={16} />
                <span>+233 557869504</span>
              </a>
              <a href="mailto:info@freedaland.com" className="contact-link">
                <Mail size={16} />
                <span>info@freedaland.com</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span>Building Your Dreams Since 2010</span>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo Section */}
            <div className="navbar-brand">
              <Link to="/" className="logo">
                <img src="/freedaland logo2.png" alt="Freedaland Logo" className="logo-image" />
              </Link>
            </div>

            {/* Navigation Section */}
            <div className="navbar-nav">
              {/* Desktop Menu */}
              <div className="nav-menu desktop">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="nav-item"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <>
                        <span className={`nav-link dropdown-trigger ${item.dropdown.some(sub => isActivePath(sub.path)) ? 'active' : ''}`}>
                          {item.title}
                          <ChevronDown size={16} className={activeDropdown === index ? 'rotated' : ''} />
                        </span>
                        <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link 
                              key={subIndex}
                              to={subItem.path} 
                              className={`dropdown-link ${isActivePath(subItem.path) ? 'active' : ''}`}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                        to={item.path} 
                        className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button & Social Links */}
              <div className="header-actions">
                <div className="header-social-links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="header-social-link">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="header-social-link">
                    <Facebook size={18} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-social-link">
                    <Instagram size={18} />
                  </a>
                </div>
                <Link to="/contact" className="btn btn-primary cta-btn desktop">
                  Enquire
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-nav">
                {menuItems.map((item, index) => (
                  <div key={index} className="mobile-nav-item">
                    {item.dropdown ? (
                      <>
                        <span 
                          className="mobile-nav-link mobile-dropdown-trigger"
                          onClick={() => toggleMobileDropdown(index)}
                        >
                          {item.title}
                          <ChevronDown size={16} className={activeMobileDropdown === index ? 'rotated' : ''} />
                        </span>
                        {activeMobileDropdown === index && (
                          <div className="mobile-dropdown">
                            {item.dropdown.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="mobile-dropdown-link"
                                onClick={toggleMenu}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="mobile-nav-link"
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary mobile-cta" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
