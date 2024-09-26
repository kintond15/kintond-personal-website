import React from 'react'
import './contact.css'
import LinkedIn from '../assets/linkedin.png';


const Contact = () => {

    

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/kinton-duong-027b4b165/', '_blank');

    }

    const handleEmailClick = () => {
          window.location.href = 'mailto:kintond15@berkeley.edu';
    }
    
      
    
    return (
        
        <div id="contact" className="contact-page">
            <h2 id="contactheader">Let's Connect!</h2>

                 <div class = "contacts">
                    <div class = "linkedin-icon">
                        <img
                          src={LinkedIn}

                            style={{
                                 display: 'flex',
                                 width: '9vh',
                                 height: 'auto', 
                                 cursor: 'pointer', 
                             }}

                             onClick={redirectToLinkedIn}
                         />
                    </div>      
                     <div class = "email">
                        <button class = "email-button" 
                             onClick={handleEmailClick}>
            Email Me
                        </button>
                    </div>
                </div>


                <p> Created by Kinton Duong</p>

            </div>

            
    );
};

export default Contact