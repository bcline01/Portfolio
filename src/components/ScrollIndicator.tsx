import React from 'react';
import '../styles/ScrollIndicator.css';

const ScrollIndicator: React.FC = () => {
    return (
        <div className="scroll-indicator">
            <div className="arrow">&#8595;</div> {/* Down arrow symbol */}
        </div>
    );
};

export default ScrollIndicator;
