import Card from './Card';
import React from 'react';
import animalImage from '../assets/animal.png'
import weatherImage from '../assets/weather.png'
import employeeImage from '../assets/employee.png'
import vehicleImage from '../assets/vehicle.png'
import puzzleImage from '../assets/puzzle.png'
import readmeImage from '../assets/readme.png'



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
    title: 'Weather Forecase APP',
    link: 'https://github.com/bcline01/weatherAPP'
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
    link: 'https://github.com/bcline01/puzzle-pairs-game'
  },
  {
    id: 'p6',
    image: readmeImage,
    title: 'README creator',
    link: 'https://github.com/bcline01/readme-generator'
  },

]

function Portfolio({projects}) {
  return (
    <div className='portfolio'> 
    {projects.map((project) => (
      <Card key={project.id}
      image={project.image}
      title={project.title}
      link={project.link}
      />
    ))}
    </div>
    );
  }
   
export default Portfolio;
