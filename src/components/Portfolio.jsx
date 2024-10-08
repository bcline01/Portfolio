import Card from './Card';
import React from 'react';
import animalImage from '../assets/animal.png';
import weatherImage from '../assets/weather.png';
import employeeImage from '../assets/employee.png';
import vehicleImage from '../assets/vehicle.png';
import puzzleImage from '../assets/puzzle.png';
import readmeImage from '../assets/readme.png';
import '../styles/Portfolio.css';



const projects = [
  {
    id: 'p1',
    image: animalImage,
    title: 'Snuggle Squad',
    link: 'https://github.com/bcline01/Animal-Shelter-Project1'
  },
  {
    id: 'p2',
    image: weatherImage,
    title: 'Weather Forecast APP',
    link: 'https://weatherapp-cyn7.onrender.com'
  },
  {
    id: 'p3',
    image: employeeImage,
    title: 'Postgres APP',
    link: 'https://github.com/bcline01/employee_tracker'
  },
  {
    id: 'p4',
    image: vehicleImage,
    title: 'Vehicle Builder',
    link: 'https://github.com/bcline01/vehicle-builder'
  },
  {
    id: 'p5',
    image: puzzleImage,
    title: 'Puzzle Pairs',
    link: 'https://github.com/bcline01/Puzzlepairs'
  },
  {
    id: 'p6',
    image: readmeImage,
    title: 'README creator',
    link: 'https://github.com/bcline01/readme-generator'
  },

]

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="container-fluid">
        <div className="row">
    {projects.map((project) => (
      <div key={project.id} className="col-lg-4 col-md-6 mb-44">
      <Card key={project.id}
      image={project.image}
      title={project.title}
      link={project.link}
      />
      </div>
    ))}
    </div>
    </div>
    </div>
    );
  }
   
export default Portfolio;
