import React from 'react';
import aboutImage from '../assets/linkedin.png'; // Import the image


export default function About() {
  return (
    <div className="container" style={{marginTop: '80px'}}>
      <div className="row">
        <div className="col-lg-6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ color: 'lightgray' }}>
            Hello! I'm Brooke, transitioning into software engineering with a strong background in ICU nursing. My experience in critical care has equipped me with the ability to work well under pressure, pay meticulous attention to detail, and collaborate effectively as part of a team. These skills are invaluable in the tech industry, where precision, problem-solving, and teamwork are essential.
            <br></br>
            <br></br>
            With a solid foundation in JavaScript, Node.js, TypeScript, PostgreSQL and React, I have experience working on a variety of projects, from building dynamic web applications to developing command-line tools. My recent work includes a weather dashboard application using TypeScript and the OpenWeather API, a command-line application for managing databases with Node.js and Inquirer, as well as a kids card matching game using React and JavaScript.
            <br></br>
            <br></br>
            When I'm not coding, you can find me hiking, baking or spending time with my family. I'm excited about the opportunity to bring my skills and enthusiasm to a dynamic team and contribute to innovative projects.
          </div>
        </div>

        <div className="col-lg-6">
          <img src={aboutImage} alt="About Me"  style={{ width: '450px', maxWidth: '600px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px', borderRadius: '10px'}} />
        </div>


      </div>
    </div>
  );
}

