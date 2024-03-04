import React from 'react';
import "./experience.css";

const Experience = () => {
    return (
        <div id="experience" className="experience-page">
            <h2 id="experience-header">Experience</h2>
            <div class = "experiences">
                <div class="dropdown">
                        <div class="dropdown-header">Software Developer | Codebase @ Berkeley</div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Selected to a project team of seven to design and execute a full-stack web application for a non-profit organization</li>
                                <li>  ● Utilizing frameworks and ramp-ups of HTML, JavaScript, Java, CSS, and React</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">Business Consultant | Delta Consulting</div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Selected as part of UC Berkeley's first and only consulting group in the education tech sector</li>
                                <li>  ● Working directly with Adobe subsidiary, Frame.io, to conduct market research to determine product feasibility</li>
                                <li>  ● Developing user personas based on user research and data analysis of Frame.io's customer base</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">Writer | Stanford Neurodiversity Project</div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Oversaw a project for neurodiversity advocacy with an international team and conducted research </li>
                                <li>  ● Helped design and published multiple magazine issues educating on neurodiversity on Amazon</li>
                                <li>  ● Worked with elementary schools in Houston to launch a neurodiversity curriculum</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">President | National Youth Leadership Training Course </div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Directed day-to-day operations of a 10-day wilderness camp course to teach leadership to scouts </li>
                                <li>  ● Delegated tasks regarding preparation and execution of camp activities</li>
                                <li>  ● Coordinated day and overnight staff trainings throughout the yearm</li>
                            </ul>
                        </div>      
                </div>
            </div>

        </div>
    );
};

export default Experience;