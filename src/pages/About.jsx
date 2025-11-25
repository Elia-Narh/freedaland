import { Building2, Users, Award, Target, Eye, Heart, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Award size={40} />,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every product and service meets the highest industry standards.'
    },
    {
      icon: <Users size={40} />,
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do. Their satisfaction is our success.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical practices in all our business dealings.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Innovation',
      description: 'Continuously improving and adopting new technologies and methods.'
    }
  ]

  const milestones = [
    { year: '2010', event: 'Company founded with a vision to provide quality construction materials' },
    { year: '2013', event: 'Expanded to architectural design services and real estate' },
    { year: '2016', event: 'Reached milestone of 250 completed projects' },
    { year: '2019', event: 'Opened new production facility and expanded product line' },
    { year: '2022', event: 'Awarded "Best Construction Materials Supplier" in the region' },
    { year: '2025', event: 'Serving 1000+ satisfied clients with 15 years of excellence' }
  ]

  const team = [
    {
      name: 'Patrick Andorful',
      role: 'Chief Executive Officer',
      bio: '20+ years in construction and real estate industry'
    },
    {
      name: 'Kwakye Asimadu',
      role: 'Operations Director',
      bio: 'Expert in supply chain and quality management'
    },
    {
      name: 'Kwame Asimah Darko',
      role: 'Head Architect',
      bio: 'Award-winning architect with 15+ years experience'
    },
    {
      name: 'Asempapa Sellassse',
      role: 'Real Estate Manager',
      bio: 'Specialized in property sales and management'
    },
   
  ]

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Health & Safety',
    'Green Building Certification',
    'Industry Standards Compliance',
    'Professional Licensing & Accreditation'
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Building excellence since 2010. Your trusted partner for construction materials,
            architectural design, and real estate solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="two-column-layout">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-content">
                Founded in 2010, Freedaland Construction began with a simple mission: to provide
                high-quality construction materials at fair prices. Over the years, we've grown
                into a comprehensive construction and real estate company, serving thousands of
                clients across the region.
              </p>
              <p className="text-content">
                Today, we offer a complete range of services including premium construction blocks,
                professional architectural design, prime land sales, and quality property rentals.
                Our commitment to excellence and customer satisfaction has made us a trusted name
                in the industry.
              </p>
              <p className="text-content">
                With over 15 years of experience, 500+ completed projects, and a team of 50+
                dedicated professionals, we continue to build on our legacy of quality and trust.
              </p>
            </div>
            <img src="/arcti.jpg" alt="15 Years of Excellence"
             className="image-placeholder-large" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-gray">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <Target size={48} />
              <h2>Our Mission</h2>
              <p>
                To provide superior construction materials, innovative architectural solutions,
                and trusted real estate services that help our clients build their dreams and
                achieve their goals.
              </p>
            </div>
            <div className="mission-vision-card">
              <Eye size={48} />
              <h2>Our Vision</h2>
              <p>
                To be the leading integrated construction and real estate company, recognized
                for quality, innovation, and customer satisfaction, creating lasting value for
                our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones in our growth</p>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <p className="timeline-event">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-subtitle">Experienced professionals driving our success</p>
          <div className="team-grid-large">
            {team.map((member, index) => (
              <div key={index} className="team-card-large">
                <div className="team-avatar-large">{member.name.charAt(0)}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">Committed to excellence and compliance</p>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <Award size={32} />
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
