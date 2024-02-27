import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className = 'nav'>
            <div className = "nav-logo">KD</div>
            <ul className = "nav-menu">
                <li>About Me</li>
                <li>Resume</li>
                <li>Coursework</li>
                <li>Experience</li>
                <li>Music</li>
                <li className = 'nav-Contact'>Contact</li>

                
            </ul>

        </div>
    )
}

export default Navbar