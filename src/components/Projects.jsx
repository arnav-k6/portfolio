import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "SignMate - ASL Translator",
      category: "ml",
      description: "Real-time American Sign Language translator using computer vision and machine learning, built in 24 hours at nwHacks 2026.",
      highlights: [
        "Implemented CV pipeline with OpenCV and MediaPipe for 21-point hand landmark extraction",
        "Scaled training data from 10k to 223k samples, improving model confidence by ~30%",
        "Built React frontend with confidence-scored predictions and configurable thresholds"
      ],
      tech: ["PyTorch", "OpenCV", "MediaPipe", "React", "Flask", "NumPy"],
      github: "https://github.com/arnav-k6",
      featured: true
    },
    {
      title: "Single-Cycle RISC-V Processor",
      category: "hardware",
      description: "Designed and implemented a complete RISC-V (RV32I) CPU in SystemVerilog with comprehensive verification.",
      highlights: [
        "Implemented full instruction fetch, decode, execute, memory, and write-back datapath",
        "Verified all core RTL blocks using 24 RISC-V assembly instruction tests",
        "Simulated and debugged using Siemens Questa ModelSim"
      ],
      tech: ["SystemVerilog", "Quartus Prime", "RISC-V", "ModelSim"],
      github: "https://github.com/arnav-k6",
      featured: true
    },
    {
      title: "Tron Light Cycle Game",
      category: "embedded",
      description: "Bare-metal embedded game running on a RISC-V processor deployed to DE-10 Lite FPGA.",
      highlights: [
        "Developed firmware in C interfacing with memory-mapped VGA and GPIO peripherals",
        "Implemented interrupt-driven control with deterministic 60Hz game loop",
        "Built collision detection system and basic AI opponent logic"
      ],
      tech: ["C", "RISC-V Assembly", "FPGA", "VGA", "Embedded"],
      github: "https://github.com/arnav-k6",
      featured: true
    },
    {
      title: "ESP32 Smart Clock",
      category: "embedded",
      description: "IoT smart clock with alarm and stopwatch functionality, featuring advanced power management debugging.",
      highlights: [
        "Diagnosed and resolved 600ms→130ms input latency from power supply instability",
        "Eliminated display flicker using non-blocking update logic",
        "Implemented alarm persistence with EEPROM storage"
      ],
      tech: ["ESP32", "C", "PlatformIO", "Hardware Debug"],
      github: "https://github.com/arnav-k6",
      featured: false
    },
    {
      title: "SnapScan Barcode Scanner",
      category: "web",
      description: "React web app for scanning product barcodes to access nutritional information, built at HackCamp 2025.",
      highlights: [
        "Built and deployed with Vercel as part of 4-person team in 24 hours",
        "Owned frontend pages including barcode scanning flow and error handling",
        "Integrated REST API data from backend services"
      ],
      tech: ["React", "JavaScript", "REST API", "Vercel"],
      github: "https://github.com/arnav-k6",
      featured: false
    },
    {
      title: "Automated Job Tracker",
      category: "web",
      description: "Python tool to parse job application emails into structured spreadsheets for efficient tracking.",
      highlights: [
        "Built email parsing system using Gmail API and OAuth 2.0",
        "Structured data extraction into Excel using openpyxl",
        "Designed for incremental processing of 100+ applications"
      ],
      tech: ["Python", "Gmail API", "OAuth 2.0", "openpyxl"],
      github: "https://github.com/arnav-k6",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'embedded', label: 'Embedded' },
    { id: 'ml', label: 'ML/AI' },
    { id: 'web', label: 'Web' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="project-filters">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card card ${project.featured ? 'featured' : ''}`}
          >
            {project.featured && (
              <div className="featured-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Featured
              </div>
            )}

            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
