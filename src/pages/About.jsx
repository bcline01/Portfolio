import React from 'react';
import aboutImage from '../assets/About.png'; // Import the image

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={aboutImage} alt="About Me" className='rounded-circle' style={{ width: '70px', maxWidth: '600px', height: 'auto' }} />
      
    </div>
  );
}
