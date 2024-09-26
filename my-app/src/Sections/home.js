import React from "react";
import "./home.css";
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from "../Sections/imageslider.js";
import me2 from '../assets/me2.jpg';
import me3 from '../assets/me3.png';
import me1 from '../assets/me1.png';


function Home() {
    const slides = [
        {url: me2},
        {url: me1},
        {url: me3},

      ];
      const containerStyles = {
        width: '600px',
        height: "380px",
        margin: "0 auto",
      };


  return (

    
    <div className="home-section">
      <header className="App-header">

        
        <div className="text">
          <p className="hi">Hi! I'm </p>
          <p className="my-name">
          <div>
      <TypeAnimation
        sequence={[
            "Kinton Duong",
                  1000, // Delay before delete
                  "", // Empty string to delete
                  500, // Delay before retyping
                  "a college student", // Retype
                  1000, // Delay before delete
                  "", // Empty string to delete
                  500, 
                  "a learner",
                  1000,
                  // Delay before retyping
        //   "I'm a Developer",
        //   1000,
        //   "I'm a Writer",
        //   1000,
        //   "I'm a Designer",
        //   1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    </div>
          </p>
        </div>
        <div class = "slideshow">
        <div style = {containerStyles}>
          <ImageSlider slides = {slides}/>
          </div>
          </div>

          <div class = "creation">
          </div>
      </header>
    </div>
  );
}

export default Home;