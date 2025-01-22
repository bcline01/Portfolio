import React from 'react';
import '../styles/Current.css';
import DocPic from '../assets/doc2.png';
import Haven from '../assets/haven.png';

const Current: React.FC = () => {
    return (
        <div className="current-container">
            <div className='heading'>My Current Projects</div>

            <div className="projects-row">
                {/* Project 1 */}
                <div className="project-item">
                <a href="https://github.com/bcline01/doc-site" target="_blank" rel="noopener noreferrer">
            <img src={DocPic} alt="Project 1" className="project-image-one" />
        </a>                    <div className="project-text">
                        <h2 style={{fontFamily:'raleway'}}>Chiropractic Website</h2>
                        <p style={{fontFamily:'raleway'}}>An intuitive and user-focused website designed for the leading medical practice in the region. It delivers an engaging and inclusive experience for users while empowering doctors with seamless tools to efficiently update and communicate with their patients.</p>
                   <p style={{fontFamily:'raleway'}}> Technologies: React, Typescript, Node, Express, Bootstrap, CSS</p>
                        </div>
                </div>
                {/* <div className="divider" /> */}

                {/* Project 2 */}
                <div className="project-item">
                    <img src={Haven} alt="Project 2" className="project-image-two" />
                    <div className="project-text">
                        <h2 style={{fontFamily:'raleway'}}>The Haven</h2>
                        <p style={{ fontFamily: 'Raleway' }}>A user-centric website featuring innovative layouts and custom plugins, crafted to deliver a visually stunning and seamless experience.</p>
                        <p style={{fontFamily:'raleway'}}> Technologies: WordPress, PHP</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current;
// https://github.com/bcline01/doc-site