import React from 'react';
import './components.css';
import sampleWorkimg from './img1.jpg';

function  SampleWork() {
  return (
    <section id="work" className="work">
      <h2>Sample Work</h2>
      <div className="work-content">
        <div className="work-item">
          <img src={sampleWorkimg} alt="Heiman Software's Internal Apps" />
          <h4>Heiman Software's Internal Apps</h4>
          <p>I led my team in developing applications that would improve the company’s processes.</p>
        </div>
        <div className="work-item">
          <img src={sampleWorkimg} alt="Berou Inc.'s HR System" />
          <h4>Berou Inc.'s HR System</h4>
          <p>As an intern, I helped create a cloud-based human resources information system that streamlined employee information.</p>
        </div>
        <div className="work-item">
          <img src={sampleWorkimg} alt="Junior Software Engineers Program" />
          <h4>Junior Software Engineers Program</h4>
          <p>I established a training program for newly hired Junior Software Engineers.</p>
        </div>
        <div className="work-item">
          <img src={sampleWorkimg} alt="Junior Software Engineers Program" />
          <h4>Junior Software Engineers Program</h4>
          <p>I established a training program for newly hired Junior Software Engineers.</p>
        </div>
      </div>
    </section>
  );
};

export default SampleWork;
