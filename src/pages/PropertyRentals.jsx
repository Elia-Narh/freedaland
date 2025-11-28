import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Building, MapPin, DollarSign, Bed, Bath, Search, Filter, ArrowRight } from 'lucide-react'

const PropertyRentals = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterPriceRange, setFilterPriceRange] = useState('all')

  const rentals = [
    {
      id: 1,
      title: 'Modern 3-Bedroom Apartment',
      type: 'Residential',
      location: 'Downtown District',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,400 sq ft',
      price: 1800,
      features: ['Furnished', 'Parking', 'Balcony', 'Modern kitchen'],
      available: true,
      Image: '/rentalhouses/h4rent.jpg'
    },
    {
      id: 2,
      title: 'Spacious Office Space',
      type: 'Commercial',
      location: 'Business District',
      area: '2,500 sq ft',
      price: 3500,
      features: ['Reception area', 'Conference room', 'Parking spaces', 'High-speed internet'],
      available: true,
      Image: '/rentalhouses/h4rent1.jpg'
    },
    {
      id: 3,
      title: 'Luxury 4-Bedroom Villa',
      type: 'Residential',
      location: 'Hillside Estate',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,200 sq ft',
      price: 3200,
      features: ['Swimming pool', 'Garden', 'Garage', 'Security'],
      available: true,
      Image: '/rentalhouses/h4rent2.jpg'
    },
    {
      id: 4,
      title: 'Retail Shop - Prime Location',
      type: 'Commercial',
      location: 'Shopping District',
      area: '1,200 sq ft',
      price: 2800,
      features: ['Corner unit', 'Display windows', 'Storage room', 'High foot traffic'],
      available: true,
      Image: '/rentalhouses/h4rent3.jpg'
    },
    {
      id: 5,
      title: 'Cozy 2-Bedroom House',
      type: 'Residential',
      location: 'Suburban Area',
      bedrooms: 2,
      bathrooms: 1,
      area: '950 sq ft',
      price: 1200,
      features: ['Pet-friendly', 'Backyard', 'Parking', 'Quiet neighborhood'],
      available: true,
      Image: '/rentalhouses/h4rent4.jpg'
    },
    {
      id: 6,
      title: 'Executive Studio Apartment',
      type: 'Residential',
      location: 'City Center',
      bedrooms: 1,
      bathrooms: 1,
      area: '650 sq ft',
      price: 1100,
      features: ['Fully furnished', 'Gym access', 'Utilities included', 'Security'],
      available: false,
      Image: '/rentalhouses/h4rent5.jpg'
    }
  ]

  const filteredRentals = rentals.filter(rental => {
    const matchesSearch = rental.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rental.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || rental.type === filterType
    const matchesPrice = filterPriceRange === 'all' ||
                        (filterPriceRange === 'under1500' && rental.price < 1500) ||
                        (filterPriceRange === '1500-2500' && rental.price >= 1500 && rental.price <= 2500) ||
                        (filterPriceRange === 'over2500' && rental.price > 2500)
    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <div className="real-estate-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Property Rentals</h1>
          <p className="page-subtitle">
            Find your ideal residential or commercial rental property. Quality spaces with
            professional management and fair pricing for tenants and businesses.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="search-filter-bar">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search by property or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <Filter size={20} />
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
              <select value={filterPriceRange} onChange={(e) => setFilterPriceRange(e.target.value)}>
                <option value="all">All Prices</option>
                <option value="under1500">Under $1,500/mo</option>
                <option value="1500-2500">$1,500 - $2,500/mo</option>
                <option value="over2500">Over $2,500/mo</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Rentals Listing */}
      <section className="section">
        <div className="container">
          <div className="properties-count">
            <p>Showing {filteredRentals.length} of {rentals.length} properties</p>
          </div>
          <div className="properties-grid">
            {filteredRentals.map(rental => (
              <div key={rental.id} className="property-card">
                <div className="property-image">
                  <img src={rental.Image} alt={rental.title} />
                  {rental.available ? (
                    <span className="property-badge badge-success">Available</span>
                  ) : (
                    <span className="property-badge badge-danger">Rented</span>
                  )}
                </div>
                <div className="property-content">
                  <span className="property-type">{rental.type}</span>
                  <h3 className="property-title">{rental.title}</h3>
                  <div className="property-details">
                    <div className="property-detail">
                      <MapPin size={16} />
                      <span>{rental.location}</span>
                    </div>
                    {rental.bedrooms && (
                      <div className="property-detail">
                        <Bed size={16} />
                        <span>{rental.bedrooms} Beds</span>
                      </div>
                    )}
                    {rental.bathrooms && (
                      <div className="property-detail">
                        <Bath size={16} />
                        <span>{rental.bathrooms} Baths</span>
                      </div>
                    )}
                  </div>
                  <p className="property-area">{rental.area}</p>
                  <ul className="property-features">
                    {rental.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="property-footer">
                    <div className="property-price">
                      <DollarSign size={20} />
                      <span>${rental.price}/mo</span>
                    </div>
                    {rental.available && (
                      <Link to="/contact" className="btn btn-primary btn-small">
                        Apply Now
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Rental Services</h2>
          <div className="features-grid-3">
            <div className="feature-box">
              <Home size={32} />
              <h3>Quality Properties</h3>
              <p>Well-maintained residential and commercial spaces in prime locations</p>
            </div>
            <div className="feature-box">
              <Building size={32} />
              <h3>Property Management</h3>
              <p>Professional maintenance and responsive support for all tenants</p>
            </div>
            <div className="feature-box">
              <DollarSign size={32} />
              <h3>Fair Pricing</h3>
              <p>Competitive rental rates with transparent terms and conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-step">01</div>
              <h3 className="process-title">Browse & Select</h3>
              <p className="process-description">Browse available properties and shortlist your favorites</p>
            </div>
            <div className="process-card">
              <div className="process-step">02</div>
              <h3 className="process-title">Schedule Viewing</h3>
              <p className="process-description">Contact us to arrange a property viewing at your convenience</p>
            </div>
            <div className="process-card">
              <div className="process-step">03</div>
              <h3 className="process-title">Submit Application</h3>
              <p className="process-description">Complete the rental application with required documents</p>
            </div>
            <div className="process-card">
              <div className="process-step">04</div>
              <h3 className="process-title">Sign Lease</h3>
              <p className="process-description">Review and sign the lease agreement and move in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Tenant Benefits</h2>
          <div className="two-column-layout">
            <ul className="features-list-simple">
              <li>
                <Home size={20} />
                <span>Well-maintained properties with regular upkeep</span>
              </li>
              <li>
                <Building size={20} />
                <span>24/7 maintenance support and emergency services</span>
              </li>
              <li>
                <DollarSign size={20} />
                <span>Flexible lease terms and payment options</span>
              </li>
            </ul>
            <ul className="features-list-simple">
              <li>
                <Home size={20} />
                <span>Online rent payment and tenant portal</span>
              </li>
              <li>
                <Building size={20} />
                <span>Professional property management team</span>
              </li>
              <li>
                <DollarSign size={20} />
                <span>Quick response to maintenance requests</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Find Your Perfect Rental?</h2>
            <p>Contact us to schedule a property viewing or get more information</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+233 557869504" className="btn btn-secondary btn-large">
                Call: +233 557869504
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyRentals
