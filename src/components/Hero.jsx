import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Electrical Engineering Student";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-greeting fade-in-up stagger-1">
          <span className="hello-emoji">👋</span>
          <span className="hello-text">Hey, I'm</span>
        </div>
        
        <h1 className="hero-name fade-in-up stagger-2">
          Arnav Kapadia
        </h1>
        
        <div className="hero-subtitle fade-in-up stagger-3">
          <span className="typing-cursor">{typedText}</span>
          <span className="cursor">|</span>
        </div>
        
        <p className="hero-description fade-in-up stagger-4">
          I'm a second-year Electrical Engineering student at UBC passionate about 
          <span className="highlight"> embedded systems</span>,
          <span className="highlight"> computer vision</span>, and
          <span className="highlight"> digital design</span>. 
          I build things that bridge hardware and software.
        </p>
        
        <div className="hero-cta fade-in-up stagger-5">
          <button onClick={scrollToContact} className="btn btn-primary">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a 
            href="https://github.com/arnav-k6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <div className="hero-stats fade-in-up stagger-5">
          <div className="stat-item">
            <div className="stat-number">1,378</div>
            <div className="stat-label">GitHub Contributions</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24hr</div>
            <div className="stat-label">Hackathon Winner</div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
};

export default Hero;
