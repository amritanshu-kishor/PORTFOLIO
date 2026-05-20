import { motion } from 'framer-motion';
import { Briefcase, Trophy, Code } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: "JPMorgan Chase Software Engineering Job Simulation",
      status: "Completed",
      points: [
        "Completed virtual software engineering experience simulating real-world financial technology development.",
        "Gained exposure to enterprise-scale software development practices and agile methodologies.",
        "Developed problem-solving skills in data visualization and financial data processing."
      ]
    },
    {
      title: "AI Foundations Certification",
      status: "Certified",
      points: [
        "Completed comprehensive certification covering fundamental AI concepts, algorithms, and applications.",
        "Studied supervised/unsupervised learning, neural networks, and optimization techniques.",
        "Applied theoretical knowledge to practical AI implementation scenarios and case studies."
      ]
    }
  ];

  const achievements = [
    { title: "IEEE Conference Presenter", desc: "Delivered research presentation on biosensor technology to academic audience." },
    { title: "Published Researcher", desc: "Co-authored peer-reviewed research paper in biomedical engineering domain." },
    { title: "Active Learner", desc: "Self-directed learning in cutting-edge AI/ML technologies and research methodologies." },
    { title: "Cross-Functional Skills", desc: "Demonstrated ability to bridge frontend development, AI/ML, and research domains." }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="section-title">
            Experience & <span className="gradient-text">Projects</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="experience-container">
          <div className="experience-timeline">
            <h3 className="column-title"><Briefcase className="icon" /> Relevant Experience</h3>
            
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="timeline-card glass-panel"
              >
                <div className="card-header">
                  <h4>{exp.title}</h4>
                  <span className="badge">{exp.status}</span>
                </div>
                <ul className="details-list">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Note about Github Projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="timeline-card glass-panel highlight-card"
            >
              <div className="card-header">
                <h4><Code size={20} className="inline-icon" /> More on GitHub</h4>
              </div>
              <p className="github-note">
                I have several other technical projects available on my GitHub profile, showcasing my skills in Frontend Development, Python, and AI implementations.
              </p>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                View GitHub Profile
              </a>
            </motion.div>
          </div>

          <div className="achievements-section">
            <h3 className="column-title"><Trophy className="icon" /> Achievements & Leadership</h3>
            
            <div className="achievements-grid">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="achievement-card glass-panel"
                >
                  <div className="achievement-bullet"></div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
