import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Ruler, Users, Image, FileText, Check, ArrowRight, Building, Home as HomeIcon, Store } from 'lucide-react'

const Architecture = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      description: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    {
      icon: <Ruler size={40} />,
      title: 'Architectural Design',
      description: 'Complete architectural planning and design services for residential and commercial projects',
      features: ['Concept Development', 'Detailed Drawings', 'Interior Design', 'Landscape Planning']
    },
    {
      icon: <FileText size={40} />,
      title: 'Building Plans',
      description: 'Professional blueprints and construction documentation for approval and execution',
      features: ['Floor Plans', 'Elevations', 'Sections', 'Working Drawings']
    },
    {
      icon: <Image size={40} />,
      title: '3D Visualization',
      description: 'Photorealistic 3D renderings to visualize your project before construction begins',
      features: ['Exterior Rendering', 'Interior Rendering', 'Virtual Tours', 'Animation']
    },
    {
      icon: <Users size={40} />,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality execution',
      features: ['Site Supervision', 'Quality Control', 'Timeline Management', 'Budget Control']
    }
  ]

  const portfolio = [
    {
      title: 'Modern Villa',
      category: 'Residential',
      area: '3,500 sq ft',
      icon: <HomeIcon size={80} />
    },
    {
      title: 'Commercial Complex',
      category: 'Commercial',
      area: '15,000 sq ft',
      icon: <Building size={80} />
    },
    {
      title: 'Retail Plaza',
      category: 'Commercial',
      area: '8,500 sq ft',
      icon: <Store size={80} />
    },
    {
      title: 'Luxury Residence',
      category: 'Residential',
      area: '4,200 sq ft',
      icon: <HomeIcon size={80} />
    }
  ]

  const team = [
    {
      name: 'David Martinez',
      role: 'Lead Architect',
      credentials: 'B.Arch, M.Arch, 15+ years experience',
      specialization: 'Commercial & Residential Design'
    },
    {
      name: 'Emily Johnson',
      role: 'Senior Designer',
      credentials: 'B.Arch, LEED AP, 10+ years experience',
      specialization: 'Sustainable Architecture'
    },
    {
      name: 'Robert Chen',
      role: 'Project Manager',
      credentials: 'PMP Certified, 12+ years experience',
      specialization: 'Construction Management'
    }
  ]

  const process = [
    { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
    { step: '02', title: 'Concept Design', description: 'Create preliminary designs and 3D visualizations' },
    { step: '03', title: 'Design Development', description: 'Refine designs based on your feedback' },
    { step: '04', title: 'Documentation', description: 'Prepare detailed construction drawings and specifications' },
    { step: '05', title: 'Approval', description: 'Assist with permits and regulatory approvals' },
    { step: '06', title: 'Construction', description: 'Provide site supervision and project management' }
  ]

  return (
    <div className="architecture-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Architectural Services</h1>
          <p className="page-subtitle">
            Transform your vision into reality with our expert architectural design and planning services.
            From concept to completion, we're with you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">A systematic approach to bring your project to life</p>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{item.step}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing our expertise across diverse project types</p>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  {project.icon}
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-area">{project.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Experienced professionals dedicated to excellence</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-credentials">{member.credentials}</p>
                <p className="team-specialization">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFP Form Section */}
      <section className="section">
        <div className="container">
          <div className="form-section">
            <h2 className="section-title">Request a Proposal</h2>
            <p className="section-subtitle">Tell us about your project and we'll get back to you with a detailed proposal</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Estimated Budget *</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="over500k">Over $500,000</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Project Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project vision, requirements, and timeline..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                Submit Request
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Your Project?</h2>
            <p>Schedule a free consultation with our architectural team today</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
              </Link>
              <a href="tel: +233557869504" className="btn btn-secondary btn-large">
                Call: +233557869504
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Architecture
