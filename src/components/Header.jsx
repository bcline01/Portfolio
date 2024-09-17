import React from "react";
import NavTabs from "./NavTabs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





function Header() {
    return (
        <div className="header">
            
            <a href="https://github.com/bcline01" target="_blank" rel="noopener noreferrer">
               
                <FaGithub style={{color: 'white', position: 'fixed', right:'20px', fontSize: '40px' }}/>

            </a>
            <a href="https://www.linkedin.com/in/brookecline23/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{color: 'white', position: 'fixed', right:'65px', fontSize: '40px' }}/>
            </a>
            <NavTabs/>

        </div>
    )
}

export default Header;