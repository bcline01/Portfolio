import React from 'react';
import '../styles/Home.css';
import Video from '../assets/video.mp4'
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';

const Home: React.FC = () => {
   

    return (
        <div id="section1" className="home-page">
        {/* Video Background */}
        <video autoPlay muted loop className="video-background">
            <source src={Video} type="video/mp4" />
        </video>
        
        <div className="outer-headings">
            <div className="inner-headings">
                <span>
                    Developer <br />
                    Creator <br />
                    Animator <br />
                    Designer <br />
                </span>
            </div>
        </div>
        <Nav /> 
       

        <div id='section2'>
            <About />
            </div>
            <div id='section3'>
            <Projects />
        </div>
        <div id='section3'>
            <Contact />
            </div>
    </div>

    );
};

export default Home;