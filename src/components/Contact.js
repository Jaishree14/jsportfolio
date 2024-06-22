import React from 'react';
import './components.css';
import contactImage from './contact2.jpg';


function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>
        <div className="contact-info">
          <h2>Reach out</h2>
          <p className="contact-name">Jaishree Saraswat</p>
          <p className="contact-email">saraswatjaishree.14@gmail.com</p>
          <p className="contact-social">CONNECT WITH ME</p>
          <div className="social-icons">
          {/*  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>  */}
            <a href="mailto:saraswatjaishree.14@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
            <a href="https://www.facebook.com/jaishree.saraswat.94/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/jaishreesaraswat/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
