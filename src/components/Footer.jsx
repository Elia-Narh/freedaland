import { Link } from 'react-router-dom'
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-text">
               <img src="/freedaland logo2.png" alt="Freedaland Logo" className="logo-image" />

              </div>
            </div>
            <p className="footer-description">
              Your trusted partner in construction materials, architectural design, 
              and real estate solutions. Building dreams since 2010.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li><Link to="/products/solid-blocks">Solid Blocks</Link></li>
              <li><Link to="/products/hollow-blocks">Hollow Blocks</Link></li>
              <li><Link to="/contact">Bulk Orders</Link></li>
              <li><Link to="/contact">Request Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/architecture">Architecture</Link></li>
              <li><Link to="/real-estate/land-sales">Land Sales</Link></li>
              <li><Link to="/real-estate/rentals">Property Rentals</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>Ghana, Tema<br />City, Peace Be</span>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+233 557869504">+233 557869504</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:info@freedaland.com">info@freedaland.com</a>
              </li>
            </ul>
            <div className="business-hours">
              <strong>Business Hours:</strong>
              <p>Mon - Fri: 8:00 AM - 6:00 PM<br />
              Sat: 9:00 AM - 4:00 PM<br />
              Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Freedaland Construction. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
