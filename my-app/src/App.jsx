import logo from './logo.svg';
import Navbar from "./Components/Navbar/navbar.jsx"
import Home from "./Sections/home.js"
import Coursework from "./Sections/coursework.js";
import About from "./Sections/aboutme.js";
import Experience from "./Sections/experience.js";
import Music from "./Sections/music.js";
import Contact from "./Sections/contact.js";
import React, { useState, useEffect } from 'react';


import ImageSlider from "./Sections/imageslider.js";
// import {ReactTyped} from "react-typed"
import './App.css';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
      title="Go to top"
    >
   &#8963;
    </button>
  );
};



const App = () => {
  return (
    <div className="homepage">
      <div className="image-background">
      <Navbar/>
        <Home/>
        <About/>
      </div>
      <div className="grainy-background">
        <Experience/>
        <Coursework/>
        <Music/>
        <Contact/>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
export default App;

