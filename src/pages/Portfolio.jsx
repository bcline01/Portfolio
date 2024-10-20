import Card from '../components/Card';
import React from 'react';
import animalImage from '../assets/animal2.png';
import weatherImage from '../assets/weather.png';
import employeeImage from '../assets/postgres.png';
import vehicleImage from '../assets/vehicle.png';
import puzzleImage from '../assets/pp.png';
import '../styles/Portfolio.css';
import { useState, useEffect } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import bookshelfImage from '../assets/bookshelf.png';
import candidateImage from '../assets/candidate.png';
import kanbanImage from '../assets/kanban.png';
import socialImage from '../assets/social.png';
import googleImage from '../assets/googlesearch.png';





const projects = [
  {
    id: 'p1',
    image: bookshelfImage,
    title: 'BookShelf- Full Stack',
    description: 'HTML, CSS, Typescript, Bcrypt, JWT, Sequelize, Axios, React, Bootstrap',
    summary: 'This is an online personal library for users to interact with. This application utilizes Google Books API as well as New York Times API.',
    link: 'https://github.com/bcline01/BookShelf'
  },
  {
    id: 'p2',
    image: kanbanImage,
    title: 'Kanban Board- Full Stack',
    description: 'HTML, CSS, Typescript, Node.JS, React, postgresSQL, Express.JS, JWT, Bcrypt',
    summary: 'It allows users to log in, manage tasks in a Kanban-style interface, and ensures that only authenticated users can access and manipulate data.',
    link: 'https://github.com/bcline01/kanban-board'
  },
  {
    id: 'p3',
    image: googleImage,
    title: 'Google Book Search- Full Stack',
    description: 'HTML, CSS, Bootstrap,React, Node.JS, Express.JS, Typescript, bcrypt, JWT, MongoDB, GraphQL',
    summary: 'Using the Open Weather API, the user is able to view current and future weather conditions for multiple cities.',
    link: 'https://github.com/bcline01/weatherAPP'
  },
  {
    id: 'p4',
    image: weatherImage,
    title: 'Weather Forecast- Full Stack',
    description: 'HTML, CSS, Bootstrap, JavaScript, Node.JS, Express.JS, Typescript, Open Weather API',
    summary: 'Using the Open Weather API, the user is able to view current and future weather conditions for multiple cities.',
    link: 'https://github.com/bcline01/weatherAPP'
  },
  {
    id: 'p5',
    image: animalImage,
    title: 'Pet Adoption- Front End',
    description: 'HTML, CSS, JavaScript, Bootstrap',
    summary: 'This project is an animal adoption website designed to provide a seamless and engaging experience for prospective pet owners while delivering comprehensive information about each pet.',
    link: 'https://github.com/bcline01/Animal-Shelter'
  },
  {
    id: 'p6',
    image: puzzleImage,
    title: 'Puzzle Pairs- Front End',
    description: 'HTML, CSS, JavaScript, React, Bootstrap, Framer-Motion',
    summary: 'Puzzle Pairs is an interactive matching card game designed to challenge players by tracking both the time taken and the number of moves required to complete the game. This dynamic approach encourages efficiency and adds a layer of strategy, enhancing the overall gameplay experience.',
    link: 'https://github.com/bcline01/Puzzlepairs'
  },
  {
    id: 'p7',
    image: candidateImage,
    title: 'Candidate Search- Front End',
    description: 'HTML, CSS, Bootstrap, Typescript, Node.JS, React, Sequelize',
    summary: 'Created an application that allows the user to pull a random github user with public information and either add them to their saved user list or skip and continue their search.',
    link: 'https://github.com/bcline01/candidate-search'
  },
  {
    id: 'p8',
    image: socialImage,
    title: 'Social Network- Back End',
    description: 'Typescript, Node.JS, Express.JS, MongoDB with Mongoose ODM',
    summary: 'The API supports CRUD operations for users, thoughts, reactions, and friendships, offering the core functionalities required for a social network.',
    link: 'https://github.com/bcline01/social-network'
  },
  {
    id: 'p9',
    image: employeeImage,
    title: 'Postgres APP- Back End',
    description: 'HTML, Typescript, Node.JS, PostgresSQL, Inquierer',
    summary: 'This command-line application allows business owners to efficiently manage their companys employee database. It provides a user-friendly interface for viewing, adding, and updating information about departments, roles, and employees within a company.',
    link: 'https://github.com/bcline01/employee_tracker'
  },
  {
    id: 'p10',
    image: vehicleImage,
    title: 'Vehicle Builder- Back End',
    description: 'HTML, CSS, Node.JS, Typescript, Inquirer',
    summary: 'A command-line application that allows users to create, select, and interact with different types of vehicles. Users can choose to create a new vehicle or select an existing one, provide details about the vehicle, and then perform various actions with it.',
    link: 'https://github.com/bcline01/vehicle-builder'
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

  }, []);

  return (
    
    <div className='portfolio'>
      {projects.map((project, index) => (
        <section key={project.id} id={`p${index + 1}`} style={{ height: "100vh", background: '#08193b', padding: "50px" }}>

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
