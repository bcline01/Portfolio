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
    description: 'Utilizing HTML, CSS, JavaScript, Bootstrap',
    summary: 'This project is an animal adoption website designed to provide a seamless and engaging experience for prospective pet owners while delivering comprehensive information about each pet. The homepage features a visually appealing layout with dog houses, displaying each available pets picture and name. Hovering over a pets profile reveals a clickable link that leads to a detailed page with all relevant adoption information. Once users find their ideal companion, they can complete the adoption process by filling out a form and printing a personalized adoption certificate.',
    link: 'https://github.com/bcline01/Animal-Shelter-Project1'
  },
  {
    id: 'p2',
    image: weatherImage,
    title: 'Weather Forecast APP',
    description: 'Utilizing HTML, CSS, JavaScript, Node.JS, Express.JS, Typescript, Open Weather API, Render for Deployment',
    summary: 'The Weather Dashboard is a web application that allows travelers to view current and future weather conditions for multiple cities. This app helps users plan their trips accordingly by providing a 5-day weather forecast. The application uses the OpenWeather API to retrieve weather data and stores the users search history in a JSON file.',
    link: 'https://weatherapp-cyn7.onrender.com'
  },
  {
    id: 'p3',
    image: employeeImage,
    title: 'Postgres APP',
    description: 'utilizing HTML, Typescript, NODE.JS, Postgres, Inquierer',
    summary: 'Employee Tracker is a command-line application that allows business owners to efficiently manage their companys employee database. The application is built using Node.js, Inquirer, and PostgreSQL. It provides a user-friendly interface for viewing, adding, and updating information about departments, roles, and employees within a company.',
    link: 'https://github.com/bcline01/employee_tracker'
  },
  {
    id: 'p4',
    image: vehicleImage,
    title: 'Vehicle Builder',
    description: 'Utilizing HTML, CSS, Node.JS, Typescript, Inquirer JS',
    summary: 'Vehicle Builder is a command-line application that allows users to create, select, and interact with different types of vehicles. Users can choose to create a new vehicle or select an existing one, provide details about the vehicle, and then perform various actions with it.',
    link: 'https://github.com/bcline01/vehicle-builder'
  },
  {
    id: 'p5',
    image: puzzleImage,
    title: 'Puzzle Pairs',
    description: 'utilizing HTML, CSS, JavaScript, React, Bootstrap',
    summary: 'Puzzle Pairs is an interactive matching card game designed to challenge players by tracking both the time taken and the number of moves required to complete the game. This dynamic approach encourages efficiency and adds a layer of strategy, enhancing the overall gameplay experience.',
    link: 'https://github.com/bcline01/Puzzlepairs'
  },
  {
    id: 'p6',
    image: readmeImage,
    title: 'README creator',
    description: 'utilizing HTML, CSS, NODE.JS, Typescript',
    summary: 'README creator is a user-friendly application designed to generate professional README files effortlessly. This tool serves as a centralized platform where users can quickly and easily create well-structured README files for their projects.',
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
        <section key={project.id} id={`p${index + 1}`} style={{ height: "100vh", background: '#002855', padding: "50px" }}>

          <div className='container'>
            <div className='row'>
              <div className='col-lg-6' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='title-description'>
          <h2 style={{color: 'lightgray'}}>{project.title}</h2>
            <ul>{project.description}</ul>
            <ul>{project.summary}</ul>
            </div>
            </div>
         <div className='col-lg-6' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Card
            image={project.image}
            title={project.title}
            link={project.link}
          />
          </div>
        </div>
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
