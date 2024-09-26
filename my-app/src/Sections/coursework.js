import React, { useEffect, useRef, useState } from 'react';
import "./coursework.css";

const Coursework = () => {
    const [isVisible, setIsVisible] = useState(false);
    const courseworkRef = useRef(null);

    const handleScroll = () => {
        if (courseworkRef.current) {
            const rect = courseworkRef.current.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
            const isOutOfView = rect.bottom  * 0.33 || rect.top > window.innerHeight * 0.33 ;

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
        <div id="coursework" className="coursework-page">
            <h2 id="coursework-header">Technical Coursework</h2>
            <div ref={courseworkRef} className={isVisible ? "classes visible" : "classes"}>
                <div class="dropdown">
                        <div class="dropdown-header">CS61A: Structure and Interpretation of Computer Programs</div>
                        <div class="dropdown-content">
                            <ul>
                                <li style={{ fontSize: '1.7vh' }}>  ● Focus on abstraction techniques to manage program complexity and learn fundamental computer science principles</li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Procedural and recursive abstraction, higher-order functions, generators, and data abstraction</li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Functional, object-oriented and declarative approaches to programming</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">CS61B: Data Structures and Algorithms</div>
                        <div class="dropdown-content">
                            <ul>
                                <li style={{ fontSize: '1.7vh' }}>  ● Using Java programming language to explore fundamental data structures, including linked structures and hash tables</li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Learning storage and efficiency management within data structures</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">CS70: Discrete Math and Probability Theory</div>
                        <div class="dropdown-content">
                            <ul>
                                <li style={{ fontSize: '1.7vh' }}>  ● Exploring advanced topics in discrete math including logic, induction, and modular arithmetic, with applications in cryptography and algorithm design</li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Learning probability including sample spaces, independence, random variables, and law of large numbers</li>
                                <li style={{ fontSize: '1.7vh' }}>  ● Exploring real-world applications, including the RSA cryptosystem and Bayesian inference, to enhance problem-solving skills in computer science</li>
                            </ul>
                        </div>
                </div>
                <div class="dropdown">
                        <div class="dropdown-header">Data 8: Foundations of Data Science</div>
                        <div class="dropdown-content">
                            <ul>
                                <li style={{ fontSize: '1.7vh' }}>  ● Introducing core concepts of computer programming and statistical inference using analysis of real-world datasets</li>
                            </ul>
                        </div>
                </div>

                <p className="p1"><span>Programming Languages:</span>  &nbsp; Python, Java, SQL, JavaScript, HTML/CSS, Scheme</p>
                <p className="p2"><span>Technologies:</span>  &nbsp; React, Figma, Git, PostgreSQL, Node.js, Firebase, Azure, NumPy</p>

            </div>
        </div>
    );
};

export default Coursework;