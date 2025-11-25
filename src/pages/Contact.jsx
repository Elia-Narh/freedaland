import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: ['123 Construction Avenue', 'City, State 12345', 'United States']
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['Main: +233 557 86 9504', 'Sales: +233 557869 504', 'Support: +233 55786504']
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['General: info@freedaland.com', 'Sales: sales@freedaland.com', 'Support: support@freedaland.com']
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ]

  
    
  

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us today. We're here to help with all your construction
            and real estate needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <h3 className="contact-info-title">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="contact-detail">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section section-gray">
        <div className="container">
          <div className="contact-form-section">
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">Fill out the form below and we'll respond within 24 hours</p>
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
                    <label htmlFor="service">Service Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="blocks">Construction Blocks</option>
                      <option value="architecture">Architectural Services</option>
                      <option value="land">Land Sales</option>
                      <option value="rentals">Property Rentals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
            <div className="map-wrapper">
              <iframe
                title="Freedaland Construction Location"
                src=  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.7858821968034!2d0.018871899665836824!3d5.743939473988168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102081b93c23f6d9%3A0x22406fc27df3973d!2sGREAT%20HOMES%20%7C%20Cedar%20Ridge%20Residences!5e0!3m2!1sen!2sgh!4v1763158005909!5m2!1sen!2sg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

     

      {/* Emergency Contact */}
      <section className="section section-gray">
        <div className="container">
          <div className="emergency-contact">
            <Phone size={48} />
            <h2>Need Immediate Assistance?</h2>
            <p>For urgent inquiries or emergencies, call us directly</p>
            <a href="tel:+233557869503" className="btn btn-primary btn-large">
              Call Now: +233557869504
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section">
        <div className="container">
          <div className="faq-teaser">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>What are your delivery times for construction blocks?</h4>
                <p>We typically deliver within 2-3 business days for local orders. Bulk orders may require additional time.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer financing options for land purchases?</h4>
                <p>Yes, we offer flexible payment plans and can connect you with financing partners.</p>
              </div>
              <div className="faq-item">
                <h4>How long does the architectural design process take?</h4>
                <p>Project timelines vary based on complexity, but typically range from 4-8 weeks for complete design packages.</p>
              </div>
              <div className="faq-item">
                <h4>Can I schedule a property viewing on weekends?</h4>
                <p>Yes, we accommodate weekend viewings by appointment. Contact us to schedule a convenient time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
