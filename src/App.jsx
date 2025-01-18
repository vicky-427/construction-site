import './App.css';
import office from "./assets/office.jpg"
import resort from "./assets/resort.jpg"
import shopping from "./assets/shopping.jpg"

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">SSS Builders</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Building Your Dreams</h1>
          <p>Your trusted partner for premium construction services</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-home"></i>
            <h3>Residential Construction</h3>
            <p>Custom homes and renovations tailored to your lifestyle.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-building"></i>
            <h3>Commercial Construction</h3>
            <p>Professional spaces designed for growth and success.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-tools"></i>
            <h3>Renovations</h3>
            <p>Upgrade your existing spaces with a modern touch.</p>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={office} alt="Modern Office Complex" />
            <div className="project-info">
              <h3>Modern Office Complex</h3>
              <p>Completed in 2024, a state-of-the-art workspace.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={resort} alt="Luxury Residence" />
            <div className="project-info">
              <h3>Luxury Residence</h3>
              <p>Exquisite design and premium finishes for a dream home.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={shopping} alt="Shopping Center" />
            <div className="project-info">
              <h3>Shopping Center</h3>
              <p>A vibrant retail destination for the community.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@sssbuilders.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Construction Ave, Metropolis</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
