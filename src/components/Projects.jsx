import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  // Placeholder projects data - will be updated once you provide the repository link!
  const projects = [
    {
      id: 1,
      title: "AI Repo Intelligence",
      description: "Analyzes codebases to build dependency graphs and surface actionable insights. Features a FastAPI parser-workflow service and a Flask frontend for visualizing graphs and asking natural-language questions using LLMs like Grok and Gemini.",
      tags: ["Python", "FastAPI", "Flask", "LLM", "Graph Data"],
      githubUrl: "https://github.com/amritanshu-kishor/ai-repo-intelligence",
      liveUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Biosensor Water Quality Monitor",
      description: "A compact IoT project using biosensors to detect water contaminants. Integrates with a microcontroller and visualization tools for real-time monitoring and alerts to support sustainable water management.",
      tags: ["IoT", "Microcontrollers", "Sensors", "Data Vis"],
      githubUrl: "https://github.com/amritanshu-kishor/Biosensor-Water-Quality-Monitor",
      liveUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Customer Churn Prediction",
      description: "Machine learning project for predicting employee attrition using the IBM HR Analytics dataset. Includes end-to-end data analysis, preprocessing, model training, and performance evaluation.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"],
      githubUrl: "https://github.com/amritanshu-kishor/customer-churn-prediction",
      liveUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "PageRank Algo Visualization",
      description: "A web-based implementation of the PageRank algorithm demonstrating how search engines rank webpages. Visualizes webpages as connected nodes in a directed graph and calculates importance iteratively.",
      tags: ["Web", "Algorithms", "Graph Theory", "Visualization"],
      githubUrl: "https://github.com/amritanshu-kishor/PageRank-Algo",
      liveUrl: "#",
      featured: false,
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`project-card glass-panel ${project.featured ? 'featured-project' : ''}`}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="folder-icon">
                    <Folder size={32} />
                  </div>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                      <FaGithub size={22} />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                
                <ul className="project-tags">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
