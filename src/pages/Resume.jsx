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
                <BsCloudDownload   style={{
        color: 'black',
        fontSize: '24px',
        transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        transition: 'transform 0.3s ease', // Smooth transition
      }}/>
                
            </a>
        <div className="resumeFront">Front End Proficiencies</div>
       
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Sass</li>
          </ul>
        
        <div className="resumeBack">Back End Proficiencies</div>
        
        <ul id='back'>
            <li>API</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>PostgresSQL</li>
            <li>Sequelize</li>
            <li>NoSQL- MongoDB</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            




            
          </ul>
        
        </div>
    );
  }