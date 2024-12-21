import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="container my-5">
            <div style={{fontFamily:'raleway', fontSize: '5rem', textTransform:'uppercase', letterSpacing:'2px'}} className="text-center">Contact Me</div>

            <div className="text-center mb-4 ">
                <p className='work'>I am available for work! Feel free to reach out to me:</p>
                <div className="d-flex justify-content-center gap-4">
                    {/* GitHub link */}
                    <a href="https://github.com/bcline01" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaGithub size={40} />
                    </a>
                    
                    {/* LinkedIn link */}
                    <a href="https://www.linkedin.com/in/brookecline23" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaLinkedin size={40} />
                    </a>

                    {/* Email link */}
                    <a href="mailto:brookecline.dev@gmail.com" className="contact-icon">
                    <MdEmail size={40} />
                    </a>
                </div>
            </div>

            <div className="text-center">
                <p className='work'>If you want to collaborate on a project, or just want to say hi, feel free to reach out to me!</p>
                {/* Another email link */}
                <a href="mailto:mailto:brookecline.dev@gmail.com" className="contact-icon">
                <MdEmail size={40} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
