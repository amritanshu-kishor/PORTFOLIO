import { motion } from 'framer-motion';
import { BookOpen, Award, Microscope, Terminal } from 'lucide-react';
import './About.css';

export default function About() {
  const skills = [
    { category: "Languages", items: "Python, JavaScript, HTML/CSS, LaTeX" },
    { category: "AI/ML Frameworks", items: "TensorFlow, PyTorch, scikit-learn, NumPy, Pandas" },
    { category: "Frontend Technologies", items: "React, Node.js, Responsive Web Design" },
    { category: "Research & Data", items: "Literature Review, Experimental Design, Data Analysis, NLP" }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-grid">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="about-card glass-panel"
          >
            <div className="card-icon-wrapper">
              <BookOpen className="card-icon" />
            </div>
            <h3>Education</h3>
            <div className="timeline-item">
              <h4>The Oxford College of Engineering, Bengaluru</h4>
              <p className="subtitle">Bachelor of Engineering in Computer Science</p>
              <p className="date">Sept 2024 – June 2028</p>
              <ul className="details-list">
                <li><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Machine Learning, AI Foundations</li>
                <li><strong>Focus Areas:</strong> Artificial Intelligence, Machine Learning, Research Methodology</li>
              </ul>
            </div>
          </motion.div>

          {/* Research Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-card glass-panel"
          >
            <div className="card-icon-wrapper">
              <Microscope className="card-icon" />
            </div>
            <h3>Research Experience</h3>
            <div className="timeline-item">
              <div className="flex-between">
                <h4>High-Sensitivity Refractive Index-Based Saliva Biosensor</h4>
                <span className="badge">Published</span>
              </div>
              <ul className="details-list">
                <li>Developed novel biosensor design for rapid, non-invasive early oral cancer detection.</li>
                <li>Presented research findings at IEEE Conference, demonstrating effective scientific communication.</li>
                <li>Contributed to peer-reviewed publication in biomedical engineering.</li>
                <li>Applied machine learning principles to analyze biosensor data patterns for cancer biomarker detection.</li>
              </ul>
            </div>
          </motion.div>

          {/* Technical Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="about-card glass-panel full-width"
          >
            <div className="card-icon-wrapper">
              <Terminal className="card-icon" />
            </div>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <h5 className="skill-category">{skill.category}</h5>
                  <p className="skill-list">{skill.items}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
