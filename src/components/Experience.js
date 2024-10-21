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
            <p>• Developed and deployed AI-driven data solutions using Python, optimizing data pipelines for efficient knowledge management. <br></br>• Collaborated with cross-functional teams to understand business requirements and implement AI-based models for enhanced decision-making and customer interactions. <br></br>• Leveraged Azure technologies (including Event Hub, Data Lake, and Data Factory) to build scalable solutions, integrating AI capabilities and supporting real-time data processing. <br></br>• Implemented chatbot frameworks and integrated NLP models for automating customer interactions, demonstrating initial experience with LLM technologies. <br></br>• Documented AI and data solutions, creating user-friendly guides and instructions for deployment and maintenance to ensure seamless knowledge transfer. <br></br>• Maintained efficient version control using Git and CI/CD tools like Jenkins to deploy solutions in production environments, ensuring system robustness. <br></br>• Optimized Python scripts for AI model integration, employing techniques like data partitioning and caching to enhance model performance. <br></br>• Gained hands-on experience in data migration and ETL processes, providing solutions that align with AI and machine learning requirements for large-scale enterprise projects.</p>
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
