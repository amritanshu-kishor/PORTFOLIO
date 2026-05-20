import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-card glass-panel"
          >
            <h3>Let's Collaborate</h3>
            <p>
              I'm currently seeking research internships and opportunities to contribute to impactful 
              AI/ML projects while gaining hands-on experience in cutting-edge technology development. 
              My inbox is always open!
            </p>

            <div className="contact-links">
              <a href="mailto:amritkis2006@gmail.com" className="contact-link">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>amritkis2006@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/amritanshukishor-b49514332" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Amritanshu Kishor</p>
                </div>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <p>Check out my repositories</p>
                </div>
              </a>
            </div>

            <a href="mailto:amritkis2006@gmail.com" className="btn btn-primary contact-btn">
              Say Hello <Send size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Amritanshu Kishor. All rights reserved.</p>
          <div className="footer-links">
            <span className="gradient-text">AI-Focused Developer & Research Contributor</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
