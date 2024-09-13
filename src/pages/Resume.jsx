import '../styles/Resume.css';
import { useState } from 'react';
import { BsCloudDownload } from "react-icons/bs";


export default function Resume() {

  const [isHovered, setIsHovered] = useState(false);

    return (
      <div style={{color: 'lightgray'}}>
        <h1>Resume</h1>
        <a href="https://drive.google.com/file/d/10M4PTfnmX7rbI2TdH-du16eDpYYxj4OR/view?usp=sharing" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
     >
                <BsCloudDownload style={{color: 'white'}}/>
                
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