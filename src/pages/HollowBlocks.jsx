import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Package, Truck, Shield, ArrowRight, Calculator } from 'lucide-react'

const HollowBlocks = () => {
  const [quantity, setQuantity] = useState(100)
  const pricePerUnit = 7.50
  const totalPrice = quantity * pricePerUnit

  const specifications = [
    { label: 'Dimensions', value: '400mm x 200mm x 200mm' },
    { label: 'Weight', value: '12-14 kg per block' },
    { label: 'Compressive Strength', value: 'Minimum 3.0 N/mm²' },
    { label: 'Water Absorption', value: 'Less than 15%' },
    { label: 'Void Ratio', value: '40-50%' },
    { label: 'Thermal Insulation', value: 'Excellent (R-value 0.8)' }
  ]

  const features = [
    'Lightweight for easy handling and faster construction',
    'Superior thermal and acoustic insulation',
    'Cost-effective compared to solid blocks',
    'Reduced dead load on structures',
    'Easy to cut and modify on site',
    'Eco-friendly with less material usage'
  ]

  const applications = [
    'Non-load bearing partition walls',
    'Compound walls and fencing',
    'Interior partition walls',
    'Cladding and facing work',
    'Residential construction',
    'Low-rise buildings'
  ]

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <div className="product-hero-text">
              <h1 className="page-title">Hollow Concrete Blocks</h1>
              <p className="product-subtitle">
                Lightweight, cost-effective hollow blocks with excellent thermal insulation.
                Ideal for partition walls and residential construction.
              </p>
              <div className="product-badges">
                <span className="badge">Lightweight</span>
                <span className="badge">Cost-Effective</span>
                <span className="badge">Thermal Insulation</span>
              </div>
              <div className="product-price">
                <span className="price-label">Starting at</span>
                <span className="price-value">GH{pricePerUnit.toFixed(2)}</span>
                <span className="price-unit">per block</span>
              </div>
            </div>
            <div className="product-hero-image">
              <div className="image-placeholder">
                <Package size={100} />
                <p>Hollow Blocks</p>
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
              <h3>Certified Quality</h3>
              <p>Meets all industry standards for strength and durability</p>
            </div>
            <div className="feature-box">
              <Truck size={32} />
              <h3>Reliable Delivery</h3>
              <p>On-time delivery with careful handling and transportation</p>
            </div>
            <div className="feature-box">
              <Calculator size={32} />
              <h3>Volume Pricing</h3>
              <p>Attractive discounts for bulk orders and construction projects</p>
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

      {/* Comparison Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Hollow vs Solid Blocks</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Hollow Blocks</th>
                  <th>Solid Blocks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>Lightweight (12-14 kg)</td>
                  <td>Heavy (17-19 kg)</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>More economical</td>
                  <td>Higher cost</td>
                </tr>
                <tr>
                  <td>Thermal Insulation</td>
                  <td>Excellent</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>Load Bearing</td>
                  <td>Non-load bearing</td>
                  <td>Load bearing</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Partitions, walls</td>
                  <td>Foundations, structures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Order Hollow Blocks?</h2>
            <p>Contact us for bulk pricing, delivery options, and technical support</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Request Quote
                <ArrowRight size={20} />
              </Link>
              <Link to="/products/solid-blocks" className="btn btn-secondary btn-large">
                View Solid Blocks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HollowBlocks
