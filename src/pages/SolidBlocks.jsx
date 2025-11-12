import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Package, Truck, Shield, ArrowRight, Calculator } from 'lucide-react'

const SolidBlocks = () => {
  const [quantity, setQuantity] = useState(100)
  const pricePerUnit = 8.50
  const totalPrice = quantity * pricePerUnit

  const specifications = [
    { label: 'Dimensions', value: '400mm x 200mm x 200mm' },
    { label: 'Weight', value: '17-19 kg per block' },
    { label: 'Compressive Strength', value: 'Minimum 3.5 N/mm²' },
    { label: 'Water Absorption', value: 'Less than 15%' },
    { label: 'Density', value: '1800-2000 kg/m³' },
    { label: 'Fire Resistance', value: '4+ hours' }
  ]

  const features = [
    'High compressive strength for structural integrity',
    'Excellent thermal and sound insulation',
    'Fire resistant and weather proof',
    'Consistent dimensions for easy construction',
    'Made from quality cement and aggregates',
    'Certified to meet building standards'
  ]

  const applications = [
    'Load-bearing walls',
    'Foundation construction',
    'Boundary walls',
    'Multi-story buildings',
    'Commercial structures',
    'Industrial facilities'
  ]

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <div className="product-hero-text">
              <h1 className="page-title">Solid Concrete Blocks</h1>
              <p className="product-subtitle">
                Premium quality solid blocks for superior structural strength and durability.
                Perfect for load-bearing applications and foundations.
              </p>
              <div className="product-badges">
                <span className="badge">Certified Quality</span>
                <span className="badge">High Strength</span>
                <span className="badge">Weather Resistant</span>
              </div>
              <div className="product-price">
                <span className="price-label">Starting at</span>
                <span className="price-value">GH {pricePerUnit.toFixed(2)}</span>
                <span className="price-unit">per block</span>
              </div>
            </div>
            <div className="product-hero-image">
              <div className="image-placeholder">
                <Package size={100} />
                <p>Solid Blocks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="features-grid-3">
            <div className="feature-box">
              <Shield size={32} />
              <h3>Premium Quality</h3>
              <p>Manufactured using high-grade materials and strict quality control</p>
            </div>
            <div className="feature-box">
              <Truck size={32} />
              <h3>Fast Delivery</h3>
              <p>Prompt delivery to your construction site with our fleet of trucks</p>
            </div>
            <div className="feature-box">
              <Calculator size={32} />
              <h3>Bulk Discounts</h3>
              <p>Special pricing for large orders and regular customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            {specifications.map((spec, index) => (
              <div key={index} className="spec-card">
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="section">
        <div className="container">
          <div className="two-column-layout">
            <div>
              <h2 className="section-title">Key Features</h2>
              <ul className="features-list-simple">
                {features.map((feature, index) => (
                  <li key={index}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title">Applications</h2>
              <ul className="features-list-simple">
                {applications.map((app, index) => (
                  <li key={index}>
                    <Check size={20} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="section section-gray">
        <div className="container">
          <div className="calculator-section">
            <h2 className="section-title">Price Calculator</h2>
            <p className="section-subtitle">Calculate your order cost instantly</p>
            <div className="calculator-box">
              <div className="calculator-input">
                <label htmlFor="quantity">Number of Blocks:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
              </div>
              <div className="calculator-result">
                <div className="result-row">
                  <span>Unit Price:</span>
                  <span>GH{pricePerUnit.toFixed(2)}</span>
                </div>
                <div className="result-row">
                  <span>Quantity:</span>
                  <span>{quantity} blocks</span>
                </div>
                <div className="result-row total">
                  <span>Total Price:</span>
                  <span>GH{totalPrice.toFixed(2)}</span>
                </div>
                <p className="calculator-note">
                  * Bulk discounts available for orders over 1,000 blocks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Order Solid Blocks?</h2>
            <p>Contact us for bulk pricing, delivery options, and technical support</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Request Quote
                <ArrowRight size={20} />
              </Link>
              <Link to="/products/hollow-blocks" className="btn btn-secondary btn-large">
                View Hollow Blocks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolidBlocks
