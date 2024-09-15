import Card from './Card';
import React from 'react';
import animalImage from '../assets/animal.png';
import weatherImage from '../assets/weather.png';
import employeeImage from '../assets/employee.png';
import vehicleImage from '../assets/vehicle.png';
import puzzleImage from '../assets/puzzle.png';
import readmeImage from '../assets/readme.png';
import '../styles/Portfolio.css';
import { useState, useEffect } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';





const projects = [
  {
    id: 'p1',
    image: animalImage,
    title: 'Pet Adoption Website',
    description: 'utilizing HTML, CSS, JavaScript',
    link: 'https://github.com/bcline01/Animal-Shelter-Project1'
  },
  {
    id: 'p2',
    image: weatherImage,
    title: 'Weather Forecast APP',
    description: 'utilizing HTML',
    link: 'https://weatherapp-cyn7.onrender.com'
  },
  {
    id: 'p3',
    image: employeeImage,
    title: 'Postgres APP',
    description: 'utilizing HTML, CSS, JavaScript',
    link: 'https://github.com/bcline01/employee_tracker'
  },
  {
    id: 'p4',
    image: vehicleImage,
    title: 'Vehicle Builder',
    description: 'utilizing HTML, CSS, JavaScript',
    link: 'https://github.com/bcline01/vehicle-builder'
  },
  {
    id: 'p5',
    image: puzzleImage,
    title: 'Puzzle Pairs',
    description: 'utilizing HTML, CSS, JavaScript',
    link: 'https://github.com/bcline01/Puzzlepairs'
  },
  {
    id: 'p6',
    image: readmeImage,
    title: 'README creator',
    description: 'utilizing HTML, CSS, JavaScript',
    link: 'https://github.com/bcline01/readme-generator'
  },

]



function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index) => {
    const sectionId = `p${index + 1}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        scrollToSection(0); // Go back to the first section when scrolled to the bottom
      }
    };

    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    
    <div className='portfolio'>
      {projects.map((project, index) => (
        <section key={project.id} id={`p${index + 1}`} style={{ height: "100vh", background: '#3d5a80', padding: "50px" }}>

          <div className='grid-container'>
            <div className='title-description'>
          <h2 style={{color: 'lightgray'}}>{project.title}</h2>
            <ul>{project.description}</ul>
            </div>
          <Card
            image={project.image}
            title={project.title}
            link={project.link}
          />
          
        </div>
        </section>
      ))}
      <div className="scroll-buttons">
        <button className="scroll-button scroll-up" onClick={() => scrollToSection(Math.max(currentSection - 1, 0))}>
          <FaAngleDoubleUp />
        </button>
        <button className="scroll-button scroll-down" onClick={() => scrollToSection(Math.min(currentSection + 1, projects.length - 1))}>
          <FaAngleDoubleDown />
        </button>
      </div>
    </div>
    
  );
}

export default Portfolio;
