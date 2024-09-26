import React, { useEffect, useRef, useState } from 'react';
import "./experience.css";
import MetaIcon from '../assets/meta.png';
import VFCIcon from '../assets/vfclogo.png';
import AdobeIcon from '../assets/adobe.png';
import BSAIcon from '../assets/boyscoutlogo.jpg';
const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const experienceRef = useRef(null);

    const handleScroll = () => {
        if (experienceRef.current) {
            const rect = experienceRef.current.getBoundingClientRect();
            const isInView = rect.top  <= window.innerHeight && rect.bottom >= 0;
            const isOutOfView = rect.bottom * 0.33 || rect.top > window.innerHeight * 0.33 ;

            if (isInView) {
                setIsVisible(true);
            } else if (isOutOfView) {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check immediately on mount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="experience" className="experience-page">
            <h2 id="experience-header">Experience</h2>
            <div ref={experienceRef} className={isVisible ? "experiences visible" : "experiences"}>
                {/* Existing dropdown content */}
                <div className="dropdown">
                    <div className="dropdown-header">
                    <img src={MetaIcon}  className="experience-logo" />
                        Contract Software Engineer | Meta </div>
                    <div className="dropdown-content">
                    <ul> 
                            <li style={{ fontSize: '1.7vh' }} >  ● Currently training various ML models to predict optimal block partitioning for video encoding to reduce computational demand</li>
                            <li style={{ fontSize: '1.7vh' }}>  ● Integrating custom ML predictions into the SVT-AV1 encoder, modifying open-source code for enhanced performance</li>
                            <li style={{ fontSize: '1.7vh' }}>  ● Conducting testing and analysis to evaluate partitioning strategies against standard encoding benchmarks to maintain a 6% quality drop threshold</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="dropdown-header">
                    <img src={VFCIcon}  className="experience-logo" />
                        Contract Software Engineer | Voices for Children</div>
                    <div className="dropdown-content">
                        <ul>
                            <li style={{ fontSize: '1.7vh' }}>  ● Built a full-stack web app for non-profit to streamline community partnerships and manage in-kind donations</li>
                            <li style={{ fontSize: '1.7vh' }}>  ● Designed a user-friendly admin interface using React.js and Figma to create an aesthetic inventory collection database</li>
                            <li style={{ fontSize: '1.7vh' }}>  ● Implemented GET and POST routes for API servers, efficiently storing and retrieving data with PostgreSQL and Express.js</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="dropdown-header">
                    <img src={AdobeIcon}  className="experience-logo" />
                        Technical Consultant | Adobe</div>
                    <div className="dropdown-content">
                        <ul>
                            <li style={{ fontSize: '1.7vh' }}>  ● Conducted market research to develop user personas and gauge product feasibility by sourcing and surveying 1000+ Frame.io users</li>
                            <li style={{ fontSize: '1.7vh' }}>  ● Visualized quantitative survey data using Python by implementing Pandas and NumPy libraries on Deepnote to strengthen market viability and user assessment</li>
                            <li style={{ fontSize: '1.7vh' }}>  ● Created UI/UX mockups to model the integration of Learning Management System features into Frame.io’s product</li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">
                        <img src={BSAIcon}  className = "experience-logo"

                                 
                        
                        />
                            President | National Youth Leadership Training Course </div>
                        <div class="dropdown-content">
                            <ul>
                                <li style={{ fontSize: '1.7vh' }}>  ● Directed day-to-day operations of a 10-day wilderness camp course to teach leadership to scouts </li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Delegated tasks regarding preparation and execution of camp activities</li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Coordinated day and overnight staff trainings throughout the year</li>
                            </ul>
                        </div>      
                </div>
            </div>
        </div>
    );
};

export default Experience;
