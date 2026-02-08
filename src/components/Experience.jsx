import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Electrical Team Member",
      company: "UBC Agrobot Design Team",
      period: "January 2026 - Present",
      location: "Vancouver, BC",
      type: "Team Project",
      highlights: [
        "Developing ESP32 firmware in C/C++ for real-time soil and crop health sensing, sampling analog sensors at fixed intervals and streaming data over serial and Wi-Fi",
        "Building and maintaining a React and Firebase web application to visualize live sensor data and system health",
        "Assisting with schematic validation using LTspice, and troubleshooting using oscilloscopes, multimeters, and serial logging"
      ],
      skills: ["ESP32", "C/C++", "React", "Firebase", "LTspice", "Hardware Debug"]
    },
    {
      title: "Business Intern",
      company: "Swiftech Software Testing Services Inc.",
      period: "October 2025 - December 2025",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Built understanding of Software Development Lifecycle (SDLC), QA testing, and CI/CD pipelines through client project exposure and technical mentorship",
        "Initiated outreach to 11 prospective clients, translating technical and automation services to clear value propositions",
        "Created 5 branding assets highlighting API testing and multi-vendor integration services to potential clients"
      ],
      skills: ["SDLC", "QA Testing", "CI/CD", "API Testing", "Client Communication"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="timeline-marker"></div>
            
            <div className="exp-header">
              <div className="exp-title-section">
                <h3 className="exp-title">{exp.title}</h3>
                <div className="exp-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>
              
              <div className="exp-meta">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-location">📍 {exp.location}</div>
              </div>
            </div>

            <ul className="exp-highlights">
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className="exp-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-section">
        <h3 className="achievements-title">Notable Achievements</h3>
        <div className="achievements-grid">
          <div className="achievement-card card">
            <div className="achievement-icon">🏆</div>
            <h4>nwHacks 2026</h4>
            <p>Built a real-time ASL translator with CV pipeline in 24 hours</p>
          </div>
          <div className="achievement-card card">
            <div className="achievement-icon">♟️</div>
            <h4>Chess Instructor</h4>
            <p>Taught 20+ students over 6 years, organized 150-person tournaments</p>
          </div>
          <div className="achievement-card card">
            <div className="achievement-icon">💻</div>
            <h4>RISC-V Processor</h4>
            <p>Designed single-cycle CPU in SystemVerilog with full verification</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
