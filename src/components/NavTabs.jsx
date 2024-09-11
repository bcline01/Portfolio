import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './MenuItems';
import { FiAlignJustify } from "react-icons/fi";




// Path component for animated menu lines
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

// MenuToggle component with animated SVG
export const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'fixed', 
      top: '20px', 
      left: '20px',
      zIndex: 1001 
    }}
  >
    {/* <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg> */}
    <FiAlignJustify />
  </button>
);

// Sidebar animation variants
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`, // Expanding from top-left (40px, 40px)
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)', // Small circle at top-left (40px, 40px)
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};


// NavTabs component for your navigation links

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/About' },
  { name: 'Portfolio', path: '/Portfolio' },
  { name: 'Contact', path: '/Contact' },
  { name: 'Resume', path: '/Resume' }
];

const NavTabs = () => {
  const currentPage = useLocation().pathname;

  return (
    <ul style={{listStyleType: 'none'}}>
      {menuItems.map((item, index) => (
        <li key={item.path} style={{marginBottom: 10, width: 150}} >
          <Link
            to={item.path}
            className={currentPage === item.path ? 'nav-link active' : 'nav-link'}
            style={{ color: 'black', fontSize: '18px', textDecoration: 'none' }}
          >
            <MenuItem i={index} text={item.name} />
            
          </Link>
        </li>
      ))}
    </ul>
  );
};


// Main component with the animated menu and toggle button
export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar} // use the new sidebar animation here
        
        style={{
          backgroundColor: '#ede0d4',
          width: '25vw', // Full width to expand downwards
          height: '100vh', // Full height for the downward effect
          position: 'fixed', // Fixed to the top
          top: '0',
          left: '0',
          overflow: 'hidden',
          zIndex: 1000, // Behind the button
          paddingTop: '80px', // Padding to push links down from the toggle button
        }}
      >
        <NavTabs />
      </motion.nav>
      
      {/* Toggle button for opening/closing the menu */}
      <MenuToggle toggle={() => setIsOpen(prev => !prev)} />
    </div>
  );
};

export default MyComponent;
