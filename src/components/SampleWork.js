import React from 'react';
import './components.css';
import sampleWorkimg1 from './work4.png';
import sampleWorkimg2 from './work3.jpg';
import sampleWorkimg3 from './work2.jpeg';
import sampleWorkimg4 from './work1.jpg';

function  SampleWork() {
  return (
    <section id="work" className="work">
      <h2>Sample Work</h2>
      <div className="work-content">
        <div className="work-item">
          <img src={sampleWorkimg1} alt="AI-Powered Click Analytics System" />
          <h4>AI-Powered Click Analytics System</h4>
          <p>It uses machine learning to analyze user interactions, predict behavior, and optimize website performance for better engagement.</p>
        </div>
        <div className="work-item">
          <img src={sampleWorkimg3} alt="Berou Inc.'s HR System" />
          <h4>Resume Parsing</h4>
          <p>Extract keywords from resumes using natural language processing to identify skills, qualifications, and experiences relevant to job requirements.</p>
        </div>
        <div className="work-item">
          <img src={sampleWorkimg2} alt="Junior Software Engineers Program" />
          <h4>Junior Software Engineers Program</h4>
          <p>I established a training program for newly hired Junior Software Engineers.</p>
        </div>
        <div className="work-item">
          <img src={sampleWorkimg4} alt="Junior Software Engineers Program" />
          <h4>E-commerce Website Backend</h4>
          <p>Built an e-commerce backend with Node.js, Express.js, MySQL integration, RESTful APIs, and secure payment processing.</p>
        </div>
      </div>
    </section>
  );
};

export default SampleWork;
