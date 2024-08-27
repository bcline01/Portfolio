import Card from './Card';



const projects = [
  {
    id: 'p1',
    image: 'animal.png',
    title: 'string',
    link: 'https://github.com/bcline01/Animal-Shelter-Project1'
  },
  {
    id: 'p2',
    image:'',
    title: 'string',
    link: 'https://github.com/bcline01/weatherAPP'
  },
  {
    id: 'p3',
    image: '',
    title: 'string',
    link: 'https://github.com/bcline01/employee_tracker'
  },
  {
    id: 'p4',
    image: '',
    title: 'string',
    link: 'https://github.com/bcline01/vehicle-builder'
  },
  {
    id: 'p5',
    image: '',
    title: 'string',
    link: 'https://github.com/bcline01/puzzle-pairs-game'
  },
  {
    id: 'p6',
    image: '',
    title: 'string',
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
   

