import React from 'react'
import './contact.css'
import LinkedIn from '/Users/kintonduong/Desktop/personal-website/my-app/src/linkedin.png';


const Contact = () => {

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/kinton-duong-027b4b165/', '_blank');

    }

    const handleEmailClick = () => {
          window.location.href = 'mailto:kintond15@berkeley.edu';
    }
    
      
    
    return (
        
        <div id="contact" className="contact-page">
            <h2 id="contactheader">Contact</h2>

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

            </div>

            
    );
};

export default Contact