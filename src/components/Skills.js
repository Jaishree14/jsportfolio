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
            <li>Python, Javascript, Node.js, Reactjs, SQL</li>
            <li>AWS, Azure, Docker, CI/CD</li>
            <li>Pandas, NLTK, scikit-learn,NumPy </li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Languages</h3>
          <ul>
            <li>English (Fluent)</li>
            <li>German (A2 Certificate)</li>
            <li>Hindi (Native)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
