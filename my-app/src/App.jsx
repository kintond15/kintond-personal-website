import logo from './logo.svg';
import Navbar from "/Users/kintonduong/Desktop/personal-website/my-app/src/Components/Navbar/navbar"
import Home from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/home"
import Coursework from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/coursework.js";
import About from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/aboutme.js";
import Experience from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/experience.js";
import Music from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/music.js";
import Contact from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/contact.js";
import React, { useState, useEffect } from 'react';


import ImageSlider from "/Users/kintonduong/Desktop/personal-website/my-app/src/Sections/imageslider.js";
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
   &#8682;
    </button>
  );
};



const App = () => {

  

  return (
    
        <div class = "homepage">
          <Navbar/>
          <Home/>
          <About/>
          <Coursework />
          <Experience/>
          <Music/>
          <Contact/>
          
          <ScrollToTopButton />
        </div>
  
       

  );
}

export default App;
