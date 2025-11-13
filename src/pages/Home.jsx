import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Home as HomeIcon, Ruler, MapPin, Check, Star, Award, Users } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: 'Construction Materials',
      description: 'High-quality solid and hollow blocks for all your construction needs. Certified materials with competitive pricing.',
      link: '/products/solid-blocks',
      features: ['Premium Quality', 'Bulk Discounts', 'Fast Delivery']
    },
    {
      icon: <Ruler size={40} />,
      title: 'Architectural Services',
      description: 'Professional design and planning services for residential and commercial projects. From concept to completion.',
      link: '/services/architecture',
      features: ['Custom Designs', '3D Visualization', 'Expert Consultation']
    },
    {
      icon: <MapPin size={40} />,
      title: 'Land Sales',
      description: 'Prime plots and lots in strategic locations. Complete legal documentation and financing options available.',
      link: '/real-estate/land-sales',
      features: ['Prime Locations', 'Legal Support', 'Flexible Payment']
    },
    {
      icon: <HomeIcon size={40} />,
      title: 'Property Rentals',
      description: 'Residential and commercial properties for rent. Professional property management and tenant support.',
      link: '/real-estate/rentals',
      features: ['Quality Properties', 'Fair Pricing', 'Management Services']
    }
  ]

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' }
  ]

  const testimonials = [
    {
      name: 'John Anderson',
      role: 'Property Developer',
      content: 'Freedaland Construction provided excellent materials and service for our commercial project. Their blocks are top quality and delivery was always on time.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Homeowner',
      content: 'The architectural team designed our dream home perfectly. They listened to our needs and delivered beyond expectations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'We found the perfect commercial space through their rental service. Professional management and fair pricing. Great experience overall.',
      rating: 5
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Building Your Dreams,<br />
              <span className="highlight">One Block at a Time</span>
            </h1>
            <p className="hero-subtitle">
              Your trusted partner for construction materials, architectural design,
              land sales, and property rentals. Quality and excellence since 2010.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions for all your construction and real estate needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="section-subtitle">
                Over 15 years of excellence in construction and real estate
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <Award size={24} />
                  <div>
                    <h4>Certified Quality</h4>
                    <p>All our materials meet international standards and are certified for safety and durability.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Users size={24} />
                  <div>
                    <h4>Expert Team</h4>
                    <p>Experienced professionals dedicated to delivering exceptional results on every project.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Building2 size={24} />
                  <div>
                    <h4>Comprehensive Solutions</h4>
                    <p>From materials to design to property services - everything you need under one roof.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                More About Us
              </Link>
            </div>
            <div className="why-choose-image">
              <img src="/boss.jpg" alt="Why Choose Freedaland" className="why-choose-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by hundreds of satisfied customers
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Get in touch with us today for a free consultation and quote</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us Now
              </Link>
              <a href="tel:+1234567890" className="btn btn-secondary btn-large">
                Call: +123 456 7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
