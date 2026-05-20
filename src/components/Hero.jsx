import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Model from './Model';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="greeting">Hello, I'm</h2>
            <h1 className="name gradient-text">Amritanshu Kishor</h1>
            <h3 className="role">AI-Focused Developer & Research Contributor</h3>
            
            <p className="description">
              I specialize in Artificial Intelligence, Machine Learning, and Frontend Development. 
              Passionate about building impactful technologies, from innovative biosensors to 
              dynamic web applications.
            </p>

            <div className="cta-group">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </a>
              {/* Replace # with actual resume PDF link when available */}
              <a href="#" className="btn btn-outline" download>
                Download Resume <Download size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-3d-container">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Environment preset="city" />
            <Model />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
