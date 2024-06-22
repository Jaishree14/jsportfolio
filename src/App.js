import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import SampleWork from './components/SampleWork';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <SampleWork />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default App;
