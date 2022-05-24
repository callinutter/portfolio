import React from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavbarTop from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import TopSection from './components/TopSection/TopSection';

function App() {
  return (
    <>
      <NavbarTop />
      <TopSection />
      <Projects/>
      <About/>
      <Contact />
    </>
  )
}

export default App;

