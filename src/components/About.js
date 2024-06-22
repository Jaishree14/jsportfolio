import React from 'react';
import './components.css';
import aboutImage from './img1.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
            <h2>About Me</h2>
            <p>
            I am a dedicated software engineer with extensive experience in developing business applications. I have successfully integrated and deployed applications with AWS and Azure, ensuring scalability, security, and reliability. My skills include designing development plans, managing projects, and creating user documentation. I am passionate about building innovative solutions tailored to regional clients' needs and eager to join your team to drive business success with cutting-edge software. My goal is to exceed client expectations, foster long-term relationships, and contribute to your organization’s growth and innovation.
            </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>

      </div>
    </section>
  );
}

export default About;
