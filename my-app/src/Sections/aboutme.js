import React, { useEffect, useRef, useState } from 'react';
import "./aboutme.css";

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    const handleScroll = () => {
        if (aboutRef.current) {
            const rect = aboutRef.current.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0; // Element is in view
            const isOutOfView = rect.bottom  || rect.top > window.innerHeight ; // Element is out of view

            if (isInView) {
                setIsVisible(true);
            } else if (isOutOfView) {
                setIsVisible(false); // Reset visibility when out of view
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Also check on mount if already in view
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="about" className="about-page">
            <h2 id="aboutheader">About Me</h2>
            <div ref={aboutRef} className={isVisible ? "background-container visible" : "background-container"}>
                <div className={isVisible ? "aboutme visible" : "aboutme"}>
                    <p>
                        I'm an undergraduate student at UC Berkeley majoring in Computer Science. I am passionate about tech for social impact and anything ranging from full-stack development to machine learning, but I'm always interested in exploring new tech niches. In my free time, I love to make music, go to the gym, and cook. Feel free to continue scrolling to learn about my technical experiences and my music!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
