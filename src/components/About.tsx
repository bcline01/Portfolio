import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import MyImage from '../assets/IMG.png'; // Replace with the actual path to your image
import '../styles/About.css';

const About: React.FC = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Left Container */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className='welcome'>Welcome</div>
                    <p style={{fontFamily:'raleway'}}>
                    Hello! I'm Brooke, transitioning into software engineering with a strong background in ICU nursing. My experience in critical care has equipped me with the ability to work well under pressure, pay meticulous attention to detail, and collaborate effectively as part of a team. These skills are invaluable in the tech industry, where precision, problem-solving, and teamwork are essential.
            <br></br>
            <br></br>
            <>
            With a solid foundation in{' '} 
            <span className='italic'>JavaScript, TypeScript, Node, Express, React, Python, Angular, PostgreSQL, MongoDB, GraphQL, and Sequalize.</span> I have experience working on a variety of projects, from building dynamic web applications to developing command-line tools. My recent work includes a{' '}
            <span className='underline'>Full Stack Book Club application using React, TypeScript and MongoDB, as well as a Front End application using Angular 19, Tailwind and Sass.</span> My Neweset Projects are listed below in my current projects section.
            </>
            <br></br>
            <br></br>
            When I'm not coding, you can find me hiking, baking or spending time with my family. I'm excited about the opportunity to bring my skills and enthusiasm to a dynamic team and contribute to innovative projects.                    </p>
                </div>

                {/* Divider Line */}
                <div className="col-1 d-none d-md-block">
                    <div className="border-left" style={{ height: '100%', borderColor: 'black' }}></div>
                </div>

                {/* Right Container */}
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <img src={MyImage} alt="About Me" className="img-fluid" style={{borderRadius:'6px'}} />
                </div>
            </div>
        </div>
    );
};

export default About;
