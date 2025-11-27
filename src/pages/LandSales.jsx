import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Ruler, DollarSign, FileText, Search, Filter, ArrowRight } from 'lucide-react'

const LandSales = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterLocation, setFilterLocation] = useState('all')
  const [filterPriceRange, setFilterPriceRange] = useState('all')

  const properties = [
    {
      id: 1,
      title: 'Prime Commercial Plot - Downtown',
      location: 'Downtown District',
      area: '5,000 sq ft',
      price: 250000,
      zoning: 'Commercial',
      features: ['Corner lot', 'High traffic area', 'Utilities connected', 'Clear title'],
      status: 'Available',
      image: '/land1.jpg'
    },
    {
      id: 2,
      title: 'Residential Land - Hillside Estate',
      location: 'Hillside',
      area: '8,500 sq ft',
      price: 180000,
      zoning: 'Residential',
      features: ['Gated community', 'Mountain view', 'Water & electricity', 'Paved road access'],
      status: 'Available',
      image: '/land2.jpg'
    },
    {
      id: 3,
      title: 'Industrial Plot - Business Park',
      location: 'Industrial Zone',
      area: '15,000 sq ft',
      price: 420000,
      zoning: 'Industrial',
      features: ['Direct highway access', 'Large frontage', 'Level terrain', 'Zoning approved'],
      status: 'Available',
      image: '/land3.jpg'
    },
    {
      id: 4,
      title: 'Agricultural Land - Valley View',
      location: 'Valley Region',
      area: '2 acres',
      price: 150000,
      zoning: 'Agricultural',
      features: ['Fertile soil', 'Water access', 'Irrigation system', 'Farm road'],
      status: 'Available',
      image: '/land1.jpg'
    },
    {
      id: 5,
      title: 'Residential Plot - Lake View',
      location: 'Lakeside',
      area: '6,200 sq ft',
      price: 195000,
      zoning: 'Residential',
      features: ['Lake view', 'Quiet neighborhood', 'Underground utilities', 'Park nearby'],
      status: 'Available',
      image: '/land2.jpg'
    },
    {
      id: 6,
      title: 'Mixed-Use Development Site',
      location: 'City Center',
      area: '12,000 sq ft',
      price: 550000,
      zoning: 'Mixed-Use',
      features: ['Prime location', 'High density zoning', 'Transit accessible', 'Investment opportunity'],
      status: 'Reserved',
      image: '/land3.jpg'
    }
  ]

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = filterLocation === 'all' || property.location === filterLocation
    const matchesPrice = filterPriceRange === 'all' ||
                        (filterPriceRange === 'under200k' && property.price < 200000) ||
                        (filterPriceRange === '200k-400k' && property.price >= 200000 && property.price <= 400000) ||
                        (filterPriceRange === 'over400k' && property.price > 400000)
    return matchesSearch && matchesLocation && matchesPrice
  })

  const locations = ['all', ...new Set(properties.map(p => p.location))]

  return (
    <div className="real-estate-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Land for Sale</h1>
          <p className="page-subtitle">
            Discover prime plots and lots in strategic locations. From residential to commercial,
            find the perfect land for your next project with complete legal support.
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
                placeholder="Search by location or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <Filter size={20} />
              <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
              <select value={filterPriceRange} onChange={(e) => setFilterPriceRange(e.target.value)}>
                <option value="all">All Prices</option>
                <option value="under200k">Under $200,000</option>
                <option value="200k-400k">$200,000 - $400,000</option>
                <option value="over400k">Over $400,000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="section">
        <div className="container">
          <div className="properties-count">
            <p>Showing {filteredProperties.length} of {properties.length} properties</p>
          </div>
          <div className="properties-grid">
            {filteredProperties.map(property => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  {property.status === 'Reserved' && (
                    <span className="property-badge badge-warning">Reserved</span>
                  )}
                  {property.status === 'Available' && (
                    <span className="property-badge badge-success">Available</span>
                  )}
                </div>
                <div className="property-content">
                  <h3 className="property-title">{property.title}</h3>
                  <div className="property-details">
                    <div className="property-detail">
                      <MapPin size={16} />
                      <span>{property.location}</span>
                    </div>
                    <div className="property-detail">
                      <Ruler size={16} />
                      <span>{property.area}</span>
                    </div>
                    <div className="property-detail">
                      <FileText size={16} />
                      <span>{property.zoning}</span>
                    </div>
                  </div>
                  <ul className="property-features">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="property-footer">
                    <div className="property-price">
                      <DollarSign size={20} />
                      <span>${property.price.toLocaleString()}</span>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-small">
                      Inquire Now
                    </Link>
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
          <h2 className="section-title">Our Land Sales Services</h2>
          <div className="features-grid-3">
            <div className="feature-box">
              <FileText size={32} />
              <h3>Legal Documentation</h3>
              <p>Complete assistance with title verification, registration, and all legal paperwork</p>
            </div>
            <div className="feature-box">
              <DollarSign size={32} />
              <h3>Flexible Financing</h3>
              <p>Multiple payment plans and financing options to suit your budget</p>
            </div>
            <div className="feature-box">
              <MapPin size={32} />
              <h3>Site Inspection</h3>
              <p>Arranged site visits with our team to help you make informed decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="section">
        <div className="container">
          <div className="two-column-layout">
            <div>
              <h2 className="section-title">Why Buy Land From Freedaland?</h2>
              <ul className="features-list-simple">
                <li>
                  <MapPin size={20} />
                  <span>Prime locations with high appreciation potential</span>
                </li>
                <li>
                  <FileText size={20} />
                  <span>Clear titles with complete legal documentation</span>
                </li>
                <li>
                  <DollarSign size={20} />
                  <span>Competitive pricing and flexible payment options</span>
                </li>
                <li>
                  <Ruler size={20} />
                  <span>Accurate surveys and proper boundary markings</span>
                </li>
                <li>
                  <MapPin size={20} />
                  <span>Ready infrastructure and utility connections</span>
                </li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Need Help Choosing?</h3>
              <p>Our experienced team can help you find the perfect plot based on your requirements and budget.</p>
              <Link to="/contact" className="btn btn-primary">
                Schedule Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="cta-box">
            <h2>Interested in a Property?</h2>
            <p>Contact us today for site visits, pricing details, and purchase assistance</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
                <ArrowRight size={20} />
              </Link>
              <a href="tel: +233 557869504" className="btn btn-secondary btn-large">
                Call: +233 557869504
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandSales
