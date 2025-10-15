import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // track the active page and render the proper "active" class
  const [activePage, setActivePage] = useState('home')

  const showPage = (page) => {
    setActivePage(page)
  }

  useEffect(() => {
    document.title = 'Personal Portfolio'
  }, [])

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Personal Portfolio - Modern Glass Design Experience</title>
  <link rel="stylesheet" href="/templatemo-glossy-touch.css" />
  {/*

TemplateMo 592 glossy touch

https://templatemo.com/tm-592-glossy-touch

*/}
  
 <div className="bg-shapes">
  <div className="shape" />
  <div className="shape" />
  <div className="shape" />
  <div className="shape" />
  <div className="shape" />
  <div className="shape" />
</div>

  {/* SINGLE NAVIGATION HEADER */}
  <header>
    <div className="container">
      <nav className="glass">
        <div className="logo" onClick={() => showPage('home')}>
          <div className="logo-icon">
            <svg
              viewBox="0 0 48 48"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid of circles with varying sizes */}
              <circle cx={16} cy={16} r={5} opacity="0.9" />
              <circle cx={32} cy={16} r={4} opacity="0.8" />
              <circle cx={16} cy={32} r={4} opacity="0.7" />
              <circle cx={32} cy={32} r={5} opacity="0.85" />
              {/* Small accent dots */}
              <circle cx={24} cy={8} r={2} opacity={1} />
              <circle cx={8} cy={24} r={2} opacity="0.9" />
              <circle cx={40} cy={24} r={2} opacity="0.9" />
              <circle cx={24} cy={40} r={2} opacity={1} />
              {/* Tiny corner dots */}
              <circle cx={8} cy={8} r={1} opacity="0.6" />
              <circle cx={40} cy={8} r={1} opacity="0.6" />
              <circle cx={8} cy={40} r={1} opacity="0.6" />
              <circle cx={40} cy={40} r={1} opacity="0.6" />
            </svg>
          </div>
          <span>Personal Portfolio</span>
        </div>
        <div className="nav-links">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              showPage('home')
            }}
            className={activePage === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              showPage('about')
            }}
            className={activePage === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              showPage('expertise')
            }}
            className={activePage === 'expertise' ? 'active' : ''}
          >
            Expertise
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              showPage('contact')
            }}
            className={activePage === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  </header>
  {/* HOME PAGE */}
  <div id="home" className={`page ${activePage === 'home' ? 'active' : ''}`}>
    <div className="container">
      <div className="content-wrapper">
        <section className="hero glass">
          <div className="hero-image">
           <img
              src="images/templatemo-futuristic-girl.jpg"
              alt="Modern Technology Interaction"
          />

          </div>
          <div className="hero-content">
            <h1>Welcome to my Personal Portfolio</h1>
            <p>
              This portfolio presents my skills, and personal experiences. 
              It serves as a comprehensive collection of my work, reflecting my growth, dedication, and passion in my chosen field.
            </p>
            <a
              href="#"
              className="cta-button"
              onClick={(e) => {
                e.preventDefault()
                showPage('about')
              }}
            >
               Learn More
             </a>
          </div>
        </section>
        <section className="features">
          <div className="feature-card glass">
            <div className="feature-icon">🧠</div>
            <h3>Analytical Mindset</h3>
            <p>
              I approach every project with a logical and analytical mindset, 
              ensuring that each solution is optimized for efficiency and effectiveness.
            </p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">📊</div>
            <h3>Continuous Improvement</h3>
            <p>
              I always seek to improve my skills and knowledge, 
              staying updated with the latest trends and technologies in my field.
            </p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🌱</div>
            <h3>Adaptability</h3>
            <p>
              I’m always prepared to adapt to new challenges and environments, 
              remaining open to learning new tools and technologies as the project demands.
            </p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">⏱️</div>
            <h3>Time Management</h3>
            <p>
              I prioritize and manage my time effectively to meet deadlines while maintaining a high standard of work quality.
            </p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🤝</div>
            <h3>Team Collaboration </h3>
            <p>
              I believe in the power of teamwork and collaboration, leveraging the strengths of each team member to achieve common goals.
            </p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🔍</div>
            <h3>Critical Thinking</h3>
            <p>
              Simple to implement and customize for any project with clean,
              well-documented code and flexible components.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
  {/* ABOUT PAGE */}
  <div id="about" className={`page ${activePage === 'about' ? 'active' : ''}`}>
    <div className="container">
      <div className="content-wrapper">
        <section className="about-content">
          <div className="about-text glass">
            <h2>About Me</h2>
            <p>
              I'm Louise Anne S. Bechayda, a dedicated and passionate individual with a 
              strong commitment to excellence in every endeavor I undertake.
            </p>
            <p>
              I hold an Associate in Computer Technology degree from La Verdad Christian College.
              My two years in the ACT program helped me build a strong foundation in technology and practical computing skills, 
              which prepared me well for my current journey toward a Bachelor of Science in Information Technology.
            </p>
            <p>
              I am an aspiring Software Quality Assurance (SQA) professional, passionate about ensuring software reliability, 
              functionality, and user satisfaction through careful testing and continuous improvement.
            </p>
          </div>
          <div className="stats">
            <div className="stat-card glass">
              <div className="stat-number">2</div>
              <div className="stat-label">Years ACT student</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-number">100%</div>
              <div className="stat-label">Commitment, Dedicated to quality, learning</div>
            </div>
          <div className="stat-card glass p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center">
            <div className="stat-number text-4xl font-bold text-white mb-2">📄
            </div>
            <p>You can download my resume below:</p>
              <a
                href="/resume.pdf"
                download="Louise-Resume.pdf"
                className="text-white font-medium hover:text-gray-300 transition-colors duration-300"
        >
        Download Résumé
        </a>
  </div>
          </div>
        </section>
        <section className="team-section">
          <h2>What Do I Do?</h2>
          <div className="team-grid">
            <div className="team-member glass">
              <div className="team-avatar">🚀</div>
              <h3>Sets Goals</h3>
              <p>This helps me to grow continuously and make work effectively</p>
            </div>
            <div className="team-member glass">
              <div className="team-avatar">💬</div>
              <h3>Collaboration</h3>
              <p>Collaborating with others allows me to enhance my skills and apply the valuable lessons I learn from each experience.</p>
            </div>
            <div className="team-member glass">
              <div className="team-avatar">🌐</div>
              <h3>Value</h3>
              <p>Delivering high-quality work that meets client expectations and drives results.</p>
            </div>
            <div className="team-member glass">
              <div className="team-avatar">👂</div>
              <h3>Active Listening</h3>
              <p>I attentively listen to all feedback and ideas, ensuring that everyone feels heard and valued. 
                Understanding others' perspectives helps me to improve and grow both personally and professionally.
              </p>
            </div>
            <div className="team-member glass">
              <div className="team-avatar">🤝</div>
              <h3>Professionalism</h3>
              <p>I maintain respect and accountability with a positive attitude in every collaboration and task.</p>
            </div>
            <div className="team-member glass">
              <div className="team-avatar">📚</div>
              <h3>Knowledge Sharing</h3>
              <p>I actively share my knowledge and expertise with others, fostering a culture of continuous learning and improvement.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>


  {/* EXPERTISE PAGE */}
  <div id="expertise" className={`page ${activePage === 'expertise' ? 'active' : ''}`}>
  <div className="container">
    <div className="content-wrapper">
      <section className="hero glass">
        <h1>Expertise as Aspiring SQA</h1>
        <p>
          I'm an aspiring Software Quality Assurance (SQA) professional, 
          passionate about ensuring software reliability, functionality, and user satisfaction through careful testing and continuous improvement.
        </p>
      </section>
      <section className="expertise-grid">
        <div className="expertise-card glass">
          <div className="expertise-header">
            <div className="expertise-icon">🔎</div>
            <h3>Manual Testing</h3>
          </div>
          <p>
            Ensure the highest quality standards through manual testing,
            identifying and resolving issues before they reach the end user.
          </p>
        </div>
        <div className="expertise-card glass">
          <div className="expertise-header">
            <div className="expertise-icon">📈</div>
            <h3>Quality Strategy</h3>
          </div>
          <p>
            I create test plans and strategies that align with project goals,
            ensuring comprehensive coverage and risk mitigation.
          </p>
        </div>
        <div className="expertise-card glass">
          <div className="expertise-header">
            <div className="expertise-icon">📝</div>
            <h3>Requirement Analysis</h3>
          </div>
          <p>
            Before I start testing, I thoroughly analyze requirements to ensure
            clarity and completeness, reducing ambiguities and potential issues.
          </p>
        </div>
        <div className="expertise-card glass">
          <div className="expertise-header">
            <div className="expertise-icon">🗣️</div>
            <h3>Communication</h3>
          </div>
          <p>
            I maintain clear and open communication with teams,
            providing timely feedback and collaborating on issue resolution.
          </p>
        </div>
        <div className="expertise-card glass">
          <div className="expertise-header">
            <div className="expertise-icon">⚠️</div>
            <h3>Prioritization</h3>
          </div>
          <p>
            I prioritize testing efforts based on risk and impact,
            ensuring critical functionalities are thoroughly validated. 
            Focuses on delivering high-quality work that meets client expectations and drives results.
          </p>
        </div>
        <div className="expertise-card glass">
          <div className="expertise-header">
            <div className="expertise-icon">📊</div>
            <h3>Process Improvement</h3>
          </div>
          <p>
            I continuously seek opportunities to improve testing processes,
            leveraging feedback and lessons learned to enhance efficiency and effectiveness.
            I do also track and analyze quality metrics to identify trends and areas for improvement.
          </p>
        </div>
      </section>
    </div>
  </div>
</div>

  {/* CONTACT PAGE */}
  <div id="contact" className={`page ${activePage === 'contact' ? 'active' : ''}`}>
    <div className="container">
      <div className="content-wrapper">
        <section className="contact-grid">
          <div className="contact-form glass">
            <h2>Get In Touch</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="cta-button">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info glass">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <p>louiseannesuriobechayda@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <h4>Phone</h4>
                <p>09125719601</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <h4>Address</h4>
                <p>
                  Blk 58 Lot 39 Northville 8, Bangkal
                  <br />
                  City of Malolos, Bulacan, 3000
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  {/* SINGLE FOOTER */}
  <div id="footer">
    <div className="container">
      <footer className="glass">
        <div className="footer-content">
          <div className="copyright">
            © 2025 Personal Portfolio. All rights reserved. Crafted with modern web
            technologies. Provided by{" "}
            <a rel="nofollow" href="https://templatemo.com" target="_blank">
              TemplateMo
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</>

  )
}

export default App
