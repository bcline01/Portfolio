import React from "react";
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import stackOverflowIcon from '../assets/stackoverflow.png';


function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/bcline01" target="_blank" rel="noopener noreferrer">
                <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{ width: '40px', height: '40px' }}
                />
            </a>
            <a href="https://www.linkedin.com/in/brookecline23/" target="_blank" rel="noopener noreferrer">
        <img 
          src={linkedinIcon} 
          alt="LinkedIn" 
          style={{ width: '40px', height: '40px', marginLeft: '8px' }} 
        />
      </a>
      <a href="https://stackoverflow.com/users/27184099/brooke-cline?tab=profile" target="_blank" rel="noopener noreferrer">
        <img 
          src={stackOverflowIcon} 
          alt="StackOverFlow" 
          style={{ width: '150px', height: '40px' , marginLeft: '8px'}} 
        />
      </a>
        </footer>
    )
}

export default Footer;