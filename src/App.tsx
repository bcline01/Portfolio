import $ from 'jquery'; // Correct way to import jQuery
import React, { useEffect } from 'react';
import Home from './pages/Home';
import './App.css';

const App: React.FC = () => {

  useEffect(() => {
    // Use jQuery logic here if necessary
    $(document).ready(() => {
      console.log('jQuery is working!');
    });
  }, []);
  
    return (
        <div className='App'>
          < Home />
       
        </div>
      );
    };
    export default App;
