import '../styles/Resume.css'

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
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