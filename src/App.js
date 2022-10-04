import React, { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Articles from './components/articles/Articles';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';

function App() {
  const [toggle, setToggle] = useState(true);
  function toggleMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className="App">
      <Nav
        toggle={toggle}
        toggleMenu={toggleMenu}
      />
      <Hero
        toggle={toggle}
        toggleMenu={toggleMenu} />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
