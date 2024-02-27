import React from "react";
import "./home.css";
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className="home-section">
      <header className="App-header">
        <div className="text">
          <p className="hi">Hi! My name is</p>
          <p className="my-name">
          <div>
      <TypeAnimation
        sequence={[
            "Kinton Duong",
                  1000, // Delay before delete
                  "", // Empty string to delete
                  500, // Delay before retyping
                  "Kinton Duong", // Retype
                  1000, // Delay before delete
                  "", // Empty string to delete
                  500, // Delay before retyping
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

    
      </header>
    </div>
  );
}

export default Home;