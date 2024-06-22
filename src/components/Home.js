import React from 'react';
import './components.css';
import homeImage from './homeImage.jpg';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={homeImage} alt="Profile" className="profile-image" />
        <div className="home-text">
          <h1>Jaishree Saraswat</h1>
          <h2>Software Engineer</h2>
          <button className="reach-out-btn">Reach out</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
