import React from 'react';
import './index.css';
import './App.css';



import './i18n/i18n'; // Import i18n configuration
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;