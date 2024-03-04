import React from 'react';
import "./coursework.css";

const Coursework = () => {
    return (
        <div id="coursework" className="coursework-page">
            <h2 id="coursework-header">Technical Coursework</h2>
            <div class = "classes">
                <div class="dropdown">
                        <div class="dropdown-header">CS61A: Structure and Interpretation of Computer Programs</div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Focus on abstraction techniques to manage program complexity and learn fundamental computer science principles</li>
                                <li>  ● Procedural and recursive abstraction, higher-order functions, generators, and data abstraction</li>
                                <li>  ● Functional, object-oriented and declarative approaches to programming</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">CS61B: Data Structures</div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Using Java programming language to explore fundamental data structures, including linked structures and hash tables</li>
                                <li>  ● Learning storage and efficiency management within data structures</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">Data 8: Foundations of Data Science</div>
                        <div class="dropdown-content">
                            <ul>
                                <li>  ● Introducing core concepts of computer programming and statistical inference using analysis of real-world datasets</li>
                            </ul>
                        </div>
                </div>

                <p1> <span>Programming Languages: </span> &nbsp; Python, Java, SQL, Scheme, C++ (self-taught), HTML</p1>
                <p2><span> Tools: </span>  &nbsp; React, Figma, Visual Studio Code, Intellij, Github</p2>
            </div>
        </div>
    );
};

export default Coursework;