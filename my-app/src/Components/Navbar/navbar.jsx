import React from 'react'
import './Navbar.css'


const Navbar = () => {

    const handleResumeClick = () => {
        window.open('/Users/kintonduong/Desktop/personal-website/my-app/src/kintonresume.pdf', '_blank');
  }

    return (
        <div className='nav'>
            <div className="nav-logo">KD</div>
            <ul className="nav-menu">
            
                <div class = "resume">
                <button class = "resume-button" 
                             onClick={handleResumeClick}>
                            Resume
                        </button>
                </div>

               
                <li><a href="#about" className="nav-item">About Me</a></li>
                <li><a href="#coursework" className="nav-item">Coursework</a></li>
                <li><a href="#experience" className="nav-item">Experience</a></li>
                <li><a href="#music" className="nav-item">Music</a></li>
                <li><a href="#contact" className="nav-item">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar