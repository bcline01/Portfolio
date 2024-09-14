import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './MenuItems';
import { FiAlignJustify } from "react-icons/fi";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

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
      zIndex: 1001,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px', 
      height: '40px',
    }}
  >
    <FiAlignJustify style={{ fontSize: '24px' }}/>
  </button>
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/About' },
  { name: 'Portfolio', path: '/Portfolio' },
  { name: 'Contact', path: '/Contact' },
  { name: 'Resume', path: '/Resume' }
];

const NavTabs = ({ setIsOpen }) => {
  const currentPage = useLocation().pathname;

  return (
    <ul style={{ listStyleType: 'none' }}>
      {menuItems.map((item, index) => (
        <li key={item.path} style={{ marginBottom: 10, width: 150 }}>
          <Link
            to={item.path}
            className={currentPage === item.path ? 'nav-link active' : 'nav-link'}
            style={{ color: 'black', fontSize: '18px', textDecoration: 'none' }}
            onClick={() => setIsOpen(false)}  
          >
            <MenuItem i={index} text={item.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
        style={{
          backgroundColor: '#d9d9d9',
          width: '15vw',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
          overflow: 'hidden',
          zIndex: 1000,
          paddingTop: '80px',
        }}
      >
        <NavTabs setIsOpen={setIsOpen} /> {/* Pass setIsOpen to NavTabs */}
      </motion.nav>

      <MenuToggle toggle={() => setIsOpen(prev => !prev)} />
    </div>
  );
};

export default MyComponent;
