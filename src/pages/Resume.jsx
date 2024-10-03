import '../styles/Resume.css';
import { useState } from 'react';
import { BsCloudDownload } from "react-icons/bs";


export default function Resume() {

  const [isHovered, setIsHovered] = useState(false);

    return (
      <div className='resume'>
        <h1>Resume</h1>
        <a href="https://docs.google.com/document/d/1x5r2sZ6MutfdyPeUiVCaNKQnz3b0Zo2_ExI66-wCmmY/export?format=pdf" target="_blank" rel="noopener noreferrer"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
     >
                <BsCloudDownload style={{color: 'black', fontSize: '24px'}}/>
                
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