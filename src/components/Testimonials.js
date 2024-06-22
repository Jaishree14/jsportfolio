import React from 'react';
import './components.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-content">
        <div className="testimonial-item">
          <p>"I am glad to have worked with them over the years. They are intelligent and kind, and they can balance multiple responsibilities at once. Any organization would be lucky to have them."</p>
          <h4>Trinh Hien</h4>
          <p>DEPARTMENT HEAD</p>
        </div>
        <div className="testimonial-item">
          <p>"I am glad to have worked with them. They are intelligent and kind, and they can balance multiple responsibilities at once. Any organization would be lucky to have them."</p>
          <h4>Samira Hadid</h4>
          <p>SUPERVISOR</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
