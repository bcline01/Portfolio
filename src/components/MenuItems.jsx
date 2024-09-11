// MenuItems.jsx
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#656d4a", "#656d4a", "#656d4a", "#656d4a", "#656d4a"];

export const MenuItem = ({ i, text }) => {
  const style = { border: `1px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={style}
      
    >
      {text}
      
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
