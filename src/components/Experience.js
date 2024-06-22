import React from 'react';
import './components.css';

function Experience() {
  return (
    <section id="experience" className="experience">
    
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2022 - 2023</div>
          <div className="timeline-content">
            <h4>Analyst</h4>
            <p>Deloitte</p>
            <p>Developed and implemented a web application, optimized performance, and ensured seamless AWS/Azure deployment. Monitored application performance with Application Insights, streamlined change management with ServiceNow, and actively participated in Agile meetings. Investigated and resolved defects, ensuring smooth operations and continuous improvements.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h4>Software Engineer - Intern</h4>
            <p>Deloitte</p>
            <p>Managed 15+ servers in a critical Azure infrastructure with MySQL databases. Established Azure CI/CD pipelines using DevOps YAML, configuring build and release stages. Added tasks to build Docker images, ensuring proper authentication and specifications, enhancing deployment efficiency and reliability.</p>
          </div>
        </div>
        </div>

        <h2 className="section-title">Education</h2>
        <div className="timeline">
            <div className="timeline-item">
            <div className="timeline-date">2023 - 2025</div>
            <div className="timeline-content">
                <h4>Masters - Research in Computer and System Engineering</h4>
                <p>TU Ilmenau, Germany</p>
                <p>Core Subjects - Advance Database Systems, Algorithms, Advanced Mobile Communication Networks, Software and Systems Engineering, Control Engineering. Advance studies included Machine Learning, Deep Learning, Data Storage Systems, Distributed Sytems.</p>
            </div>
            </div>

            <div className="timeline-item">
            <div className="timeline-date">2018 - 2022</div>
            <div className="timeline-content">
                <h4>Bachelor of Technology - Information Technology</h4>
                <p>Banasthali Vidyapith, India</p>
                <p>Core Subjects -  Data Structures, Algorithms, DBMS, Networking, Operating Systems, and Software Engineering. Advance studies included Artificial Intelligence and Research Seminar.</p>
            </div>
            </div>
        </div>

      
    </section>
  );
}

export default Experience;
