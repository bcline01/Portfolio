import '../styles/Resume.css';
import downloadIcon from '../assets/downlaod.png';
import { useState } from 'react';

export default function Resume() {

  const [isHovered, setIsHovered] = useState(false);

    return (
      <div>
        <h1>Resume</h1>
        <a href="https://drive.google.com/file/d/10M4PTfnmX7rbI2TdH-du16eDpYYxj4OR/view?usp=sharing" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
     >
                <img
                    src={downloadIcon}
                    alt="resume"
                    style={{ width: '20px', 
                      height: '20px',
                      filter: isHovered ? 'brightness(0) saturate(100%) invert(64%) sepia(28%) saturate(3534%) hue-rotate(177deg) brightness(98%) contrast(88%)' : 'none', }}
                />
            </a>
        <div className="resumeFront">Front End Proficiencies</div>
        <br></br>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <br></br>
        <div className="resumeBack">Back End Proficiencies</div>
        <br></br>
        <ul>
            <li>API</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
        
        </div>
    );
  }