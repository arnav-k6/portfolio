import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a second-year <strong>Electrical Engineering student at UBC</strong>, 
            fascinated by the intersection of hardware and software. Whether it's designing 
            a RISC-V processor in SystemVerilog or building computer vision pipelines with 
            PyTorch, I love creating systems that actually work.
          </p>

          <p>
            Currently, I'm part of the <strong>UBC Agrobot Design Team</strong>, where I'm 
            developing ESP32 firmware for real-time soil sensing and building React dashboards 
            to visualize crop health data. I'm also constantly tinkering with embedded systems 
            projects in my spare time.
          </p>

          <p>
            My interests span <strong>embedded systems</strong>, <strong>FPGA design</strong>, 
            <strong>computer vision</strong>, and <strong>machine learning</strong>. 
            I'm particularly drawn to projects that require both low-level hardware understanding 
            and high-level software architecture.
          </p>

          <div className="about-interests">
            <h3>What I'm Into</h3>
            <div className="interest-grid">
              <div className="interest-item">
                <div className="interest-icon">🔧</div>
                <div className="interest-label">Embedded Systems</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🤖</div>
                <div className="interest-label">Robotics & IoT</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">👁️</div>
                <div className="interest-label">Computer Vision</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">⚡</div>
                <div className="interest-label">Digital Design</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🧠</div>
                <div className="interest-label">Machine Learning</div>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🌐</div>
                <div className="interest-label">Full-Stack Dev</div>
              </div>
            </div>
          </div>

          <div className="about-quote">
            <svg className="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p>
              I believe the best solutions come from understanding both the 
              silicon and the software that runs on it.
            </p>
          </div>
        </div>

        <div className="about-sidebar">
          <div className="about-card quick-facts">
            <h3>Quick Facts</h3>
            <ul>
              <li>
                <span className="fact-icon">📍</span>
                <span>Vancouver, BC</span>
              </li>
              <li>
                <span className="fact-icon">🎓</span>
                <span>UBC Electrical Engineering</span>
              </li>
              <li>
                <span className="fact-icon">📅</span>
                <span>Graduating May 2028</span>
              </li>
              <li>
                <span className="fact-icon">💼</span>
                <span>Seeking Co-op Opportunities</span>
              </li>
              <li>
                <span className="fact-icon">🏆</span>
                <span>nwHacks 2026 Participant</span>
              </li>
            </ul>
          </div>

          <div className="about-card currently-learning">
            <h3>Currently Exploring</h3>
            <div className="learning-tags">
              <span className="learning-tag">Edge AI</span>
              <span className="learning-tag">FPGA Acceleration</span>
              <span className="learning-tag">Real-Time Systems</span>
              <span className="learning-tag">Computer Architecture</span>
            </div>
          </div>

          <div className="about-card fun-fact">
            <h3>Beyond Engineering</h3>
            <p>
              I taught chess to 20+ students for 6 years and organized tournaments 
              with 150+ participants. Problem-solving on the board translates well 
              to debugging code! ♟️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
