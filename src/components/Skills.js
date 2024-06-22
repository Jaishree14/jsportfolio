import React from 'react';
import './components.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Proficiencies</h2>
      <div className="skills-content">
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul>
            <li>Java, HTML, CSS, jQuery, PHP, SQL</li>
            <li>Software and Web Development</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Languages</h3>
          <ul>
            <li>American English (Native)</li>
            <li>French (B2 Certificate)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
