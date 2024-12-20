// Redesigned App.js
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { portfolioData } from './assets/data';

const Header = () => (
  <motion.header
    className="header"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="header-content">
      <div className="logo-section">
        <h1 className="site-title">{portfolioData.name}</h1>
        <p className="site-tagline">{portfolioData.tagline}</p>
      </div>
      <nav className="navigation">
        {['About', 'Projects', 'Skills', 'Contact'].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="nav-link"
          >
            {section}
          </a>
        ))}
      </nav>
    </div>
  </motion.header>
);

const About = () => (
  <motion.section
    id="about"
    className="about-section"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h2>About Me</h2>
    <p className="about-text">{portfolioData.about}</p>
    <div className="about-highlight">Crafting impactful digital solutions with creativity and efficiency.</div>
  </motion.section>
);

const Projects = () => (
  <motion.section
    id="projects"
    className="projects-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Projects</h2>
    <div className="projects-grid">
      {portfolioData.projects.map((project, index) => (
        <motion.div
          key={index}
          className={`project-card ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="project-content">
            <h3>{project.title}</h3>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </div>
          <div className="project-details">
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Skills = () => (
  <motion.section
    id="skills"
    className="skills-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Skills</h2>
    <div className="skills-grid">
      {portfolioData.skills.map((skill, index) => (
        <motion.div
          key={index}
          className="skill-item"
          whileHover={{ scale: 1.1, backgroundColor: '#6c63ff', color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Contact = () => (
  <motion.section
    id="contact"
    className="contact-section"
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2>Contact</h2>
    <p>Feel free to reach out for exciting projects or collaborations!</p>
    <form className="contact-form">
      <input
        type="text"
        placeholder="Your Name"
        className="form-input"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="form-input"
      />
      <textarea
        placeholder="Your Message"
        className="form-textarea"
      ></textarea>
      <motion.button
        type="submit"
        className="form-button"
        whileHover={{ scale: 1.1, backgroundColor: '#6c63ff', color: '#fff' }}
        transition={{ duration: 0.3 }}
      >
        Send
      </motion.button>
    </form>
  </motion.section>
);

const App = () => (
  <div className="app">
    <Header />
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mohit Pandya. All Rights Reserved.</p>
    </footer>
  </div>
);

export default App;
