import React from 'react'
import './Navbar.css'



const Navbar = () => {

    const handleResumeClick = () => {
        window.open('https://drive.google.com/file/d/1nAG6MmCQWsH3nu1tmCvQaC9jQADk6Bvq/view?usp=sharing');
  }

  const redirectToGitHub = () => {
    window.open('https://github.com/kintond15', '_blank'); // Replace with your GitHub URL
};

    return (
        <div className='nav'>
            <div className="nav-logo" onClick={redirectToGitHub}>
                KD
            </div>
            <ul className="nav-menu">
            
                <div class = "resume">
                <button class = "resume-button" 
                             onClick={handleResumeClick}>
                            Resume
                        </button>
                </div>

               
                <li><a href="#about" className="nav-item">About Me</a></li>
                <li><a href="#experience" className="nav-item">Experience</a></li>
                <li><a href="#coursework" className="nav-item">Coursework</a></li>
                <li><a href="#music" className="nav-item">Music</a></li>
                <li><a href="#contact" className="nav-item">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar