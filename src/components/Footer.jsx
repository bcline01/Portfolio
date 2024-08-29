import React from "react";
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';


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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img 
          src={linkedinIcon} 
          alt="LinkedIn" 
          style={{ width: '40px', height: '40px' }} 
        />
      </a>
        </footer>
    )
}

export default Footer;