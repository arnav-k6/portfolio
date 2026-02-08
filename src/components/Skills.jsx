import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "SystemVerilog", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "RISC-V Assembly", level: 70 }
      ]
    },
    {
      title: "Embedded & Hardware",
      icon: "⚡",
      skills: [
        { name: "ESP32", level: 85 },
        { name: "STM32 (HAL)", level: 75 },
        { name: "FPGA (DE-10 Lite)", level: 80 },
        { name: "Oscilloscope/Multimeter", level: 85 },
        { name: "PCB Design (KiCad)", level: 70 }
      ]
    },
    {
      title: "ML & Computer Vision",
      icon: "🤖",
      skills: [
        { name: "PyTorch", level: 80 },
        { name: "OpenCV", level: 85 },
        { name: "MediaPipe", level: 80 },
        { name: "NumPy/Pandas", level: 85 },
        { name: "TensorFlow", level: 65 }
      ]
    },
    {
      title: "Web & Frameworks",
      icon: "🌐",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Flask", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Linux (Bash, SSH)", level: 85 },
        { name: "Quartus Prime", level: 80 },
        { name: "ModelSim/Questa", level: 75 },
        { name: "VS Code/PlatformIO", level: 85 }
      ]
    },
    {
      title: "Communication Protocols",
      icon: "📡",
      skills: [
        { name: "UART", level: 90 },
        { name: "SPI", level: 85 },
        { name: "I2C", level: 85 },
        { name: "Wi-Fi", level: 80 },
        { name: "USB", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="skills-intro">
        <p>
          My skill set spans the full hardware-software stack, from designing circuits and 
          programming FPGAs to building machine learning pipelines and deploying web applications. 
          I'm always learning and exploring new technologies.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category card fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1 + i * 0.05}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-section">
        <h3 className="certifications-title">Relevant Coursework</h3>
        <div className="coursework-grid">
          <div className="course-card card">
            <div className="course-code">CPEN 211</div>
            <div className="course-name">Digital Design</div>
          </div>
          <div className="course-card card">
            <div className="course-code">CPSC 259</div>
            <div className="course-name">Data Structures & Algorithms</div>
          </div>
          <div className="course-card card">
            <div className="course-code">ELEC 201</div>
            <div className="course-name">Circuit Analysis I</div>
          </div>
          <div className="course-card card">
            <div className="course-code">ELEC 202</div>
            <div className="course-name">Circuit Analysis II</div>
          </div>
          <div className="course-card card">
            <div className="course-code">ELEC 211</div>
            <div className="course-name">Electromagnetics</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
